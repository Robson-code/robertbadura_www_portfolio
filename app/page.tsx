'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    if (isRunning) return;
    setIsRunning(true);
    setLogs([]);

    const testSequence = [
      "> npx playwright test",
      "Running 6 tests using 3 workers...",
      " ",
      "✓  [chromium] › login.spec.ts:5 › Sauce Demo Login (961ms)",
      "✓  [firefox]  › login.spec.ts:20 › Locked Out User (1.2s)",
      "✓  [webkit]   › inventory.spec.ts:13 › Add to cart (1.3s)",
      "✖  [chromium] › visual.spec.ts:12 › Visual Regression (864ms)",
      "   Error: A snapshot doesn't match. 120 pixels differ.",
      "   Expected: Button color #3ddc84 | Actual: #ff0000",
      "✓  [chromium] › checkout.spec.ts:14 › Critical Path E2E (1.5s)",
      " ",
      "  5 passed, 1 failed",
      "  Report generated. Run 'npx playwright show-report' to view diffs."
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < testSequence.length && testSequence[i] !== undefined) {
        setLogs((prev) => [...prev, testSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 500); 
  };

  return (
    <main className="min-h-screen bg-slate-900 text-white p-8 md:p-24 flex flex-col items-center">
      
      {/* SEKCJA HERO Z AVATAREM */}
      <div className="max-w-3xl text-center space-y-6 flex flex-col items-center">
        
        {/* AVATAR - Dodano sizes="128px" żeby naprawić błąd Next.js */}
        <div className="relative w-32 h-32 mb-4">
          <Image 
            src="/avatar.jpg" 
            alt="Robert Badura Avatar"
            fill
            sizes="128px"
            className="rounded-2xl object-cover border-2 border-emerald-400 shadow-xl shadow-emerald-500/20"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Robert Badura
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
          QA Automation Engineer
        </h2>
        
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
          Specjalizuję się w budowaniu niezawodnych systemów testowych. 
          Moje podejście łączy czysty kod TypeScript z rygorystyczną kontrolą jakości, 
          eliminując błędy zanim trafią do użytkowników.
        </p>

        {/* GRUPA PRZYCISKÓW */}
        <div className="flex flex-wrap justify-center gap-4 pt-6 no-print">
          <a href="https://github.com/Robson-code" target="_blank" rel="noreferrer" 
             className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-colors border border-slate-700">
            Mój GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/robert-badura-6699b010b/" target="_blank" rel="noreferrer" 
             className="px-6 py-3 bg-[#0077b5] hover:bg-[#00669c] rounded-lg font-semibold transition-colors">
            Mój LinkedIn
          </a>

          <a href="/cv_robert.pdf" target="_blank"
             className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-500/30">
            📄 Pobierz CV (PDF)
          </a>
        </div>
      </div>

      {/* SEKCJA PROJEKTÓW */}
      <div className="w-full max-w-5xl mt-24 space-y-8">
        <h3 className="text-3xl font-bold border-b border-slate-700 pb-4">QA Laboratory 🔬</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors group">
            <h4 className="text-xl font-bold text-blue-400 mb-2">E2E Automation Framework</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Kompleksowy framework testowy dla e-commerce. Wdrożona architektura POM, testy wizualne (Visual Regression) łapiące zmiany co do piksela oraz pełne CI/CD z użyciem GitHub Actions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-semibold bg-blue-900/50 text-blue-300 px-2 py-1 rounded">Playwright</span>
              <span className="text-xs font-semibold bg-blue-900/50 text-blue-300 px-2 py-1 rounded">TypeScript</span>
              <span className="text-xs font-semibold bg-slate-700 text-slate-300 px-2 py-1 rounded">GitHub Actions</span>
            </div>
            <div className="flex gap-3 no-print">
              <a href="https://robson-code.github.io/playwright-saucedemo-portfolio/" target="_blank" rel="noreferrer" 
                 className="text-sm px-4 py-2 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/40 rounded transition-colors font-medium">
                📊 Live HTML Report
              </a>
              <a href="https://github.com/Robson-code/playwright-saucedemo-portfolio" target="_blank" rel="noreferrer" 
                 className="text-sm px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded transition-colors font-medium">
                Kod źródłowy
              </a>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-400 transition-colors group">
            <h4 className="text-xl font-bold text-emerald-400 mb-2">Web Performance & API Testing</h4>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Projekt oparty na losowaniu wersetów biblijnych. Wykorzystany jako poligon doświadczalny do testów wydajnościowych (Lighthouse) oraz weryfikacji poprawności odpowiedzi z REST API.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-xs font-semibold bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded">REST API</span>
              <span className="text-xs font-semibold bg-orange-900/50 text-orange-300 px-2 py-1 rounded">Postman</span>
              <span className="text-xs font-semibold bg-slate-700 text-slate-300 px-2 py-1 rounded">Lighthouse</span>
            </div>
            <div className="flex gap-3 no-print">
              <span className="text-sm px-4 py-2 bg-slate-700 text-slate-400 rounded cursor-not-allowed font-medium italic">
                W trakcie testów...
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* TERMINAL QA */}
      <div className="w-full max-w-5xl mt-24 mb-24 no-print">
        <h3 className="text-3xl font-bold border-b border-slate-700 pb-4 mb-8">Live Terminal 💻</h3>
        
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
          <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-xs text-slate-400 font-mono">bash - qa-engineer-portfolio</span>
          </div>

          <div className="p-6 font-mono text-sm md:text-base min-h-[350px] text-slate-300">
            <div className="mb-4">
              <span className="text-emerald-400">robert@qa-machine</span>
              <span className="text-white">:</span>
              <span className="text-blue-400">~/portfolio</span>
              <span className="text-white">$ </span>
              {!isRunning && logs.length === 0 && (
                <button 
                  onClick={runTests}
                  className="animate-pulse bg-emerald-600/20 text-emerald-400 px-2 py-0.5 rounded hover:bg-emerald-600/40 transition-colors cursor-pointer"
                >
                  click_to_run_tests
                </button>
              )}
            </div>

            <div className="space-y-1">
              {logs.map((log, index) => (
                <div 
                  key={index} 
                  className={
                    log?.includes('✓') ? 'text-emerald-400' : 
                    log?.includes('✖') || log?.includes('Error') || log?.includes('failed') ? 'text-red-400' : 
                    log?.includes('>') ? 'text-yellow-200' : 
                    'text-slate-300'
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {!isRunning && logs.length > 0 && (
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <div>
                  <span className="text-emerald-400">robert@qa-machine</span>
                  <span className="text-white">:</span>
                  <span className="text-blue-400">~/portfolio</span>
                  <span className="text-white">$ </span>
                </div>
                <a 
                  href="https://robson-code.github.io/playwright-saucedemo-portfolio/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center no-print"
                >
                  <span className="text-slate-300 group-hover:text-emerald-300 transition-colors cursor-pointer border-b border-dashed border-slate-500 group-hover:border-emerald-300">
                    npx playwright show-report
                  </span>
                  <div className="w-2.5 h-5 bg-slate-300 ml-2 animate-pulse group-hover:bg-emerald-300"></div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}