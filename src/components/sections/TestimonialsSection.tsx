import React from 'react';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

const testimonials = [
  {
    quote:
      'The team was a game changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    name: 'John Lee',
    role: 'Creative Director at Innovate Corp',
    rating: 5,
  },
  {
    quote:
      'The team delivered exactly what we needed on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    name: 'Sarah Tan',
    role: 'Product Manager at Finovate',
    rating: 5,
  },
  {
    quote:
      'The collaboration was seamless, and the results exceeded our expectations. Their expertise transformed our idea into a successful product.',
    name: 'Emily Chen',
    role: 'Marketing Head at Tech Solutions',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What Partners Say About Working With Us
          </h2>
          <p className="text-gray-400 text-lg">Trusted voices. Real experiences. Proven results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative flex flex-col justify-between"
              padding="lg"
            >
              {/* Quote mark */}
              <div className="text-orange-500/30 text-7xl font-black leading-none absolute top-4 right-6 select-none">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-orange-400">
                    <Icon name="star" size={14} />
                  </span>
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500/40 to-orange-700/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;