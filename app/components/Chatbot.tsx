'use client';

import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll do najnowszej wiadomości
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'ai', text: data.reply }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Błąd połączenia. Spróbuj później.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-12 bg-[#0d1117] rounded-xl border border-slate-700 overflow-hidden shadow-2xl font-mono text-sm">
      {/* Header */}
      <div className="bg-slate-800 px-4 py-2 border-b border-slate-700 flex justify-between items-center">
        <span className="text-emerald-400 font-bold">QA_ASSISTANT_v1.0.exe</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>

      {/* Okno wiadomości */}
      <div ref={scrollRef} className="h-64 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
        {messages.length === 0 && (
          <p className="text-slate-500 italic">Cześć! Jestem asystentem AI Roberta. Zapytaj mnie o jego doświadczenie w QA!</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`${msg.role === 'user' ? 'text-blue-400' : 'text-emerald-400'}`}>
            <span className="opacity-50">[{msg.role === 'user' ? 'GUEST' : 'AI'}]: </span>
            <span className="text-slate-300">{msg.text}</span>
          </div>
        ))}
        {isLoading && <div className="text-emerald-400 animate-pulse">[AI]: Dekodowanie odpowiedzi...</div>}
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="p-3 bg-slate-900 border-t border-slate-700 flex gap-2">
        <span className="text-emerald-500 font-bold underline">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Wpisz pytanie do bota..."
          className="bg-transparent border-none outline-none flex-1 text-slate-200 placeholder:text-slate-600"
        />
        <button type="submit" className="text-xs bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded border border-emerald-600/30 hover:bg-emerald-600/40 transition-all">
          SEND
        </button>
      </form>
    </div>
  );
}