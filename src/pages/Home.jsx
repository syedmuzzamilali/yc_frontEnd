import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Heart, Moon, Compass, Users, Sparkles, 
  MessageSquare, ShieldCheck, CheckCircle2, Smartphone, HelpCircle 
} from 'lucide-react'

const services = [
  {
    title: 'Addiction Recovery',
    icon: Sparkles,
    desc: 'Breaking away from vaping, substance abuse, and negative habits in a structured, shame-free recovery plan.',
  },
  {
    title: 'Emotional Counseling',
    icon: Heart,
    desc: 'Empathetic sessions to deal with deep depression, anxiety, trauma, and overwhelming daily worries.',
  },
  {
    title: 'Islamic Guidance',
    icon: Moon,
    desc: 'Finding internal tranquility by connecting mental well-being with timeless scriptural wisdom and prayers.',
  },
  {
    title: 'Youth Mentorship',
    icon: Users,
    desc: 'One-on-one relationships with elder mentors who listen, advise, and guide you through real-life scenarios.',
  },
  {
    title: 'Mobile Addiction',
    icon: Smartphone,
    desc: 'Overcoming screen time overload, digital fatigue, social media comparisons, and reclaiming real-life focus.',
  },
  {
    title: 'Relationship Support',
    icon: MessageSquare,
    desc: 'Navigating toxic peer pressure, social anxieties, isolation, family expectations, and relationship conflicts.',
  },
]

const features = [
  { title: '100% Free & Sincere', desc: 'No consultation fees. Supported entirely by community members with pure intentions.' },
  { title: 'Absolute Confidentiality', desc: 'No records shared with parents or colleges. Your privacy is a sacred trust.' },
  { title: 'Dynamic Youth Circles', desc: 'Real peer bonds, weekly sports outings, dinners, and constructive gatherings.' },
  { title: 'Empathetic Guidance', desc: 'Mentors who understand the unique cultural and spiritual landscape of Hyderabad.' },
]

