import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Icon from '../ui/Icon';
import { faqItems, contactServiceOptions } from '../../data/company';
import type { ContactFormData } from '../../types';
import consultationImg from '../../assets/consultation.png';

const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
      <section id="faq" className="bg-[#0a0a0a] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header row */}
          <div className="flex items-start justify-between mb-6 flex-nowrap">
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Need Help? Start<br />Here.
            </h2>
            <p className="text-white/40 text-sm text-right max-w-[200px] mt-2">
              Everything you need to know — all in one place.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-10" />

          {/* Two columns */}
          <div className="grid grid-cols-[1fr_280px] gap-10 items-start">

            {/* Left — FAQ accordion */}
            <div>
              {faqItems.map((faq, i) => (
                <div key={i} className="border-b border-white/10">
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className={`text-base font-medium transition-colors ${openFaq === i ? 'text-white' : 'text-white/60'}`}>
                      {faq.question}
                    </span>
                    <span className="text-white/50 text-xl ml-4 flex-shrink-0">
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === i && (
                    <p className="text-white/50 text-sm pb-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Right — Orange CTA card */}
            <div className="bg-[#FF5C00] rounded-2xl p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-white font-black text-2xl leading-tight mb-2">
                  Let's talk it through
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  book a free consultation with our team.
                </p>
              </div>
              <img
                src={consultationImg}
                alt="Team consultation"
                className="rounded-xl w-full object-cover"
              />
              <button className="w-full bg-white text-[#1a1a1a] font-bold py-3 rounded-xl text-sm hover:bg-white/90 transition-colors">
                Free Consultation
              </button>
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