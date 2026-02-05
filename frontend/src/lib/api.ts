const API_URL = (typeof window !== 'undefined' && window.location.origin.includes('vercel.app'))
    ? (process.env.NEXT_PUBLIC_API_URL || "/api")
    : (process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api");

export const api = {
    async fetch(endpoint: string, options: RequestInit = {}) {
        const token = localStorage.getItem("better-auth.session-token"); // Simple mapping
        const headers = {
            "Content-Type": "application/json",
            ...(token ? { "Authorization": `Bearer ${token}` } : {}),
            ...options.headers,
        };

        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: "Unknown error" }));
            throw new Error(error.detail || response.statusText);
        }

        return response.json();
    },

    getTasks() {
        return this.fetch("/tasks/");
    },

    createTask(title: string, description?: string) {
        return this.fetch("/tasks/", {
            method: "POST",
            body: JSON.stringify({ title, description }),
        });
    },

    toggleComplete(taskId: number) {
        return this.fetch(`/tasks/${taskId}/complete`, {
            method: "PATCH",
        });
    },

    deleteTask(taskId: number) {
        return this.fetch(`/tasks/${taskId}`, {
            method: "DELETE",
        });
    },
};
