'use client';

interface StatProps {
  value: string;
  label: string;
  prefix?: string;
}

function Stat({ value, label, prefix = '+' }: StatProps) {
  return (
    <div className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
        {prefix}{value}
      </div>
      <div className="text-slate-600 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <Stat
            value="50K+"
            label="Active Users"
          />
          <Stat
            value="100%"
            label="Uptime"
          />
          <Stat
            value="99%"
            label="Satisfaction"
            prefix=""
          />
          <Stat
            value="24/7"
            label="Support"
          />
        </div>
      </div>
    </section>
  );
}
