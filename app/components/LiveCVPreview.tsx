export default function LiveCVPreview() {
  return (
    <aside className="w-full lg:col-span-4 xl:col-span-3 order-2 lg:order-1 lg:sticky top-8 lg:h-[calc(100vh-4rem)] h-auto no-print">
      <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm h-full flex flex-col">
        
        {/* NAGŁÓWEK KARTY */}
        <div className="border-b border-slate-700 pb-4 shrink-0">
          <h3 className="text-xl font-bold text-emerald-400">Live CV Preview</h3>
          <p className="text-xs text-slate-400 mt-1">Szybki podgląd profilu</p>
        </div>

        {/* ZBIORCZY KONTENER NA SEKCJE SCROLLOWANE */}
        <div className="flex-1 flex flex-col min-h-0 mt-6 gap-6">

          {/* =========================================
              GÓRNA POŁOWA: DOŚWIADCZENIE (ZMIENIONO NA flex-[4])
              ========================================= */}
          {/* 👇 TUTAJ REGULUJESZ WYSOKOŚĆ DOŚWIADCZENIA 👇 */}
          <div className="flex-[5] flex flex-col min-h-0">
            <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest shrink-0">
              Doświadczenie
            </h4>
            <div className="overflow-y-auto hide-scrollbar flex-1 pr-2">
              <div className="space-y-6 border-l border-slate-700 ml-2 pl-4 pb-2">
                
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                  <h5 className="text-sm font-bold text-slate-200">QA Engineer</h5>
                  <p className="text-xs text-blue-400 mb-1">ADB Polska • 2022 - Obecnie</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Budowa frameworków E2E w Playwright i TypeScript. Konfiguracja pipeline'ów CI/CD w GitHub Actions.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-500"></div>
                  <h5 className="text-sm font-bold text-slate-200">Manual QA Tester</h5>
                  <p className="text-xs text-slate-500 mb-1">Poprzednia Firma • 2020 - 2022</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Testy funkcjonalne, tworzenie przypadków testowych w Jira, ścisła współpraca z zespołem dev.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-slate-500"></div>
                  <h5 className="text-sm font-bold text-slate-200">Junior Tester</h5>
                  <p className="text-xs text-slate-500 mb-1">Jeszcze Inna Firma • 2018 - 2020</p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Wykonywanie testów eksploracyjnych i regresyjnych w oparciu o dokumentację.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* =========================================
              ŚRODEK: EDUKACJA (ZMIENIONO NA flex-[6])
              ========================================= */}
          {/* 👇 TUTAJ REGULUJESZ WYSOKOŚĆ EDUKACJI 👇 */}
          <div className="flex-[5] flex flex-col min-h-0 pt-6 border-t border-slate-700/50">
            <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest shrink-0">
              Edukacja
            </h4>
            <div className="overflow-y-auto hide-scrollbar flex-1 pr-2 space-y-8">
              <div className="space-y-6 border-l border-slate-700 ml-2 pl-4 pb-2">
                
                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></div>
                  <h5 className="text-sm font-bold text-slate-200">Inżynieria Oprogramowania</h5>
                  <p className="text-xs text-slate-500 mb-1">Politechnika • 2016 - 2020</p>
                  <p className="text-xs text-slate-400">Tytuł inżyniera. Specjalizacja: Testowanie i Jakość.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <h5 className="text-sm font-bold text-slate-200">Certyfikat ISTQB Foundation</h5>
                  <p className="text-xs text-slate-500 mb-1">GASQ • 2021</p>
                  <p className="text-xs text-slate-400">Międzynarodowy certyfikat poświadczający wiedzę z zakresu testowania oprogramowania.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                  <h5 className="text-sm font-bold text-slate-200">Kurs: Master Playwright</h5>
                  <p className="text-xs text-slate-500 mb-1">Udemy • 2022</p>
                  <p className="text-xs text-slate-400">Zaawansowane techniki automatyzacji, API testing oraz wdrażanie CI/CD.</p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            DOLNA STREFA: TECH STACK (ZAWSZE WIDOCZNY)
            ========================================= */}
        <div className="shrink-0 pt-6 mt-4 border-t border-slate-700/50">
          <h4 className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {['Playwright', 'TypeScript', 'JavaScript', 'Cypress', 'GitHub Actions', 'Postman', 'SQL', 'Jira', 'Agile/Scrum', 'CI/CD'].map(skill => (
              <span key={skill} className="text-[10px] font-medium bg-slate-700 text-slate-300 px-2 py-1 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}