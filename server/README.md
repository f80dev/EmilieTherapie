# Serveur psy-site

Unified proxy FastAPI (`unified_proxy.py`) déployé sur Google Cloud Run.
Expose les endpoints Google Calendar / Tasks + admin + MCP + psybot.

## Endpoints principaux

| Méthode | Route | Description |
|---|---|---|
| GET  | `/api/health`                          | Health check simple |
| GET  | `/api/health/psybot`                   | Health psybot (corpus size, mode mock LLM) |
| POST | `/api/psybot/chat`                     | Envoi d'un message au psybot RAG |
| GET  | `/api/calendar/busy`                   | Créneaux occupés Google Calendar |
| POST | `/api/tasks/add-task`                  | Création de tâche RDV (Google Tasks) |
| POST | `/api/sendemail`                       | Envoi d'email SMTP (Ionos) |
| GET  | `/api/admin/tokens`                    | Liste des tokens MCP |
| POST | `/api/admin/tokens`                    | Crée un token MCP |
| ... | (cf. `unified_proxy.py` pour la liste complète) | |

## Psybot

### Concept

Assistant conversationnel RAG strictement informatif sur l'Intelligence
Relationnelle, l'EMDR, la théorie polyvagale, l'attachement et la blessure
psychique. Pas de diagnostic, pas d'avis thérapeutique personnalisé, pas de
promesse de guérison. Détection de détresse → message d'urgence (3114 / 15 / 114).

### Architecture

```
[ Browser /psybot ]
      │ POST /api/psybot/chat
      ▼
[ FastAPI: unified_proxy.py ]
      │
      ├─► Emergency regex short-circuit
      │
      ├─► RAG (rag.py : TF-IDF sur server/knowledge/*.md)
      │     └─► top-k passages pertinents
      │
      ├─► Build system prompt + context + history (last 4 turns)
      │
      └─► LLM (llm.py : MiMo via urllib stdlib)
            └─► Answer
```

### Variables d'environnement

| Nom | Requis | Description |
|---|---|---|
| `MIMO_API_KEY` | prod | Clé API MiMo. À configurer comme variable secrète Cloud Run, jamais commiter. |
| `MIMO_MOCK`    | optionnel | Si `=1`, active le mode mock (réponses pédagogiques sans appeler l'API). Actif par défaut si `MIMO_API_KEY` est absent. |
| `MIMO_ENDPOINT`| optionnel | URL de l'API chat completions (défaut : `https://api.mimo.ai/v1/text/chatcompletion_v2`). À confirmer avec la doc officielle MiMo. |

### Endpoints

#### `GET /api/health/psybot`

```json
{ "status": "ok", "corpus_size": 6, "llm_mock": true }
```

#### `POST /api/psybot/chat`

Body :
```json
{
  "message": "C'est quoi l'EMDR ?",
  "session_id": "uuid-v4-optionnel",
  "history": [
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."}
  ]
}
```

Réponse (succès) :
```json
{
  "answer": "L'EMDR (Eye Movement Desensitization and Reprocessing)...",
  "sources": [
    { "title": "Qu'est-ce que l'EMDR ?", "source": "emdr.md", "score": 0.24 }
  ],
  "emergency": false
}
```

Réponse (détresse détectée) :
```json
{
  "answer": "Ce que vous décrivez semble être une détresse importante...",
  "sources": [],
  "emergency": true
}
```

Codes d'erreur :
- `400` — message vide ou > 1500 caractères
- `502` — erreur upstream LLM
- `503` — psybot non disponible (modules absents)

### Ajouter une fiche à la base de connaissances

1. Créer `server/knowledge/mon-sujet.md`
2. Structurer avec des `## ` headings (chaque section = un passage indexé)
3. Commit + redéploiement (le RAG rebuild à chaque boot du container)

Le redémarrage Cloud Run prend ~30 secondes à cause du cold start ; le
chargement du corpus prend <100 ms pour un fichier de 4 ko.

## Tests

```bash
cd server
python3 test_rag.py
python3 test_llm.py
```

Le serveur n'a pas de suite pytest formelle (pas de pytest installé dans
l'env de déploiement), les tests sont écrits en scripts `python3 test_*.py`
avec une convention `test_*()` discoverable à la main.

## Déploiement

```bash
# Build local
gcloud builds submit --tag gcr.io/PROJECT/emilieproxy

# Deploy Cloud Run
gcloud run deploy emilieproxy \
  --image gcr.io/PROJECT/emilieproxy \
  --region europe-west1 \
  --set-env-vars "GOOGLE_ACCOUNT=$(cat google_account.json)" \
  --set-secrets "MIMO_API_KEY=projects/PROJECT/secrets/mimo-api-key:latest" \
  --allow-unauthenticated
```
