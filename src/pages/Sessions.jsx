import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, Clock, MapPin, CheckCircle, Info, Moon, 
  MessageSquare, Users, BookOpen, Compass, ChevronRight 
} from 'lucide-react'
import Gallery from '../components/Gallery'

// ...rest of the imports and setups...

const topics = [
  { title: 'Addiction Recovery', desc: 'Practical, physiological, and spiritual methods to break free from nicotine, vape, and screen dependence.' },
  { title: 'Prayer & Discipline', desc: 'Establishing salah as a mental grounding tool to build long-term focus, order, and life control.' },
  { title: 'Purpose in Life', desc: 'Moving beyond short-term pleasures to establish meaningful goals that satisfy the soul.' },
  { title: 'Avoiding Sins', desc: 'Understanding emotional triggers, shame cycles, and how to safeguard your actions in a digital environment.' },
  { title: 'Reconnecting with Allah', desc: 'Understanding divine mercy, healing from spiritual guilt, and building a conversational bond with the Creator.' },
  { title: 'Mental Health Struggles', desc: 'Dealing with heavy hearts, anxiety, and depression using clinical strategies coupled with spiritual remembrance.' },
]

const speakers = [
  {
    name: 'Dr. Anas Rahmani',
    role: 'Clinical Psychologist & Mentor',
    bio: 'Specializes in adolescent cognitive behavior, addiction counseling, and youth therapy in Hyderabad.',
  },
  {
    name: 'Mufti Nabeel Rizwan',
    role: 'Spiritual Educator & Life Strategist',
    bio: 'Combines traditional Islamic wisdom with contemporary life coaching, guiding youth toward mental and spiritual clarity.',
  },
]

