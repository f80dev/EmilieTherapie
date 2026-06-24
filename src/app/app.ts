import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import * as packageJson from '../../package.json';

interface BusySlot {
  time: string;
  duration: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

interface UserContactData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

const LOCALSTORAGE_KEY = 'emilie_therapie_user_data';
const SITE_VERSION = packageJson.version;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatExpansionModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  private snackBar = inject(MatSnackBar);

  protected readonly title = signal('Psychothérapie');
  protected readonly siteVersion = SITE_VERSION;

  // Form fields
  nom = signal('');
  prenom = signal('');
  email = signal('');
  telephone = signal('');
  message = signal('');
  selectedDate = signal<Date | null>(null);
  selectedTime = signal<string>('');
  seanceType = signal<'distant' | 'presentiel'>('presentiel');
  isMobileMenuOpen = signal(false);
  acceptTerms = signal(false);

  // 75-minute slots from 8h to 20h (last start at 18h45 for a 75min session ending at 20h)
  timeSlots: string[] = [
    '08:00',
    '09:15',
    '10:30',
    '11:45',
    '13:00',
    '14:15',
    '15:30',
    '16:45',
    '18:00',
    '19:15',
  ];

  // Busy slots fetched from Google Calendar: date string → busy slots for that day
  busySlots = signal<Map<string, BusySlot[]>>(new Map());

  // Loading state for calendar
  loadingSlots = signal(false);

  // FAQs loaded from JSON
  faqs =
   [
      {
        id: 1,
        question: 'Est-ce que votre approche est vraiment faite pour moi ?',
        reponse:
          "Il n'y a pas de « bon profil » pour consulter. Si mon approche résonne en vous, je vous invite à faire l'expérience d'une première séance. Elle ne vous engage en rien pour la suite.",
        icon: 'psychology',
      },
      {
        id: 2,
        question: 'Et si je ne sais pas quoi dire ni par quoi commencer ?',
        reponse:
          "C'est une situation fréquente et parfaitement normale. Vous n'avez rien à préparer. Ma pratique intègre le coeur, le corps et l'esprit. Aussi, si les mots vous manquent ou si la confusion s'installe, nous partirons simplement de vos sensations au moment présent. Je m'ajuste à vous.",
        icon: 'chat',
      },
      {
        id: 3,
        question: 'Quel est le rythme idéal entre deux séances ?',
        reponse:
          'Pour offrir des repères stables à votre système nerveux, un rythme hebdomadaire ou bimensuel est souvent le plus adapté au départ. Nous définissons ce tempo ensemble et le réajustons au fil de votre accompagnement, pour être au plus près de vos besoins.',
        icon: 'calendar_month',
      },
      {
        id: 4,
        question: "Un suivi en intelligence relationnelle, ça représente combien de séances ?",
        reponse:
          "Cela varie selon votre histoire et vos objectifs. En IR, nous travaillons sur des schémas de protection profondément ancrés : vos « modèles internes opérants ». Les faire évoluer demande du temps et un lien de confiance robuste. J'applique le principe suivant : « Slow is fast ». Car ralentir est parfois le moyen le plus sécurisant pour transformer durablement votre quotidien et apaiser votre système nerveux.",
        icon: 'timelapse',
      },
      {
        id: 5,
        question: "Vous pouvez me résumer l'intelligence relationnelle en 2 phrases ?",
        reponse:
          "C'est une thérapie psycho-corporelle d'orientation neurobiologique (Bon, là, vous êtes bien avancé.e). J'utilise la sécurité du lien thérapeutique pour aider votre « cerveau du haut » (la logique, la pensée) à se réassocier harmonieusement avec votre « cerveau du bas » (les sensations, les émotions, les mémoires inconscientes), là où le trauma et les carences passées ont créé de la rigidité et des coupures.",
        icon: 'summarize',
      },
      {
        id: 6,
        question: "Quelle différence avec l'intelligence émotionnelle ?",
        reponse:
          "Ce sont, en effet, deux approches bien distinctes. L'intelligence émotionnelle est un outil comportemental axé sur la gestion et la compréhension de ses émotions, au quotidien. L'intelligence relationnelle est un modèle thérapeutique à la fois profond et doux. Il utilise la relation thérapeutique pour reprogrammer le système nerveux autonome et restaurer un sentiment durable de sécurité intérieure.",
        icon: 'compare_arrows',
      },
      {
        id: 7,
        question: 'Est-il question de revivre mes traumas en séance ?',
        reponse:
          "Certainement pas. Replonger dans le récit du passé peut réactiver votre dérégulation nerveuse, sans la résoudre. Aussi, je travaille depuis l'empreinte que le trauma laisse — au présent — dans votre corps (des tensions, certains réflexes de protection, des élans de fuite ou de défense inhibés...) et, ensemble, nous libérons votre système nerveux sans jamais forcer, via la co-régulation.",
        icon: 'healing',
      },
      {
        id: 8,
        question: "Présentiel ou visio : qu'est-ce qui est le mieux ?",
        reponse:
          'La réussite de la thérapie repose fondamentalement sur la sécurité dans le lien, peu importe le canal privilégié. Le présentiel vous offre un espace « cocon » et un cadre physique dédié (un repère clair). La visio préserve votre confort intérieur et vous offre plus de souplesse logistique. Les deux modalités sont interchangeables, selon vos préférences et vos besoins de co-régulation.',
        icon: 'devices',
      },
      {
        id: 9,
        question: 'Vos séances sont-elles remboursées ?',
        reponse:
          "En tant que psycho-praticienne, mes séances ne sont pas prises en charge par la Sécurité sociale. Cependant, de nombreuses mutuelles complémentaires proposent aujourd'hui un remboursement partiel ou forfaitaire de certains accompagnements thérapeutiques. Je vous invite à vous renseigner auprès de votre organisme complémentaire.",
        icon: 'payments',
      },
    ]


