"use client";

import { useState, useEffect, useRef } from "react";
import { api } from "@/lib/api";
import { Send, Bot, User, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hello! I'm your AI Todo Assistant. How can I help you manage your tasks today?" }
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    async function handleSend(e: React.FormEvent) {
        e.preventDefault();
        if (!input.trim() || isTyping) return;

        const userMessage = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMessage }]);
        setIsTyping(true);

        try {
            // Simulate calling the backend chat endpoint
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("better-auth.session-token")}`
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) throw new Error("Failed to reach AI");

            const data = await response.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
        } catch (err) {
            setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsTyping(false);
        }
    }

    return (
        <div className="flex flex-col h-screen bg-slate-950 text-slate-100">
            <header className="p-4 border-b border-slate-800 flex justify-between items-center backdrop-blur-md bg-slate-950/50 sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={24} />
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                            <Bot size={18} />
                        </div>
                        <div>
                            <h2 className="font-bold leading-none">AI Assistant</h2>
                            <span className="text-xs text-blue-400">Phase III Chat</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                    <Sparkles size={12} className="text-yellow-500" /> MCP ENABLED
                </div>
            </header>

            <main
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth"
            >
                {messages.map((m, i) => (
                    <div
                        key={i}
                        className={`flex gap-4 max-w-3xl ${m.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                    >
                        <div className={`w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center ${m.role === "user" ? "bg-slate-800" : "bg-blue-900/40 border border-blue-500/30 text-blue-400"}`}>
                            {m.role === "user" ? <User size={20} /> : <Bot size={20} />}
                        </div>
                        <div className={`p-4 rounded-3xl ${m.role === "user" ? "bg-blue-600 text-white rounded-tr-none" : "bg-slate-900 border border-slate-800 rounded-tl-none shadow-xl"}`}>
                            <p className="whitespace-pre-wrap leading-relaxed">{m.content}</p>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex gap-4 mr-auto animate-pulse">
                        <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center">
                            <Bot size={20} />
                        </div>
                        <div className="p-4 rounded-3xl bg-slate-900 border border-slate-800 rounded-tl-none">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-100"></span>
                                <span className="w-2 h-2 bg-slate-600 rounded-full animate-bounce delay-200"></span>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer className="p-4 bg-slate-950 border-t border-slate-800 sticky bottom-0">
                <form onSubmit={handleSend} className="max-w-4xl mx-auto relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me to add, list, or complete tasks..."
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 group-hover:border-slate-700 transition-all shadow-2xl"
                        disabled={isTyping}
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-2 w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-500 disabled:bg-slate-800 disabled:text-slate-600 transition-colors"
                    >
                        <Send size={20} />
                    </button>
                    <p className="text-[10px] text-center text-slate-600 mt-2 uppercase tracking-widest">
                        Powered by OpenAI Agents SDK & Model Context Protocol
                    </p>
                </form>
            </footer>
        </div>
    );
}