export default function Sessions() {
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false)
  const [rsvpData, setRsvpData] = useState({ name: '', phone: '', count: 1 })

  const handleRsvpSubmit = (e) => {
    e.preventDefault()
    setRsvpSubmitted(true)
  }

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 inline-block">
          Murad Nagar Gatherings
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
          Weekly Sunday Circles
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Step out of the noise. Join a cinematic, dark-themed event atmosphere designed specifically to help young minds reflect, connect, and align.
        </p>
      </div>

      {/* Grid: Timing, Location, Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Timing & Details (7 cols) */}
        <div className="lg:col-span-7 bg-charcoal-mid border border-white/5 rounded-3xl p-8 flex flex-col gap-6 justify-between">
          <div>
            <span className="text-gold text-[10px] font-semibold uppercase tracking-widest block mb-2">Event Schedule</span>
            <h2 className="font-serif text-2xl text-neutral-100 font-bold mb-4">Timings & Atmosphere</h2>
            
            <div className="flex flex-col gap-5 text-sm">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-neutral-200">Weekly Sunday Evening</h3>
                  <p className="text-neutral-400 text-xs mt-0.5">Every Sunday. Registration is free but highly recommended.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-neutral-200">6:00 PM - 8:30 PM</h3>
                  <p className="text-neutral-400 text-xs mt-0.5">Followed immediately by a warm community dinner.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-neutral-200">Youth Care Center, Murad Nagar</h3>
                  <p className="text-neutral-400 text-xs mt-0.5">Murad Nagar, Near Pillar 32, Hyderabad, TS, India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href="https://chat.whatsapp.com/mock-link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-charcoal-dark" /> Join Session WhatsApp Group
            </a>
          </div>
        </div>

        {/* Embedded Map Placeholder (5 cols) */}
        <div className="lg:col-span-5 bg-charcoal-mid border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-lg text-neutral-100 font-semibold mb-2">Location & Map</h3>
            <p className="text-neutral-400 text-xs leading-relaxed mb-4">
              Conveniently located near the metro connection points in Murad Nagar. Parking is free.
            </p>
          </div>
          
          {/* Custom Stylised Map Container */}
          <div className="h-48 rounded-2xl bg-charcoal-dark border border-white/5 relative flex items-center justify-center overflow-hidden">
            {/* Map Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="absolute w-12 h-12 bg-gold/10 rounded-full blur-md animate-pulse" />
            <MapPin className="w-8 h-8 text-gold relative z-10 drop-shadow-[0_0_10px_rgba(197,168,92,0.6)]" />
            <span className="absolute bottom-3 text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
              Murad Nagar, Hyderabad
            </span>
          </div>
        </div>

      </div>

      {/* TIMELINE SCHEDULE SECTION */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">The Journey</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Session Timeline</h2>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 relative">
          {[
            { step: '01', title: '6:00 PM - Connection', desc: 'Warm arrival, light drinks, and informal mentor chat.' },
            { step: '02', title: '6:30 PM - Strategy Talk', desc: 'Focusing on actionable strategies for digital and habit detox.' },
            { step: '03', title: '7:15 PM - Spiritual Alignment', desc: 'Reconnecting hearts using Quranic references on mental ease.' },
            { step: '04', title: '8:00 PM - Dinner & Circle', desc: 'Dinner served, followed by personal confidential circle support.' }
          ].map((item, idx) => (
            <div key={idx} className="flex-1 p-6 rounded-2xl bg-charcoal-mid border border-white/5 relative flex flex-col gap-2">
              <span className="font-serif text-3xl font-bold text-gold/30">{item.step}</span>
              <h4 className="font-serif text-base text-neutral-200 font-semibold">{item.title}</h4>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING TOPICS */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">Focus Themes</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Upcoming Discussion Topics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 hover:border-gold/15 transition-all duration-300">
              <h3 className="font-serif text-lg text-neutral-200 font-semibold mb-2 flex items-center gap-2">
                <Moon className="w-4 h-4 text-gold fill-gold/10" /> {t.title}
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPEAKERS SECTION */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">The Guides</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Session Speakers & Mentors</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((s, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col justify-between">
              <div>
                <span className="text-gold text-[10px] font-semibold uppercase tracking-widest block mb-2">{s.role}</span>
                <h3 className="font-serif text-xl text-neutral-100 font-bold mb-3">{s.name}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{s.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="mb-20">
        <div className="text-center mb-6">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">Real Moments</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Youth Engagement & Brotherhood</h2>
          <p className="text-neutral-400 text-xs max-w-md mx-auto mt-2 leading-relaxed">
            Authentic moments from our weekly Sunday Murad Nagar sessions, counseling check-ins, sports tournaments, and outdoors brotherhood activities.
          </p>
        </div>
        <Gallery />
      </section>

      {/* RSVP FORM MODIFIED TO SUNDAY */}
      <section className="max-w-xl mx-auto bg-charcoal-mid border border-white/5 rounded-3xl p-8 md:p-10 relative">
        <AnimatePresence mode="wait">
          {!rsvpSubmitted ? (
            <motion.form
              key="rsvp-sunday-form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleRsvpSubmit}
              className="flex flex-col gap-6"
            >
              <div className="text-center">
                <h3 className="font-serif text-2xl text-neutral-100 font-bold mb-1">Join the Next Sunday Session</h3>
                <p className="text-neutral-400 text-xs">Let us know you are coming so we can arrange dinner for you.</p>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter name"
                  value={rsvpData.name}
                  onChange={(e) => setRsvpData({ ...rsvpData, name: e.target.value })}
                  className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">WhatsApp / Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  value={rsvpData.phone}
                  onChange={(e) => setRsvpData({ ...rsvpData, phone: e.target.value })}
                  className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-neutral-400 mb-1.5">Will you bring friends?</label>
                <select
                  value={rsvpData.count}
                  onChange={(e) => setRsvpData({ ...rsvpData, count: parseInt(e.target.value) })}
                  className="w-full bg-charcoal-light border border-white/10 rounded-xl px-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
                >
                  <option value={1}>Just me (1)</option>
                  <option value={2}>Me + 1 Friend (2)</option>
                  <option value={3}>Me + 2 Friends (3)</option>
                  <option value={4}>Me + 3 Friends (4)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300"
              >
                Confirm Sunday RSVP
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="rsvp-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-gold mb-6 stroke-[1.5]" />
              <h3 className="font-serif text-2xl text-neutral-100 font-bold mb-3">RSVP Confirmed</h3>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-xs mb-6">
                Great! We have reserved {rsvpData.count} seat(s) for the upcoming Sunday Murad Nagar circle. We will text you directions and guidelines on WhatsApp soon. See you there!
              </p>
              <button
                onClick={() => setRsvpSubmitted(false)}
                className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-neutral-400 border border-white/10 hover:border-gold/40 hover:text-gold transition-colors"
              >
                Edit RSVP
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

    </div>
  )
}