  methodPrinciples = [
    {
      icon: 'favorite',
      title: 'Guérison relationnelle',
      description:
        'La relation thérapeutique comme levier biologique pour accéder aux parties de soi figées dans la protection.',
    },
    {
      icon: 'psychology',
      title: 'Engagement Thérapeutique Conscient',
      description:
        "Une présence ajustée qui rejoint le patient là où le lien avec soi-même et les autres s'est rompu.",
    },
    {
      icon: 'self_improvement',
      title: 'Réorganisation protectrice',
      description:
        'Comprendre le trauma comme une organisation défensive du système nerveux, pas un dysfonctionnement.',
    },
    {
      icon: 'link',
      title: 'Rétablir le lien',
      description:
        "Relier la pensée et le corps pour transformer l'insécurité chronique en sentiment de sécurité retrouvée.",
    },
  ];

  private cloudSizes = ['xl', 'lg', 'md', 'sm', 'xs'];
  private cloudRotations = [0, 5, -5, 10, -10, 3, -3, 8, -8];
  private cloudColors = [
    '#5c6f7d',
    '#7a8fa3',
    '#4a5c6a',
    '#6b8299',
    '#8fa4b8',
    '#9eb3c4',
    '#5d7a8f',
    '#4e6d7a',
    '#6a8a9e',
    '#7d97a8',
  ];

  getCloudSize(index: number): string {
    return this.cloudSizes[index % this.cloudSizes.length];
  }

  getCloudRotation(index: number): number {
    return this.cloudRotations[index % this.cloudRotations.length];
  }

  getCloudColor(index: number): string {
    return this.cloudColors[index % this.cloudColors.length];
  }

  ngOnInit() {
    this.loadUserDataFromLocalStorage();
  }


  private loadUserDataFromLocalStorage(): void {
    console.log('[LocalStorage] Attempting to load user data...');
    try {
      const stored = localStorage.getItem(LOCALSTORAGE_KEY);
      if (stored) {
        const data: UserContactData = JSON.parse(stored);
        console.log('[LocalStorage] Data found:', data);
        this.nom.set(data.nom || '');
        this.prenom.set(data.prenom || '');
        this.email.set(data.email || '');
        this.telephone.set(data.telephone || '');
        console.log('[LocalStorage] User data loaded successfully');
      } else {
        console.log('[LocalStorage] No stored data found');
      }
    } catch (err) {
      console.error('[LocalStorage] Failed to load user data:', err);
    }
  }

  private saveUserDataToLocalStorage(): void {
    console.log('[LocalStorage] Attempting to save user data...');
    try {
      const data: UserContactData = {
        nom: this.nom(),
        prenom: this.prenom(),
        email: this.email(),
        telephone: this.telephone(),
      };
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
      console.log('[LocalStorage] User data saved:', data);
    } catch (err) {
      console.error('[LocalStorage] Failed to save user data:', err);
    }
  }

