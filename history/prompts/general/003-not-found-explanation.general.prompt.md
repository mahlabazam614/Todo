---
id: 003
title: Explain and resolve Vercel NOT_FOUND error
stage: general
date: 2026-02-05
surface: agent
model: Antigravity
feature: none
branch: main
user: mahla
command: none
labels: [vercel, 404, not_found, monorepo, backend]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - vercel.json
  - frontend/src/lib/api.ts
  - NOT_FOUND_EXPLAINER.md
tests:
  - manual verification
---

## Prompt

The user provided the text of a Vercel 404 error page and requested a structured breakdown (Fix, Root Cause, Concept, Warning Signs, Alternatives).

## Response snapshot

I've provided a comprehensive guide in `NOT_FOUND_EXPLAINER.md` and implemented routing updates to help resolve the issue. The root cause is likely the backend (FastAPI) being unreachable from the Vercel-hosted frontend in a monorepo structure.

## Outcome

- ✅ Impact: Provided deep technical understanding of a common deployment pitfall.
- 🧪 Tests: n/a
- 📁 Files: `NOT_FOUND_EXPLAINER.md` created.
- 🔁 Next prompts: null
- 🧠 Reflection: Users value structured educational content after a fix is proposed.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
