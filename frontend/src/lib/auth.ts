import { betterAuth } from "better-auth";

export const auth = betterAuth({
    database: {
        // We'll use a local storage or session-based approach for simulation if DB is not linked directly
        // Better Auth can also use a provider. For now, we'll configure it for email/password.
        provider: "sqlite", // Placeholder or Neon config
    },
    emailAndPassword: {
        enabled: true,
    },
    // This secret MUST match the backend BETTER_AUTH_SECRET
    secret: process.env.BETTER_AUTH_SECRET,
});
