import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, Mail, MapPin, Send, HelpCircle, 
  ChevronDown, ChevronUp, MessageSquare, ShieldCheck 
} from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'Where are the weekly sessions held?',
      a: 'Our main youth center is located at Murad Nagar, Hyderabad. We gather every Sunday evening in a safe and supportive circle. Free dinner is served.',
    },
    {
      q: 'Is the support completely confidential?',
      a: 'Yes, 100%. We do not share records, phone logs, or messaging history with parents, colleges, or third parties. You are welcome to use an alias.',
    },
    {
      q: 'Are the sessions open to all religions?',
      a: 'Yes. Youth Care is a safe harbor for all youngsters facing emotional struggles or addictions, irrespective of their faith, religion, or background.',
    },
    {
      q: 'How can I volunteer or support Youth Care?',
      a: 'We welcome counselors, mentors, and sponsors. Please drop us a message using the contact form, and our admin team will reach out to you.',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 inline-block">
          Reach Our Team
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
          Contact & Connect
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Have questions, want to volunteer, or need support? Reach out directly. Our counseling is free, confidential, and open to all.
        </p>
      </div>

      {/* Grid: Contact details & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        
        {/* Info & Location (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Numbers list */}
          <div className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col gap-5 text-sm">
            <h2 className="font-serif text-lg text-neutral-100 font-bold mb-1">Direct Contacts</h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <div>
                  <h4 className="font-serif text-xs text-neutral-400 uppercase tracking-wider">Brothers Support Circle</h4>
                  <p className="text-neutral-200 font-semibold mt-0.5">+91 98666 20994</p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:+919866620994" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors" aria-label="Call Brothers Support">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/919866620994" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold/5 hover:bg-gold/15 text-gold rounded-lg border border-gold/20 transition-colors" aria-label="WhatsApp Brothers Support">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-white/5 pb-3">
                <div>
                  <h4 className="font-serif text-xs text-neutral-400 uppercase tracking-wider">Sisters Support Circle</h4>
                  <p className="text-neutral-200 font-semibold mt-0.5">+91 95734 08607</p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:+919573408607" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors" aria-label="Call Sisters Support">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/919573408607" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold/5 hover:bg-gold/15 text-gold rounded-lg border border-gold/20 transition-colors" aria-label="WhatsApp Sisters Support">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-serif text-xs text-neutral-400 uppercase tracking-wider">Administration / Volunteer</h4>
                  <p className="text-neutral-200 font-semibold mt-0.5">+91 76809 38141</p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:+917680938141" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-lg transition-colors" aria-label="Call Administration">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/917680938141" target="_blank" rel="noopener noreferrer" className="p-2 bg-gold/5 hover:bg-gold/15 text-gold rounded-lg border border-gold/20 transition-colors" aria-label="WhatsApp Administration">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Location card */}
          <div className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col gap-4 text-xs">
            <h3 className="font-serif text-base text-neutral-200 font-bold mb-1 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold" /> Headquarters & Venue
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              12-2-308/1, Alapathi Nagar, Murad Nagar, Hyderabad 500006, TS, India
            </p>
            
            {/* Map placeholder */}
            <div className="h-32 rounded-xl bg-charcoal-dark border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_16px]" />
              <MapPin className="w-6 h-6 text-gold drop-shadow-[0_0_8px_rgba(197,168,92,0.6)]" />
              <span className="absolute bottom-2 text-[9px] text-neutral-500 uppercase tracking-widest font-semibold">
                Alapathi Nagar, Murad Nagar
              </span>
            </div>
          </div>

          {/* Instagram Social Card */}
          <div className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col gap-4 text-xs justify-between">
            <div>
              <h3 className="font-serif text-base text-neutral-200 font-bold mb-1 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> Instagram Community
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Follow our handle for regular mental health triggers, Islamic reminders, and weekly Hyderabad session photos.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-gold text-charcoal-dark font-bold text-center uppercase tracking-wider text-[10px] transition-all duration-300"
            >
              Follow @YouthCareHyd
            </a>
          </div>

        </div>

        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-charcoal-mid border border-white/5 rounded-2xl p-8 md:p-10">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="general-contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <h2 className="font-serif text-2xl text-neutral-100 font-bold">Write a Message</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="general-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Send className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-serif text-3xl text-neutral-100 font-bold mb-3">Message Sent</h2>
                <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mb-6">
                  Thank you for contacting Youth Care. Our team will review your message and reply via email within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setFormData({ name: '', email: '', subject: '', message: '' })
                    setSubmitted(false)
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-400 border border-white/10 hover:border-gold/40 hover:text-gold transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Accordion FAQs */}
      <section className="border-t border-white/5 pt-16 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-neutral-100 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx
            return (
              <div key={idx} className="bg-charcoal-mid border border-white/5 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-serif text-base md:text-lg text-neutral-200 font-semibold pr-4">{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-gold shrink-0" /> : <ChevronDown className="w-5 h-5 text-gold shrink-0" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-neutral-400 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}
