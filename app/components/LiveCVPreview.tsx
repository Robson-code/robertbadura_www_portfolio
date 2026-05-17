'use client';

export default function LiveCVPreview() {
  return (
    <aside className="w-full lg:col-span-4 xl:col-span-3 order-2 lg:order-1 lg:sticky top-8 lg:h-[calc(100vh-4rem)] h-auto no-print flex flex-col">
      <div className="bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col h-full">
        
        {/* --- HEADER CV --- */}
        <div className="bg-slate-800 p-4 border-b border-slate-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded bg-emerald-500/20 flex items-center justify-center border border-emerald-500/50">
              <span className="text-emerald-400 font-bold">QA</span>
            </div>
            <div>
              <h2 className="font-bold text-slate-100 leading-tight">Robert Badura</h2>
              <p className="text-xs text-emerald-400 font-mono">Automation Engineer</p>
            </div>
          </div>
        </div>

        {/* --- ZAWARTOŚĆ CV (Przewijana) --- */}
        <div className="p-5 overflow-y-auto hide-scrollbar flex-1 space-y-8 bg-[#161b22]">
          
          {/* DOSWIADCZENIE */}
          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">Experience</h3>
            
            <div className="space-y-6">
              {/* ADB Polska */}
              <div className="relative pl-4 border-l-2 border-emerald-500/30">
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                <h4 className="font-bold text-slate-200 text-sm">QA Engineer</h4>
                <p className="text-xs text-emerald-400 mb-2">ADB Polska | 05.2022 – Present (almost 4 yrs)</p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>Executing End-to-End (E2E) manual & automation tests for broadband software and router management platforms.</li>
                  <li>Managing defect lifecycle in Jira, maintaining docs in Confluence, and using basic SQL for database verification.</li>
                  <li>Monitoring automated suites, analyzing logs, and utilizing GitHub for version control in an Agile/Scrum environment.</li>
                </ul>
              </div>

              {/* Orange Polska */}
              <div className="relative pl-4 border-l-2 border-slate-700">
                <div className="absolute w-2 h-2 bg-slate-500 rounded-full -left-[5px] top-1.5"></div>
                <h4 className="font-bold text-slate-200 text-sm">Network Dev Planning Specialist</h4>
                <p className="text-xs text-blue-400 mb-2">Orange Polska | 03.2016 – 02.2020</p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>Planned, designed, and deployed broadband network infrastructure and IPDSLAM central office equipment.</li>
                  <li>Executed network optimization projects and maintained long-term B2B relations with international vendors.</li>
                </ul>
              </div>

              {/* Ericsson */}
              <div className="relative pl-4 border-l-2 border-slate-700">
                <div className="absolute w-2 h-2 bg-slate-500 rounded-full -left-[5px] top-1.5"></div>
                <h4 className="font-bold text-slate-200 text-sm">IP & Voice Services Specialist</h4>
                <p className="text-xs text-blue-400 mb-2">Ericsson | 04.2008 – 10.2015</p>
                <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-3">
                  <li>Operated telecom systems and provided xDSL/VoIP service maintenance for major Polish providers.</li>
                  <li>Performed remote troubleshooting (CRM Clarify) and acted as Shift Leader, achieving top KPI performance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUKACJA */}
          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-700 pb-2">Education</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-slate-200 text-sm">Automation Tester (Postgraduate)</h4>
                <p className="text-xs text-emerald-400">WSB Merito | 10.2025 – Present</p>
                <p className="text-xs text-slate-400 mt-0.5">Specialization: Web application test automation.</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 text-sm">IT Networks & Security (Engineer)</h4>
                <p className="text-xs text-slate-500">WSB w Poznaniu | 10.2018 – 06.2020</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-200 text-sm">Electronics & Telecommunication</h4>
                <p className="text-xs text-slate-500">Silesian University of Technology | 10.2002 – 06.2007</p>
              </div>
            </div>
          </section>

          {/* SKILLS TAGS */}
          <section className="pb-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-700 pb-2">Core Tech Stack</h3>
            <div className="flex flex-wrap gap-1.5">
              {['Playwright', 'Cypress', 'Selenium', 'TypeScript', 'Python', 'Basic SQL', 'Jira', 'Confluence', 'GitHub', 'CI/CD'].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </aside>
  );
}