# Implementation Plan: Phase II - Todo Web App

**Branch**: `phase2-web-app` | **Date**: 2026-02-05 | **Spec**: [specs/phase2-web/spec.md](file:///c:/Users/mahla/Desktop/hackathon%20giaic/specs/phase2-web/spec.md)
**Input**: Feature specification from `/specs/phase2-web/spec.md`

## Summary
Transform the existing CLI app into a full-stack monorepo. The backend will be refactored into a FastAPI service using SQLModel with Neon DB. The frontend will be a Next.js application integrated with Better Auth.

## Technical Context
**Language/Version**: Python 3.13+ (Backend), TypeScript / Next.js 15+ (Frontend)  
**Primary Dependencies**: 
- Backend: `fastapi`, `sqlmodel`, `psycopg2-binary`, `python-jose[cryptography]` (for JWT)
- Frontend: `next`, `better-auth`, `tailwind-css`, `lucide-react`
**Storage**: Neon Serverless PostgreSQL  
**Authentication**: Better Auth (Frontend) + JWT Verification (Backend)
**Project Structure**: Monorepo with `frontend/` and `backend/` directories.

## Project Structure

```text
/
├── backend/
│   ├── src/
│   │   ├── models.py        # SQLModel classes
│   │   ├── database.py      # Engine and Session setup
│   │   ├── auth.py          # JWT verification middleware
│   │   ├── routes/          # FastAPI APIRouter modules
│   │   └── main.py          # FastAPI entry point
│   ├── pyproject.toml
│   └── .env
├── frontend/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   ├── lib/                 # Better Auth config and API client
│   ├── package.json
│   └── .env
├── specs/                   # Phase implementation details
└── CLAUDE.md                # Project guidelines
```

## Data Model (SQLModel)

### User (Mirroring Better Auth)
- `id`: str (Primary Key)
- `email`: str (Unique)
- `name`: str

### Task
- `id`: int (Primary Key, Autoincrement)
- `user_id`: str (Foreign Key to User.id)
- `title`: str (max 200)
- `description`: str (optional)
- `is_completed`: bool
- `created_at`: datetime
- `updated_at`: datetime

## Auth Integration Logic
1. User logs in on Frontend via Better Auth.
2. Better Auth provides a JWT token.
3. Frontend includes `Authorization: Bearer <token>` in all API requests.
4. Backend `auth.py` middleare decodes the token using the `BETTER_AUTH_SECRET`.
5. Backend extracts `user_id` and filters all SQLModel queries by this ID.
