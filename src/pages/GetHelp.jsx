import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, MessageSquare, ShieldAlert, Heart, Users, 
  Sparkles, CheckCircle2, Info, Moon, AlertTriangle 
} from 'lucide-react'

export default function GetHelp() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    alias: '',
    contact: '',
    struggles: [],
    message: '',
    genderGroup: 'brothers', // 'brothers' or 'sisters'
  })

  const struggleOptions = [
    'Addiction / Vaping / Habits',
    'Depression / Heavy Hearts',
    'Suicidal Thoughts / Despair',
    'Loneliness / Isolation',
    'Anxiety & Academic Pressure',
    'Relationship Struggles',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const toggleStruggle = (st) => {
    setFormData((prev) => {
      const exists = prev.struggles.includes(st)
      if (exists) {
        return { ...prev, struggles: prev.struggles.filter((item) => item !== st) }
      } else {
        return { ...prev, struggles: [...prev.struggles, st] }
      }
    })
  }

  return (
    <div className="relative overflow-hidden py-12 px-6 max-w-5xl mx-auto">
      {/* Background ambient star/moon glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 inline-block">
          Immediate & Anonymous Support
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
          You Are in a Safe Place
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          No judgment. No paperwork. Speak your heart to mentors who care. Open to all youth regardless of background, belief, or religion.
        </p>
      </div>

      {/* EMERGENCY SECTION */}
      <section className="mb-16 bg-gradient-to-b from-charcoal-light to-charcoal-dark border border-gold/25 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(197,168,92,0.08)]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-red-400 text-[10px] font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" /> Urgent confidential support
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold mb-4">
            Need to talk to someone right now?
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-8">
            You can call or text us immediately. It is 100% free and confidential. You do not need to share your real name, college, or location if you prefer to remain anonymous.
          </p>

          {/* Quick buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919866620994?text=Salam.%20I%20need%20someone%20to%20talk%20to."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_4px_20px_rgba(197,168,92,0.25)] hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal-dark" /> WhatsApp Counseling
            </a>
            <a
              href="tel:+919866620994"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-300 border border-white/10 hover:border-gold/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105"
            >
              <Phone className="w-4 h-4" /> Call Hotline Now
            </a>
          </div>

          <p className="text-[10px] text-neutral-500 mt-6 italic">
            *Your phone provider's standard carrier rates apply for traditional calls. WhatsApp counseling is free.
          </p>
        </div>
      </section>

      {/* GENDER-SPECIFIC SUPPORT SECTIONS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Brothers Support Card */}
        <div className="p-8 rounded-2xl bg-charcoal-mid border border-white/5 relative overflow-hidden group hover:border-gold/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-xl rounded-full" />
          <h3 className="font-serif text-xl text-neutral-100 font-semibold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5 text-gold" /> Brothers Support Circle
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            Connecting brothers with dedicated male counselors. Reach out for recovery strategies, spiritual guidance, and local Hyderabadi circles.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+919866620994"
              className="py-3 px-4 rounded-xl bg-white/5 hover:bg-gold/10 hover:text-gold border border-white/5 hover:border-gold/30 text-xs font-semibold tracking-wider text-center text-neutral-300 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call +91 98666 20994
            </a>
            <a
              href="https://wa.me/919866620994"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-gold/5 hover:bg-gold/15 text-xs font-semibold tracking-wider text-center text-gold border border-gold/20 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Brother Mentor
            </a>
          </div>
        </div>

        {/* Sisters Support Card */}
        <div className="p-8 rounded-2xl bg-charcoal-mid border border-white/5 relative overflow-hidden group hover:border-gold/20 transition-all duration-300">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-xl rounded-full" />
          <h3 className="font-serif text-xl text-neutral-100 font-semibold mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-gold" /> Sisters Support Circle
          </h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">
            A safe, private space matching sisters with qualified female counselors and mentors. 100% confidential and dedicated.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="tel:+919573408607"
              className="py-3 px-4 rounded-xl bg-white/5 hover:bg-gold/10 hover:text-gold border border-white/5 hover:border-gold/30 text-xs font-semibold tracking-wider text-center text-neutral-300 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" /> Call +91 95734 08607
            </a>
            <a
              href="https://wa.me/919573408607"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-gold/5 hover:bg-gold/15 text-xs font-semibold tracking-wider text-center text-gold border border-gold/20 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Sister Mentor
            </a>
          </div>
        </div>

      </section>

      {/* CORE ASSURANCES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-charcoal-mid/60 border border-white/5 flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm text-neutral-200 font-semibold mb-1">Open To All</h4>
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
              We help all youngsters in need, completely regardless of their religion, faith, background, or social standing.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-charcoal-mid/60 border border-white/5 flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm text-neutral-200 font-semibold mb-1">100% Free</h4>
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
              We never charge for support, phone counseling, or weekly gatherings. Our service is a sincere community effort.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-charcoal-mid/60 border border-white/5 flex gap-4">
          <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm text-neutral-200 font-semibold mb-1">Full Confidentiality</h4>
            <p className="text-neutral-300 text-xs md:text-sm leading-relaxed">
              Your details are never shared. We maintain the highest standards of trust, letting you talk with pure peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ANONYMOUS INBOX/FORM */}
      <section className="bg-charcoal-mid border border-white/5 rounded-3xl p-8 md:p-10 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-2xl rounded-full" />
        
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="anonymous-help-form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 max-w-2xl mx-auto"
            >
              <div>
                <h3 className="font-serif text-2xl text-neutral-100 font-semibold mb-1 flex items-center gap-2">
                  <Moon className="w-5 h-5 text-gold fill-gold/15" /> Write Anonymously
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Have something heavy weighing on your heart? Drop us a note here. You do not need to share your identity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Alias / Nickname (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g., Struggling Brother"
                    value={formData.alias}
                    onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
                    className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Anonymous Reply Contact (Email/Phone - Optional)</label>
                  <input
                    type="text"
                    placeholder="Where can we send a comforting reply?"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-2">What struggles are you carrying? (Select all that apply)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {struggleOptions.map((st) => {
                    const isSelected = formData.struggles.includes(st)
                    return (
                      <button
                        type="button"
                        key={st}
                        onClick={() => toggleStruggle(st)}
                        className={`text-left px-4 py-2.5 rounded-xl border text-xs tracking-wide transition-all duration-300 ${
                          isSelected
                            ? 'bg-gold/10 border-gold text-gold font-medium'
                            : 'bg-charcoal-light border-white/5 text-neutral-400 hover:border-white/10'
                        }`}
                      >
                        {st}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share whatever is on your mind. We are here to listen..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Select Mentor Circle Preference</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer">
                    <input 
                      type="radio" 
                      name="genderGroup" 
                      value="brothers"
                      checked={formData.genderGroup === 'brothers'}
                      onChange={() => setFormData({ ...formData, genderGroup: 'brothers' })}
                      className="accent-gold" 
                    />
                    <span>Brothers Team</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-neutral-400 cursor-pointer">
                    <input 
                      type="radio" 
                      name="genderGroup" 
                      value="sisters"
                      checked={formData.genderGroup === 'sisters'}
                      onChange={() => setFormData({ ...formData, genderGroup: 'sisters' })}
                      className="accent-gold" 
                    />
                    <span>Sisters Team</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Confidentially
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="get-help-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <Heart className="w-16 h-16 text-gold mb-6 stroke-[1.5] fill-gold/15 animate-pulse" />
              <h3 className="font-serif text-2xl text-neutral-100 font-bold mb-3">Your Message has been Sent</h3>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm mb-6">
                Thank you for sharing your heart. A dedicated mentor from our {formData.genderGroup} counseling circle will review your message. If you left contact details, we will reach out privately.
              </p>
              <button
                onClick={() => {
                  setFormData({ alias: '', contact: '', struggles: [], message: '', genderGroup: 'brothers' })
                  setSubmitted(false)
                }}
                className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-400 border border-white/10 hover:border-gold/40 hover:text-gold transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  )
}
