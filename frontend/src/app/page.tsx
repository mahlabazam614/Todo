"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Terminal,
  Globe,
  Bot,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";

export default function Home() {
  const phases = [
    {
      id: 1,
      title: "Phase I: CLI Core",
      desc: "Robust Python-driven command line interface with decoupled logic.",
      icon: <Terminal className="text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      id: 2,
      title: "Phase II: Full-Stack Web",
      desc: "FastAPI & SQLModel backend with a high-performance Next.js frontend.",
      icon: <Globe className="text-emerald-400" />,
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      id: 3,
      title: "Phase III: AI Chatbot",
      desc: "Advanced OpenAI Agents SDK integration via Model Context Protocol.",
      icon: <Bot className="text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      id: 4,
      title: "Phase IV: K8s Infrastructure",
      desc: "Scalable container orchestration with Docker and Helm charts.",
      icon: <Layers className="text-orange-400" />,
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      id: 5,
      title: "Phase V: Cloud Native",
      desc: "Event-driven microservices using Dapr and Kafka pub/sub architecture.",
      icon: <Cpu className="text-pink-400" />,
      color: "from-pink-500/20 to-pink-600/5"
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30">
      <div className="glow-mesh" />

      {/* Header */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20">
            <CheckCircle2 size={24} className="text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Todo Mastery
          </span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-2 rounded-xl font-medium hover:bg-white/5 transition-colors">
            Login
          </Link>
          <Link href="/dashboard" className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2 group">
            Dashboard <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-4 animate-float">
            <Sparkles size={14} /> Built for the Hackathon Evolution
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-glow flex flex-col items-center gap-2 leading-[0.9]">
            <span className="block">THE EVOLUTION</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-emerald-400 block pb-2">
              OF PRODUCTIVITY
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From a simple CLI to a cloud-native, AI-powered ecosystem.
            Built with Spec-Driven Development and the modern agentic stack.
          </p>
        </div>

        {/* Phase Timeline/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className={`p-8 rounded-3xl glass transition-all hover:scale-[1.02] hover:bg-slate-900/60 group relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${phase.color} blur-3xl opacity-50`} />

              <div className="mb-6 w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-xl transition-transform group-hover:scale-110">
                {phase.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-100">{phase.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                {phase.desc}
              </p>

              <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Target Status</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${phase.id <= 3 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-blue-500/10 text-blue-400 border border-blue-500/20"}`}>
                  {phase.id <= 3 ? "Deployment Ready" : "Planned Arch"}
                </span>
              </div>
            </div>
          ))}

          {/* AI CTA Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center text-center space-y-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Bot size={64} className="text-white animate-bounce" />
            <h3 className="text-2xl font-black text-white">Experience Phase III</h3>
            <p className="text-indigo-100/80 text-sm">
              Talk to our AI Agent via the Model Context Protocol to manage your life with natural language.
            </p>
            <Link href="/chat" className="w-full py-4 bg-white text-indigo-700 rounded-2xl font-bold hover:bg-indigo-50 transition-all shadow-xl">
              Launch AI Chat
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-white/5 text-center">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            © 2026 GIAIC Hackathon • Built with ❤️ and Agentic AI
          </p>
        </footer>
      </main>
    </div>
  );
}
