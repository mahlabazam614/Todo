"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Mail,
    Lock,
    User,
    ArrowRight,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate auth success
        localStorage.setItem("better-auth.session-token", "fake-token");
        router.push("/dashboard");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center p-6 sm:p-12 overflow-hidden selection:bg-indigo-500/30">
            <div className="glow-mesh opacity-40" />

            {/* Back button */}
            <Link href="/" className="fixed top-8 left-8 p-3 glass rounded-2xl text-slate-400 hover:text-white transition-all hover:scale-110 z-50">
                <ArrowLeft size={20} />
            </Link>

            <div className="absolute top-8 right-8 flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest z-50">
                <ShieldCheck size={14} /> Secure Access
            </div>

            <div className="w-full max-w-md relative z-10 transition-all duration-500">
                <div className="text-center mb-8 space-y-4">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-indigo-600/30">
                        <CheckCircle2 size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter text-white">
                        {isLogin ? "Welcome Back" : "Start the Journey"}
                    </h1>
                    <p className="text-slate-400">
                        {isLogin ? "Your high-performance productivity portal." : "Join the evolution of task management."}
                    </p>
                </div>

                <div className="glass p-8 md:p-10 rounded-[2.5rem] shadow-3xl">
                    <form onSubmit={handleAuth} className="space-y-6">
                        {!isLogin && (
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                                <div className="relative group">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder:text-slate-600"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Password</label>
                                {isLogin && <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Forgot?</button>}
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-indigo-500 transition-colors" size={20} />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-slate-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm placeholder:text-slate-600"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-indigo-600/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
                        >
                            {isLogin ? "Enter Dashboard" : "Create Account"}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center pt-6 border-t border-white/5">
                        <p className="text-slate-400 text-sm">
                            {isLogin ? "New to the evolution?" : "Already have an account?"}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="ml-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-2 decoration-indigo-500/30"
                            >
                                {isLogin ? "Sign Up" : "Log In"}
                            </button>
                        </p>
                    </div>
                </div>

                <p className="mt-8 text-center text-xs text-slate-600 font-mono uppercase tracking-[0.2em]">
                    Phase II • Better Auth Integration ready
                </p>
            </div>
        </div>
    );
}
