# linkdrop

A tiny shared reading list. Paste a link, say why it is worth reading. Everyone with the address sees the 20 newest links, newest first.

One Node.js process and one PostgreSQL table. No framework, one dependency (`pg`).

## Requirements

- Node.js 20 or newer
- PostgreSQL 14 or newer

## Run it locally

```bash
npm install
cp .env.example .env        # then edit PG_URL
export $(cat .env | xargs)
psql "$PG_URL" -f db/schema.sql
npm start
```

The app listens on port 8080 by default (or the port specified by `$PORT`). Open http://localhost:8080 and drop a link.

## Configuration

| Variable | What it is | Default |
|---|---|---|
| `DATABASE_URL` / `PG_URL` | PostgreSQL connection string, e.g. `postgresql://user:password@host:5432/linkdrop` | None (required) |
| `PORT` | HTTP port the server listens on | `8080` |
| `HOST` | Interface to listen on | `0.0.0.0` |

> Note: The app automatically initializes the `links` table on startup if it does not already exist.

## Health check

`GET /healthz` answers `ok` once the process is up.
