import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Icon from '../ui/Icon';
import { faqItems, contactServiceOptions } from '../../data/company';
import type { ContactFormData } from '../../types';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    services: [],
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? null : i);

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
      {/* FAQ */}
      <section id="faq" className="bg-[#0a0a0a] py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16">

            {/* Left */}
            <div>
              <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                FAQ
              </p>
              <h2 className="text-4xl font-black text-white leading-tight tracking-tight mb-5">
                Need Help?<br />
                <span className="text-white/25">Start Here.</span>
              </h2>
              <p className="text-white/30 text-sm leading-relaxed mb-8">
                Everything you need to know — all in one place.
              </p>

              {/* CTA card */}
              <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF5C00]/10 border border-[#FF5C00]/20 flex items-center justify-center text-[#FF5C00] mb-4">
                  <Icon name="consulting" size={18} />
                </div>
                <p className="text-white font-bold mb-1">Free Consultation</p>
                <p className="text-white/30 text-sm mb-5 leading-relaxed">
                  Book a free call with our team. No pressure, just clarity.
                </p>
                <Button size="sm" className="w-full">Book a call</Button>
              </div>
            </div>

            {/* Right — FAQ accordion */}
            <div className="flex flex-col gap-2">
              {faqItems.map((faq, i) => (
                <div
                  key={i}
                  className="border border-white/[0.06] rounded-xl overflow-hidden bg-[#111111]/50 hover:bg-[#111111] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span
                      className={[
                        'text-sm font-medium transition-colors',
                        openFaq === i ? 'text-white' : 'text-white/50',
                      ].join(' ')}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={[
                        'flex-shrink-0 ml-4 transition-all duration-200 text-white/20',
                        openFaq === i ? 'rotate-180 text-[#FF5C00]' : '',
                      ].join(' ')}
                    >
                      <Icon name="chevron-down" size={16} />
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-white/35 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact" className="bg-[#0d0d0d] py-32 border-t border-white/[0.04]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#FF5C00] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Contact
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Ready to Start?<br />
              <span className="text-white/25">Let's Talk.</span>
            </h2>
            <p className="text-white/30">
              Tell us what you need, and we'll get back to you soon.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#FF5C00]/10 border border-[#FF5C00]/20 flex items-center justify-center mx-auto mb-5">
                <Icon name="check" size={26} className="text-[#FF5C00]" />
              </div>
              <h3 className="text-white font-black text-2xl mb-2">Message Sent!</h3>
              <p className="text-white/30 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
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
                placeholder="Tell us about your project…"
                value={form.message}
                onChange={handleChange}
                multiline
                rows={4}
                className="mb-5"
                required
              />

              {/* Service chips */}
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-widest text-white/25 uppercase mb-3">
                  Services
                </p>
                <div className="flex flex-wrap gap-2">
                  {contactServiceOptions.map((service) => {
                    const selected = form.services.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={[
                          'px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150',
                          selected
                            ? 'bg-[#FF5C00] border-[#FF5C00] text-white'
                            : 'bg-transparent border-white/[0.08] text-white/30 hover:border-white/20 hover:text-white/60',
                        ].join(' ')}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Button
                type="button"
                onClick={handleSubmit}
                size="md"
                rightIcon={<Icon name="send" size={14} />}
              >
                Send Message
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ContactSection;