import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, Compass, Target, Clock, MessageSquare, 
  Award, ShieldCheck, Flame, Moon, Coffee 
} from 'lucide-react'

const stats = [
  { value: '1,200+', label: 'Youth Mentored' },
  { value: '250+', label: 'Vape & Nicotine Clean' },
  { value: '150+', label: 'Sunday Session Attendees' },
  { value: '100%', label: 'Free & Confidential' },
]

const values = [
  {
    title: 'Pure Intentions (Ikhlas)',
    desc: 'We are here solely to help you heal and connect. We charge nothing and ask for no publicity.',
  },
  {
    title: 'Zero Judgement',
    desc: 'Whatever your past mistakes, addictions, or struggles, our doors remain wide open.',
  },
  {
    title: 'Inclusivity',
    desc: 'We support all youngsters irrespective of religion, background, belief, or social standing.',
  },
]

const activities = [
  {
    title: 'Sunday Youth Circles',
    desc: 'Our primary weekly gathering in Murad Nagar with life talks, spiritual guidance, and a free warm dinner.',
  },
  {
    title: 'One-on-One Mentorship Chats',
    desc: 'Meet your counselor at a local tea shop or park for a casual, supportive, and private chat.',
  },
  {
    title: 'Sports & Outings',
    desc: 'Weekly football sessions, trekking outings, and recreational activities to build healthy real-world bonds.',
  },
]

export default function About() {
  return (
    <div className="py-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 inline-block">
          Our Identity
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-100 mb-4 animate-fade-in">
          About Youth Care
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          We are a Hyderabad-based youth support initiative. Not a corporate charity, but a close-knit group of mentors helping youngsters navigate addiction, depression, and loss of purpose.
        </p>
      </div>

      {/* MISSION & VISION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="p-8 rounded-3xl bg-charcoal-mid border border-white/5 relative">
          <Target className="w-8 h-8 text-gold mb-4" />
          <h2 className="font-serif text-2xl text-neutral-100 font-bold mb-3">Our Mission</h2>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            To provide a safe, accessible, and completely free harbor for youngsters facing contemporary struggles. We combine modern cognitive strategies with timeless Islamic spiritual grounding to guide youth back to behavioral health, mental peace, and focus.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-charcoal-mid border border-white/5 relative">
          <Compass className="w-8 h-8 text-gold mb-4" />
          <h2 className="font-serif text-2xl text-neutral-100 font-bold mb-3">Our Vision</h2>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            To establish a thriving community where no Hyderabad youth has to struggle with addiction or suicidal despair alone. We envision neighborhoods anchored by strong peer support circles that elevate youngsters spiritually and emotionally.
          </p>
        </div>
      </section>

      {/* WHY WE STARTED */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        <div className="lg:col-span-7 text-left flex flex-col gap-5">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Why We Started</span>
          <h2 className="font-serif text-3xl font-bold text-neutral-100">
            Responding to the silent crisis in our neighborhoods.
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            We started because we noticed a growing gap in how mental health and spiritual struggles are handled. Standard corporate counseling can feel cold and expensive, while traditional spaces sometimes fail to understand the complex realities of modern digital addictions, peer pressure, and heavy self-doubt.
          </p>
          <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">
            Youth Care was created as an authentic middle path: a safe space offering clinical counseling alongside warm, sisterly and brotherly mentorship.
          </p>
        </div>

        <div className="lg:col-span-5 p-8 rounded-3xl bg-charcoal-mid border border-white/5 relative">
          <Flame className="w-8 h-8 text-gold mb-4" />
          <h3 className="font-serif text-lg text-neutral-200 font-semibold mb-2">Our Focus Pillars</h3>
          <ul className="flex flex-col gap-3 text-xs text-neutral-400">
            <li className="flex gap-2.5">
              <span className="text-gold">•</span>
              <span><strong>Addiction Recovery:</strong> Shifting habits away from vaping, nicotine, and digital overload.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold">•</span>
              <span><strong>Emotional Support:</strong> Helping manage panic attacks, severe sadness, and academic burnout.</span>
            </li>
            <li className="flex gap-2.5">
              <span className="text-gold">•</span>
              <span><strong>Islamic Guidance:</strong> Introducing comforting scriptural wisdom as a mental anchor.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">Our Work</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Free Counseling', desc: 'Private one-on-one sessions with psychologists and trained youth coaches.' },
            { title: 'Weekly Sunday Circles', desc: 'Group sessions in Murad Nagar with strategy discussions and free dinner.' },
            { title: 'Spiritual Strategies', desc: 'Practical mindfulness modules based on Islamic history and character.' },
            { title: 'Emergency Hotlines', desc: 'Direct WhatsApp and call support numbers for brothers and sisters.' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col gap-3 text-left">
              <h3 className="font-serif text-base text-neutral-200 font-bold">{item.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT STATISTICS */}
      <section className="bg-charcoal-mid/40 border-y border-white/5 py-12 px-6 mb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <span className="font-serif text-3xl md:text-5xl font-bold text-gold block mb-2">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY VALUES */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">The Pillars</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Our Community Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 text-left flex flex-col gap-3">
              <h3 className="font-serif text-lg text-neutral-200 font-semibold">{v.title}</h3>
              <p className="text-neutral-400 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WEEKLY ACTIVITIES */}
      <section className="mb-12">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">Recreation</span>
          <h2 className="font-serif text-2xl md:text-3xl text-neutral-100 font-bold">Beyond Counseling: Weekly Activities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {activities.map((act, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-charcoal-mid border border-white/5 text-left flex flex-col justify-between">
              <div>
                <Coffee className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-serif text-lg text-neutral-200 font-semibold mb-3">{act.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/sessions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-colors"
          >
            Join Next Activity / Session
          </Link>
        </div>
      </section>

    </div>
  )
}
