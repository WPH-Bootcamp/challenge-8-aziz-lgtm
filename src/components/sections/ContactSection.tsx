import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Icon from '../ui/Icon';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
  },
  {
    question: 'How do I know if this is right for my business?',
    answer: "Let's talk it through — book a free consultation with our team.",
  },
  {
    question: 'How much does a project cost?',
    answer:
      'Project costs vary depending on scope, complexity, and timeline. Contact us for a customized quote.',
  },
  {
    question: 'How long does it take?',
    answer:
      'Timelines depend on the project scope. A simple website can take 2–4 weeks, while complex applications may take 3–6 months.',
  },
  {
    question: 'Can I start with a small project first?',
    answer:
      'Absolutely! We welcome projects of all sizes and love helping businesses start small and scale up.',
  },
];

const serviceOptions = [
  'Web Development',
  'Cloud Solutions',
  'Mobile App Development',
  'Software Development',
  'UI/UX Design',
  'Other',
];

interface FormState {
  name: string;
  email: string;
  message: string;
  services: string[];
}

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* FAQ Section */}
      <section id="faq" className="bg-gray-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left: Header */}
            <div className="lg:w-64 flex-shrink-0">
              <h2 className="text-4xl font-black text-white mb-3">
                Need Help? Start Here.
              </h2>
              <p className="text-gray-400 text-sm">
                Everything you need to know — all in one place.
              </p>
            </div>

            {/* Right: FAQ list + CTA card */}
            <div className="flex-1 flex flex-col lg:flex-row gap-8">
              {/* FAQ accordion */}
              <div className="flex-1 flex flex-col gap-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="text-white text-sm font-medium">{faq.question}</span>
                      <span className="text-gray-500 flex-shrink-0 ml-4">
                        <Icon
                          name={openFaq === index ? 'chevron-up' : 'chevron-down'}
                          size={18}
                        />
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Card */}
              <div className="lg:w-60 bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-start gap-4 h-fit">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl border border-orange-500/20 flex items-center justify-center text-orange-400">
                  <Icon name="consulting" size={22} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg mb-1">Free Consultation</p>
                  <p className="text-gray-400 text-sm">Let's talk it through — book a free consultation with our team.</p>
                </div>
                <Button size="sm" className="w-full rounded-lg">
                  Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="bg-gray-900 py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Ready to Start? Let's Talk.
            </h2>
            <p className="text-gray-400 text-lg">
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-orange-500/30">
                <Icon name="check" size={28} className="text-orange-500" />
              </div>
              <h3 className="text-white font-black text-2xl mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <Input
                label="Message"
                name="message"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                className="mb-5"
                required
              />

              {/* Services checkboxes */}
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-300 mb-3">Services</p>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((service) => {
                    const selected = form.services.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                          selected
                            ? 'bg-orange-500 border-orange-500 text-white'
                            : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                size="md"
                className="px-10"
                rightIcon={<Icon name="send" size={16} />}
              >
                Send
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactSection;