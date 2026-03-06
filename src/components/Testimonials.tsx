'use client';

import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Linh Trần',
    role: 'Frontend Engineer',
    company: 'NovaTech',
    quote:
      'Starter này giúp team mình rút 2 tuần setup xuống còn 2 ngày. UI đẹp, code dễ maintain.',
  },
  {
    name: 'Minh Nguyễn',
    role: 'Product Designer',
    company: 'PixelForge',
    quote:
      'Hiệu ứng mượt, dark mode chỉn chu, và cấu trúc component cực kỳ rõ ràng để scale.',
  },
  {
    name: 'An Phạm',
    role: 'Tech Lead',
    company: 'CloudPeak',
    quote:
      'Đây là bộ khung mình dùng để onboarding dev mới. Nhanh, sạch và production-ready.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Được tin dùng bởi
            <span className="text-gradient"> những team shipping nhanh</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Feedback thực tế từ các dev/design team đã dùng NextJS Starter để build sản phẩm.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-2xl border border-slate-200/80 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/60 backdrop-blur p-6 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-5 h-5 text-emerald-500" />
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.role} · {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
