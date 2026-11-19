import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  User, 
  MessageSquare, 
  LayoutGrid, 
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 4000);
  };

  const scrollToForm = () => {
    const el = document.getElementById('message-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-zinc-900 pb-20 space-y-12 sm:space-y-16">
      
      {/* 1. Contact Hero Section - 100% Matching Mockup */}
      <section className="relative w-full bg-[#080808] text-white overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex items-center">
        
        {/* Background Banner with Pizza on Right */}
        <div className="absolute inset-0 z-0 bg-[#080808]">
          <img
            src="/assets/cheezora-pizza-hero-clean.jpg"
            alt="Cheezora Contact Pizza"
            className="w-full h-full object-cover object-right select-none"
          />
        </div>

        {/* Content on Left */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full relative z-10 py-10 sm:py-14">
          <div className="max-w-md lg:max-w-lg space-y-3.5 text-left">
            
            {/* Breadcrumb Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-white/15 text-zinc-300 text-xs font-semibold backdrop-blur-xs">
              <span className="text-cheezYellow">🏠</span>
              <Link to="/" className="text-zinc-300 hover:text-white transition-colors">Home</Link>
              <span className="text-zinc-500">&gt;</span>
              <span className="text-cheezYellow font-bold">Contact</span>
            </div>

            {/* Sparkles */}
            <div className="flex items-center gap-1 text-cheezYellow pt-1">
              <span className="text-lg leading-none">✨</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight leading-[1.1] text-white">
              Contact <span className="text-cheezYellow">Us</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              We'd love to hear from you! Get in touch with us for any queries, feedback, or orders.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToForm}
                className="px-7 py-2.5 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs sm:text-sm font-bold shadow-cheezRed flex items-center gap-2 transition-transform active:scale-95"
              >
                <span>Let's Talk</span>
                <span className="text-base font-black">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Section (Contact Info & Message Form) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12" id="message-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div>
              <span className="text-xs font-bold text-amber-500 tracking-wider flex items-center gap-1.5 uppercase">
                <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1">
                We're Here to <span className="text-cheezRed">Help!</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">
                Have a question, suggestion, or just want to say hi? Reach out to us anytime. We're always happy to help.
              </p>
            </div>

            {/* 3 Contact Cards */}
            <div className="space-y-3.5">
              
              {/* Card 1: Call Us Anytime */}
              <a
                href="tel:03134706110"
                className="block bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block">Call Us Anytime</span>
                    <span className="text-sm font-extrabold text-zinc-900 group-hover:text-cheezRed transition-colors block">
                      0313-470-6110
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      Mon – Sun, 10:00 AM – 11:00 PM
                    </span>
                  </div>
                </div>
              </a>

              {/* Card 2: Email Us */}
              <a
                href="mailto:info@cheezora.com"
                className="block bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block">Email Us</span>
                    <span className="text-sm font-extrabold text-zinc-900 group-hover:text-cheezRed transition-colors block">
                      info@cheezora.com
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      We reply within 24 hours
                    </span>
                  </div>
                </div>
              </a>

              {/* Card 3: Visit Our Restaurant */}
              <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-red-50 text-cheezRed flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 font-medium block">Visit Our Restaurant</span>
                    <span className="text-sm font-extrabold text-zinc-900 block">
                      Peshawar, Pakistan
                    </span>
                    <span className="text-[11px] text-zinc-500 block mt-0.5">
                      Enjoy great food with us!
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Follow Us Socials */}
            <div className="pt-2">
              <span className="text-xs font-bold text-amber-500 tracking-wider flex items-center gap-1.5 uppercase mb-3">
                <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs font-bold shadow-xs"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs font-bold shadow-xs"
                  aria-label="Instagram"
                >
                  ig
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-cheezRed text-white flex items-center justify-center transition-colors text-xs font-bold shadow-xs"
                  aria-label="YouTube"
                >
                  yt
                </a>
                <a
                  href="https://wa.me/923134706110"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors text-xs shadow-xs"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Drop Us a Message Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-100 shadow-md relative text-left">
              
              {/* Header inside Form */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-amber-500 tracking-wider flex items-center gap-1.5 uppercase">
                    <span className="w-5 h-[2px] bg-amber-500 inline-block" /> Send a Message
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-zinc-900 mt-1">
                    Drop Us a <span className="text-cheezRed">Message</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                {/* Yellow Sparkle on top right */}
                <span className="text-xl text-cheezYellow">✨</span>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2 text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. We will contact you shortly.</span>
                </div>
              )}

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-white border border-zinc-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cheezRed transition-colors placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-white border border-zinc-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cheezRed transition-colors placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="Your Phone (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-white border border-zinc-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cheezRed transition-colors placeholder:text-zinc-400"
                    />
                  </div>

                  <div className="relative">
                    <LayoutGrid className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs sm:text-sm bg-white border border-zinc-200 rounded-2xl pl-11 pr-8 py-3 outline-none focus:border-cheezRed transition-colors text-zinc-700 cursor-pointer appearance-none"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Order Inquiry">Order Question</option>
                      <option value="Feedback">Feedback & Review</option>
                      <option value="Party Catering">Party / Event Catering</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none text-xs">▼</span>
                  </div>
                </div>

                {/* Row 3: Message Textarea */}
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-zinc-400 absolute left-4 top-4 pointer-events-none" />
                  <textarea
                    rows="4"
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs sm:text-sm bg-white border border-zinc-200 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cheezRed transition-colors placeholder:text-zinc-400 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-cheezRed hover:bg-cheezRed-hover text-white text-xs sm:text-sm font-bold shadow-cheezRed flex items-center justify-center gap-2 transition-transform active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                  <span className="text-base font-black">→</span>
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* 3. Panoramic Map Banner: "Find Us on Map" */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-md group">
          <img
            src="/assets/contact-map-banner.jpg"
            alt="Cheezora Location Map"
            className="w-full h-auto object-cover"
          />
          <a
            href="https://maps.google.com/?q=Peshawar,Pakistan"
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Open Google Maps"
          />
        </div>
      </div>

    </div>
  );
}