  onContactFieldChange(): void {
    this.saveUserDataToLocalStorage();
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isSlotAvailable(time: string): boolean {
    const date = this.selectedDate();
    if (!date) return false;

    const dateStr = this.dateToString(date);
    const busy = this.busySlots().get(dateStr) || [];

    const [slotH, slotM] = time.split(':').map(Number);
    const slotStartMin = slotH * 60 + slotM;
    const slotEndMin = slotStartMin + 75;

    for (const b of busy) {
      const [bH, bM] = b.time.split(':').map(Number);
      const bStartMin = bH * 60 + bM;
      const bEndMin = bStartMin + b.duration;

      if (slotStartMin < bEndMin && slotEndMin > bStartMin) {
        return false;
      }
    }
    return true;
  }

  availableSlots(): string[] {
    return this.timeSlots.filter((s) => this.isSlotAvailable(s));
  }

  selectTimeSlot(time: string) {
    if (this.isSlotAvailable(time)) {
      this.selectedTime.set(time);
    }
  }

  isFormValid(): boolean {
    return (
      this.nom().trim().length > 0 &&
      this.prenom().trim().length > 0 &&
      this.email().trim().length > 0 &&
      this.email().includes('@') &&
      this.telephone().trim().length > 0 &&
      this.selectedDate() !== null &&
      this.selectedTime() !== '' &&
      this.acceptTerms()
    );
  }

  submitAppointment() {
    if (!this.isFormValid()) {
      this.snackBar.open('Veuillez remplir tous les champs obligatoires', 'Fermer', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    // Save user data to localStorage before submitting
    this.saveUserDataToLocalStorage();

    const date = this.selectedDate();
    const dateStr = date
      ? date.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

    const seanceTypeLabel =
      this.seanceType() === 'distant'
        ? 'À distance (visioconférence)'
        : 'En présentiel (cabinet, 12 rue Martel)';

    const taskTitle = `RDV: ${this.prenom()} ${this.nom()} — ${dateStr} à ${this.selectedTime()}`;
    const taskNotes = `Type: ${seanceTypeLabel}\nEmail: ${this.email()}\nTéléphone: ${this.telephone()}\nMessage: ${this.message()}`;

    // Calculate start and end times for calendar event
    const selectedDate = this.selectedDate();
    const selectedTime = this.selectedTime();
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const startDateTime = new Date(selectedDate);
      startDateTime.setHours(hours, minutes, 0, 0);

      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 60); // 1 hour session

      const formatDateTime = (d: Date) => d.toISOString().slice(0, 19) + '+02:00';

      // Add to Google Calendar as "à confirmer"
      this.http
        .post('/api/calendar/add-to-calendar', {
          title: taskTitle,
          start_time: formatDateTime(startDateTime),
          end_time: formatDateTime(endDateTime),
          description: taskNotes,
          email: this.email(),
          phone: this.telephone(),
          seance_type: seanceTypeLabel,
        })
        .subscribe({
          error: (err) => console.error('Failed to add calendar event:', err),
        });
    }

    const message = `Merci ${this.prenom()} ! Votre demande de rendez-vous a été envoyée.\n\nDétails :\n- Date : ${dateStr}\n- Heure : ${this.selectedTime()}\n- Type : ${seanceTypeLabel}\n\nJe vous contacterai sous 24h pour confirmer votre rendez-vous.`;

    this.snackBar.open(message, 'Fermer', {
      duration: 5000,
      panelClass: ['success-snackbar'],
    });

    // Keep user contact info in localStorage, only reset appointment-specific fields
    this.message.set('');
    this.selectedDate.set(null);
    this.selectedTime.set('');
    this.seanceType.set('presentiel');
    this.acceptTerms.set(false);
  }

  getMinDate(): Date {
    return new Date();
  }

  getMaxDate(): Date {
    const date = new Date();
    date.setMonth(date.getMonth() + 2);
    return date;
  }

  // Called when a date is selected in the calendar
  async onDateSelected(date: Date | null) {
    this.selectedDate.set(date);
    this.selectedTime.set('');

    if (!date) return;

    const day = date.getDay();
    if (day === 0) {
      // Sunday — no slots
      return;
    }

    this.loadingSlots.set(true);

    const dateStr = this.dateToString(date);
    const startStr = dateStr + 'T00:00:00Z';
    const endStr = dateStr + 'T23:59:59Z';

    try {
      const busyMap: Record<string, { time: string; duration: number }[]> =
        (await this.http
          .get<
            Record<string, { time: string; duration: number }[]>
          >(`/api/calendar/busy?start=${dateStr}&end=${dateStr}`)
          .toPromise()) || {};

      // Update busySlots signal
      const newMap = new Map<string, BusySlot[]>();
      for (const [d, slots] of Object.entries(busyMap)) {
        newMap.set(d, slots);
      }
      this.busySlots.set(newMap);
    } catch (err) {
      console.warn('Could not fetch busy slots:', err);
      this.busySlots.set(new Map());
    } finally {
      this.loadingSlots.set(false);
    }
  }

  private dateToString(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }
}
