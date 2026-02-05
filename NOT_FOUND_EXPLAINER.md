# Deep Dive: Resolving the NOT_FOUND (404) Error

The `NOT_FOUND` error occurs when Vercel cannot map the requested URL path to any file or route in your deployment. In your project, this is primarily caused by the disconnect between your **Next.js frontend** and **FastAPI backend** in a monorepo structure.

## 1. Suggested Fixes

### A. Environment Variable Alignment
Your frontend is currently "guessing" where the API is. You must explicitly tell the production build where the backend lives.
1. **Set `NEXT_PUBLIC_API_URL`**: Go to Vercel Dashboard > Settings > Environment Variables.
2. **Add Key**: `NEXT_PUBLIC_API_URL`
3. **Value**: The URL of your deployed backend (e.g., `https://your-api.railway.app/api`).
4. **Re-deploy**: Vercel needs to bake this variable into the build.

### B. Correct Routing in `vercel.json`
If you are hosting the backend elsewhere, remove the `rewrites` from `vercel.json` to prevent local path conflicts, or update them to point to the external URL:
```json
"rewrites": [
  {
    "source": "/api/:path*",
    "destination": "https://your-backend-url.com/api/:path*"
  }
]
```

## 2. Root Cause Analysis

- **What happened?**: The code was performing a `fetch('/api/tasks')`. Since Vercel only knows about your `frontend` folder, it looked for a page or API route at `frontend/src/app/api/tasks/route.ts`. 
- **The Gap**: Because your actual task logic is in the `backend/` folder (Python), and Vercel isn't running that folder, it found nothing (404).
- **Misconception**: Thinking that because the files are in the same repository, Vercel will automatically connect the Python backend to the Next.js frontend. In production, these usually run on separate servers or need explicit "proxying" (rewrites).

## 3. The Concept: 404/NOT_FOUND

### Why does it exist?
It's a security and efficiency guardrail. It prevents the server from wasting resources searching for non-existent assets and prevents users from accidentally accessing internal server file structures.

### Mental Model
Imagine a **Hotel (Vercel)**. 
- You (the User) ask for **Room 404**. 
- The Hotel Clerk (the Router) looks at the **Guest Registry (Deployment)**. 
- If Room 404 isn't in the registry, the clerk tells you "NOT FOUND".
- Even if there's a different building next door called **"Python Backend"**, the clerk doesn't know about it unless there's a **Sign (Rewrite/API URL)** pointing there.

## 4. Warning Signs & Patterns

- **Pattern**: "Works in Local, Fails in Prod". This almost always points to hardcoded `localhost` URLs or missing environment variables.
- **Code Smell**: Seeing `http://localhost:8000` inside your frontend code (which we fixed in `api.ts`).
- **DevTools**: Open the "Network" tab in your browser. If you see red lines for API calls, click them to see the exact URL being requested. If it's missing the domain or pointing to the wrong place, that's your smoking gun.

## 5. Alternative Approaches

| Approach | Pros | Cons |
| :--- | :--- | :--- |
| **Separate Deployment** (Current) | Fast to set up, uses dedicated resources for Python/JS. | Need to manage two URLs and CORS. |
| **Vercel Serverless Functions** | Everything in one URL, zero-config proxying. | Hard to port a full FastAPI app; requires strict folder structure. |
| **Next.js API Routes** | Simplest for JS-only projects. | You lose the Python library ecosystem (FastAPI/SQLModel). |

### Recommendations
For your hackathon project, **Separate Deployment** is best. Host the Python backend on a platform like **Render** or **Railway**, copy that URL, and paste it into Vercel as `NEXT_PUBLIC_API_URL`.
