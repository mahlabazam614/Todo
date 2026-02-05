"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import {
    Plus,
    Trash2,
    CheckCircle,
    Circle,
    LayoutDashboard,
    LogOut,
    MessageSquare,
    Search,
    Settings,
    Bell,
    Sparkles
} from "lucide-react";
import Link from "next/link";

interface Task {
    id: number;
    title: string;
    description: string;
    is_completed: boolean;
}

export default function Dashboard() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTitle, setNewTitle] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadTasks();
    }, []);

    async function loadTasks() {
        try {
            const data = await api.getTasks();
            setTasks(data);
        } catch (err) {
            console.error("Failed to load tasks", err);
        }
    }

    async function addTask(e: React.FormEvent) {
        e.preventDefault();
        if (!newTitle.trim()) return;
        try {
            await api.createTask(newTitle, "");
            setNewTitle("");
            loadTasks();
        } catch (err) {
            console.error("Failed to add task", err);
        }
    }

    async function toggleComplete(task: Task) {
        try {
            await api.toggleComplete(task.id);
            loadTasks();
        } catch (err) {
            console.error("Failed to update task", err);
        }
    }

    async function deleteTask(id: number) {
        try {
            await api.deleteTask(id);
            loadTasks();
        } catch (err) {
            console.error("Failed to delete task", err);
        }
    }

    const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="flex h-screen bg-slate-950 text-slate-100 relative">
            <div className="glow-mesh opacity-20" />

            {/* Sidebar */}
            <aside className="w-64 glass border-y-0 border-l-0 hidden md:flex flex-col p-6 z-20">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <CheckCircle size={18} className="text-white" />
                    </div>
                    <span className="font-bold tracking-tight">TodoMaster</span>
                </div>

                <nav className="space-y-2 flex-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 rounded-xl font-medium text-sm transition-all shadow-lg shadow-indigo-600/20">
                        <LayoutDashboard size={18} /> Dashboard
                    </button>
                    <Link href="/chat" className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-all">
                        <MessageSquare size={18} /> AI Assistant
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm transition-all">
                        <Settings size={18} /> Settings
                    </button>
                </nav>

                <Link href="/" className="mt-auto flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/10 rounded-xl font-medium text-sm transition-all">
                    <LogOut size={18} /> Logout
                </Link>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 z-10">
                {/* Top Header */}
                <header className="h-20 glass border-x-0 border-t-0 flex items-center justify-between px-8">
                    <div className="relative w-96 max-w-lg hidden sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search tasks..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-slate-900/50 border border-white/5 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white transition-all relative">
                            <Bell size={18} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full" />
                        </button>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500" />
                    </div>
                </header>

                <section className="p-8 overflow-y-auto">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-black tracking-tight text-white mb-1">My Dashboard</h1>
                                <p className="text-slate-400 text-sm">Welcome back! You have {tasks.filter(t => !t.is_completed).length} pending tasks.</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider animate-float">
                                <Sparkles size={14} /> Phase II: Active
                            </div>
                        </div>

                        {/* Add Task Input */}
                        <form onSubmit={addTask} className="group relative">
                            <input
                                type="text"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                placeholder="Write your next breakthrough..."
                                className="w-full bg-slate-900 border border-white/5 rounded-2xl py-5 pl-6 pr-16 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xl transition-all hover:border-white/10"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-3 w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
                            >
                                <Plus size={24} />
                            </button>
                        </form>

                        {/* Task List */}
                        <div className="space-y-4">
                            {filteredTasks.length === 0 ? (
                                <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-dashed border-white/5">
                                    <p className="text-slate-500">No tasks found. Time to start fresh!</p>
                                </div>
                            ) : (
                                filteredTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={`flex items-center gap-4 p-5 glass rounded-2xl transition-all hover:scale-[1.01] hover:bg-slate-900/60 group ${task.is_completed ? "opacity-60" : ""}`}
                                    >
                                        <button
                                            onClick={() => toggleComplete(task)}
                                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${task.is_completed ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" : "border-2 border-slate-700 hover:border-indigo-500"}`}
                                        >
                                            {task.is_completed && <CheckCircle size={14} />}
                                        </button>

                                        <div className="flex-1 min-w-0">
                                            <h3 className={`font-bold transition-all ${task.is_completed ? "text-slate-500 line-through" : "text-white"}`}>
                                                {task.title}
                                            </h3>
                                        </div>

                                        <button
                                            onClick={() => deleteTask(task.id)}
                                            className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-400/5 text-red-400 opacity-0 group-hover:opacity-100 hover:bg-red-400/20 transition-all"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
