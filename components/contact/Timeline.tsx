import { steps } from "./data";


export default function Timeline() {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">How we work — simple & fast</h3>

      <div className="space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-300 text-white flex items-center justify-center font-bold shadow-sm">
              {s.step}
            </div>
            <div>
              <div className="font-semibold text-slate-800">{s.title}</div>
              <div className="text-sm text-slate-600">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