const testimonials = [
  {
    quote: "I was severely hooked on screen time and vaping, failing my exams. The mentors at Youth Care didn't lecture me. They sat with me, helped me build a strategy, and checking in on me daily. I'm 6 months clean today.",
    author: "Zaid S. (21, Hyderabad)",
    tag: "Recovery Partner"
  },
  {
    quote: "Being lonely in a new college triggered severe depression. Meeting other brothers in the weekly circle changed everything. I finally found my purpose and a group of friends who care about my spiritual health.",
    author: "Ayesha K. (19, Hyderabad)",
    tag: "Weekly Attendee"
  },
  {
    quote: "The combination of professional advice and spiritual counseling healed my heart in a way traditional therapy couldn't. Having a mentor text me every week makes me feel valued.",
    author: "Imran M. (24, Hyderabad)",
    tag: "Mentorship Graduate"
  }
]

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      
      {/* Dynamic Background Effects */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gold/5 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] bg-gold/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-semibold tracking-wider uppercase mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 fill-gold/20" /> Calming Space for Hyderabad's Youth
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-[1.15] mb-6"
            >
              Helping Youth Overcome <br />
              <span className="text-gold font-serif italic">Addiction, Anxiety</span> & <br />
              Emotional Struggles
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Free confidential counseling, Islamic guidance and weekly youth support sessions in Hyderabad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                to="/get-help"
                className="px-8 py-4 rounded-full text-center text-xs font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 shadow-[0_4px_25px_rgba(197,168,92,0.25)] hover:scale-105"
              >
                Get Help Now
              </Link>
              <Link
                to="/sessions"
                className="px-8 py-4 rounded-full text-center text-xs font-bold uppercase tracking-wider text-neutral-300 border border-white/10 hover:border-gold/40 hover:bg-white/5 transition-all duration-300 hover:scale-105"
              >
                Join Sunday Session
              </Link>
            </motion.div>
          </div>

          {/* Hero Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold/20 to-transparent blur-md pointer-events-none" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-charcoal-mid aspect-square">
              <img 
                src="/youth_community_hero.png" 
                alt="Youth gathering in a supportive, emotionally warm group conversation" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-charcoal-dark/75 backdrop-blur-md border border-white/5 text-left">
                <p className="text-l font-serif text-gold italic">"In a warm, non-judgmental atmosphere, we find our strength."</p>
                <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-widest">— Youth Circle</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-charcoal-mid/40 border-y border-white/5 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">
            Our Vision
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100 mb-6">
            A Sincere Sanctuary for the Next Generation
          </h2>
          <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Today's youngsters are fighting quiet wars against screens, dopamine overload, peer anxieties, and spiritual vacuum. Our mission is to combine professional therapeutic support with timeless Islamic mindfulness, providing a local, confidential, and cost-free harbor to help youngsters navigate back to clarity.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">
            Tailored Counseling Areas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100">
            Our Counseling & Mentorship Services
          </h2>
          <p className="text-neutral-400 max-w-md mx-auto mt-2 text-xs md:text-sm">
            Whether you need spiritual direction, digital detox tips, or safe clinical advice, we have a mentor ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="p-8 rounded-2xl bg-charcoal-mid border border-white/5 hover:border-gold/30 hover:bg-charcoal-light/75 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/15 flex items-center justify-center mb-6 text-gold group-hover:scale-110 transition-transform duration-300">
                  <svc.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg text-neutral-100 mb-3 group-hover:text-gold transition-colors duration-200">
                  {svc.title}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Weekly Sessions Section */}
      <section className="bg-charcoal-mid/30 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left flex flex-col gap-5">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase inline-block">
              Weekly Gathering
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100">
              Sunday Evening Support Sessions
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every Sunday, we host safe, physically segregated youth circles in Banjara Hills, Hyderabad. Led by senior psychologists and spiritual educators, the sessions focus on breaking modern addictions, managing emotional distress, and answering difficult questions.
            </p>
            <ul className="flex flex-col gap-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Starts at 6:00 PM (Every Sunday)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Held at Banjara Hills Center (Hyderabad)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-gold" />
                <span>Complimentary warm dinner & refreshments</span>
              </li>
            </ul>
            <div className="mt-2">
              <Link
                to="/sessions"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-gold border border-gold/30 hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
              >
                RSVP Sunday Session <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 p-8 rounded-2xl bg-charcoal-mid border border-white/5">
            <h3 className="font-serif text-xl text-neutral-200 mb-6 border-b border-white/5 pb-4">Sunday Session Timeline</h3>
            <div className="flex flex-col gap-6 pl-4 border-l border-white/10 ml-2">
              {[
                { time: '6:00 PM', title: 'Arrival & Welcome Drinks', desc: 'Check-in anonymously, relax, and chat with peers.' },
                { time: '6:30 PM', title: 'Focus Workshop', desc: 'Strategy talks on vaping recovery, relationship anxieties, or screen limits.' },
                { time: '7:15 PM', title: 'Remembrance & Q&A', desc: 'Finding stillness through Quranic guidance, followed by anonymous slip Q&A.' },
                { time: '8:00 PM', title: 'Community Dinner', desc: 'Enjoy a free dinner, relax, and build healthy bonds.' }
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[29px] top-1 w-2 h-2 rounded-full bg-gold ring-4 ring-charcoal-mid" />
                  <span className="text-gold text-[10px] font-semibold uppercase tracking-wider block mb-1">{step.time}</span>
                  <h4 className="font-serif text-sm text-neutral-200 font-semibold mb-0.5">{step.title}</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Youth Care Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">
            The Safe Harbor
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100">
            Why Youngsters Choose Youth Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => (
            <div key={feat.title} className="p-6 rounded-2xl bg-charcoal-mid border border-white/5 flex flex-col gap-3 text-left hover:border-gold/15 transition-colors">
              <ShieldCheck className="w-6 h-6 text-gold mb-2" />
              <h3 className="font-serif text-lg text-neutral-200 font-semibold">{feat.title}</h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-charcoal-mid/20 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 inline-block">
              Real Stories
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100">
              Recoveries & Journeys
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-charcoal-mid/60 border border-white/5 flex flex-col justify-between"
              >
                <p className="text-neutral-300 text-sm italic leading-relaxed mb-6">
                  "{test.quote}"
                </p>
                <div className="flex justify-between items-center border-t border-white/5 pt-4">
                  <span className="text-neutral-200 text-xs font-semibold">{test.author}</span>
                  <span className="text-gold text-[10px] font-semibold uppercase tracking-wider bg-gold/5 border border-gold/10 px-2 py-1 rounded">
                    {test.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Help CTA Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-charcoal-light to-charcoal-dark border border-white/5 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />
          <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">
            Get Private Support Today
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-neutral-100 mb-4">
            Need someone to talk to right now?
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-8">
            Message a mentor privately on WhatsApp. Free. Confidential. 24/7 support. No judgements, just a safe harbor.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-all duration-300 hover:scale-105 shadow-[0_4px_25px_rgba(197,168,92,0.25)]"
          >
            <MessageSquare className="w-4 h-4 fill-charcoal-dark" /> Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  )
}
