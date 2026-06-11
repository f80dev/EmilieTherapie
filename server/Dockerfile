FROM python:3.12-alpine3.20

WORKDIR /app

RUN pip install --no-cache-dir fastapi uvicorn[standard] PyJWT

COPY google_service_account.json /app/google_service_account.json
COPY unified_proxy.py /app/unified_proxy.py

EXPOSE 8080

CMD ["uvicorn", "unified_proxy:app", "--host", "0.0.0.0", "--port", "8080"]
