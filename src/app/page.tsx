import Features from '@/components/Features';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-glow" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">NextJS Starter</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Features</a>
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About</a>
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-glow transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-sm text-slate-600 dark:text-slate-300 mb-8 animate-float">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span>Version 1.0 Now Available</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Build the Future with{' '}
              <span className="text-gradient animate-gradient">
                Modern Web Apps
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience the next generation of web development with Next.js, Tailwind CSS, and beautiful animations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-glow transition-all hover:scale-105 animate-float">
                Start Building
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold text-lg border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all hover:scale-105">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <Features />
      </div>
    </div>
  );
}
