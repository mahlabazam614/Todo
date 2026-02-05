# Tasks: Phase II - Todo Web App

**Input**: Design documents from `/specs/phase2-web/`
**Prerequisites**: plan.md, spec.md

## Phase 1: Setup (Monorepo)
- [ ] T001 Initialize `frontend/` using `npx create-next-app@latest`
- [ ] T002 Initialize `backend/` and move existing logic into it
- [ ] T003 Configure `backend/pyproject.toml` with FastAPI, SQLModel, and PostgreSQL dependencies

---

## Phase 2: Foundational (Backend & DB)
- [ ] T004 Setup `backend/src/database.py` for Neon DB connection
- [ ] T005 Create `backend/src/models.py` with SQLModel entities (User, Task)
- [ ] T006 Implement JWT verification middleware in `backend/src/auth.py`
- [ ] T007 Setup FastAPI app in `backend/src/main.py` with CORS

---

## Phase 3: User Story 1 - Authentication (Priority: P1)
**Goal**: Implement Better Auth and link with Backend
**Independent Test**: Login on frontend, see "Logged in" state

- [ ] T008 Configure Better Auth in `frontend/lib/auth.ts`
- [ ] T009 Implement Sign-up/Sign-in components
- [ ] T010 Store Better Auth secret in `.env` for both frontend and backend

---

## Phase 4: User Story 2 & 3 - Dashboard & CRUD (Priority: P1)
**Goal**: Full CRUD loop via Web UI
**Independent Test**: Add task on UI, see it appear and persist after refresh

- [ ] T011 [US3] Implement CRUD routes in `backend/src/routes/tasks.py`
- [ ] T012 [US3] Ensure all routes filter by `user_id` from JWT
- [ ] T013 [US2] Build Task List dashboard in `frontend/app/dashboard/page.tsx`
- [ ] T014 [US2] Implement Add Task form with responsive design
- [ ] T015 [US2] Implement Update/Delete/Complete buttons

---

## Phase 5: Polish
- [ ] T016 Add loading states and toast notifications (Sonner/Lucide)
- [ ] T017 Implement dark mode support via Tailwind
- [ ] T018 Final manual verification walkthrough
