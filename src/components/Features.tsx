'use client';

import { LucideIcon, Zap, Shield, Sparkles, Rocket, Code2, Palette } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

function Feature({ icon: Icon, title, description, delay = 0 }: FeatureProps) {
  return (
    <div
      className="group p-8 rounded-2xl bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-glow"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="text-gradient">
              NextJS Starter
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to build modern, performant web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={Zap}
            title="Lightning Fast"
            description="Built with Next.js 15 for optimal performance and instant page loads"
            delay={0}
          />
          <Feature
            icon={Shield}
            title="Type Safe"
            description="Full TypeScript support for bug-free code and better developer experience"
            delay={100}
          />
          <Feature
            icon={Sparkles}
            title="Beautiful UI"
            description="Pre-built with Tailwind CSS for stunning, responsive designs"
            delay={200}
          />
          <Feature
            icon={Rocket}
            title="Production Ready"
            description="Optimized for production with best practices built-in"
            delay={300}
          />
          <Feature
            icon={Code2}
            title="Modern Stack"
            description="Latest technologies and patterns for future-proof applications"
            delay={400}
          />
          <Feature
            icon={Palette}
            title="Customizable"
            description="Easy to customize with comprehensive configuration options"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}
