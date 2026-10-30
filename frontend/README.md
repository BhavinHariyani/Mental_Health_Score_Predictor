# Mindful frontend

React + Vite frontend for the Mental Health Score Predictor API.

## Run locally

Start the backend at `http://127.0.0.1:8000`, then run:

```sh
npm install
npm run dev
```

The frontend checks `GET /health` and submits form data to `POST /predict`.
The API base defaults to `http://127.0.0.1:8000`; set `VITE_API_BASE_URL` in a
local `.env` file to use a different backend URL.

## Validate

```sh
npm run lint
npm run build
```
