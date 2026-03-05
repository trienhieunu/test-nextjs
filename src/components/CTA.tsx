import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 animate-gradient opacity-90" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-float" />
        <div className="absolute top-20 right-20 w-6 h-6 bg-white/20 rounded-full animate-float-delayed" />
        <div className="absolute bottom-10 left-1/3 w-3 h-3 bg-white/40 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-white/25 rounded-full animate-float-delayed" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of developers who are building amazing applications with NextJS Starter. Start your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg hover:scale-105 transition-all flex items-center gap-2 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold text-lg border-2 border-white/30 hover:bg-white/30 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
