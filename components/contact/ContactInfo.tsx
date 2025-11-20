import { contactInfo } from "./data";


export default function ContactInfo() {
  return (
    <div className="rounded-2xl p-6 shadow-lg border border-white/8 bg-gradient-to-br from-white/20 to-white/8 backdrop-blur-md">
      <h3 className="text-lg font-semibold mb-4">Contact</h3>

      <div className="space-y-3">
        {contactInfo.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/6 transition">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center bg-white/6 ${c.color}`}>
              <c.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase">{c.label}</div>
              <div className="font-medium">{c.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

