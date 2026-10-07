import React, { useState } from 'react';
import { Send, Check, Copy, MessageSquare, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 }
    });

    const formattedText = `Halo Dimas, saya ${formData.name} (${formData.email}).
Perihal: ${formData.subject || 'Kolaborasi / Proyek Web'}
Pesan: ${formData.message}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${personal.whatsapp}&text=${encodeURIComponent(formattedText)}`;

    setTimeout(() => {
      setSubmitting(false);
      window.open(waUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-8 sm:py-14 md:py-18 bg-canvas">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Signature Lime Color Block Section */}
        <div className="bg-block-lime text-ink rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 border border-black/10 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info & Editorial Pitch */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="eyebrow-mono bg-white/70 px-2.5 py-0.5 rounded-full text-black inline-block mb-2 border border-black/10">
                  // 06. CONTACT
                </span>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-ink tracking-tight mb-2">
                  Get in Touch
                </h2>

                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal mb-5">
                  Available for freelance projects, discussions, or fulltime opportunities.
                </p>

                {/* Direct quick action cards */}
                <div className="space-y-2.5 mb-6">
                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/${personal.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-black/10 flex items-center justify-between hover:shadow-md transition-all hover:-translate-y-0.5 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-semantic-success/15 text-semantic-success flex items-center justify-center shrink-0">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-neutral-500 uppercase">Direct WhatsApp</p>
                        <p className="text-xs sm:text-sm font-semibold text-black">+62 821-3086-9378</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-black group-hover:translate-x-1 transition-transform">
                      Chat →
                    </span>
                  </a>

                  {/* Email Direct */}
                  <div
                    onClick={handleCopyEmail}
                    className="p-3 sm:p-3.5 bg-white rounded-xl sm:rounded-2xl border border-black/10 flex items-center justify-between hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/10 text-black flex items-center justify-center shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-mono text-neutral-500 uppercase">Email Address</p>
                        <p className="text-xs sm:text-sm font-semibold text-black">{personal.email}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-surface-soft border border-hairline flex items-center gap-1 group-hover:bg-black group-hover:text-white transition-colors"
                    >
                      {copiedEmail ? <Check size={11} className="text-semantic-success" /> : <Copy size={11} />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Status info */}
              <div className="pt-4 border-t border-black/10 text-[11px] font-mono text-neutral-700">
                <p>📍 Based in Kota Bekasi, West Java (GMT+7 / WIB)</p>
                <p className="mt-0.5">⚡ Typical response: within 2–6 hours</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-black/10 shadow-lg">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-hairline">
                  <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                    Send a Message
                  </h3>
                  <span className="caption-mono text-neutral-500 text-[10px]">
                    DIRECT DISPATCH
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-black font-semibold mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-hairline bg-surface-soft/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm text-black transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-black font-semibold mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-hairline bg-surface-soft/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm text-black transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-black font-semibold mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Project Inquiry / Hiring"
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-hairline bg-surface-soft/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm text-black transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-black font-semibold mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-hairline bg-surface-soft/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black text-xs sm:text-sm text-black transition-all resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-pill-primary w-full py-2.5 sm:py-3 text-xs sm:text-sm shadow-md justify-center group"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Formatting message...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        <span>Send via WhatsApp & Connect</span>
                      </span>
                    )}
                  </button>

                  <p className="text-[10px] font-mono text-center text-neutral-500">
                    🔒 Formats neatly into WhatsApp Web / App directly.
                  </p>
                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
