import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Play, BookOpen, Heart, Moon, Compass, Filter, Sparkles, Smartphone, Smile } from 'lucide-react'

const categories = [
  'All',
  'Porn Addiction',
  'Mobile Addiction',
  'Depression',
  'Anxiety',
  'Tawbah & Hope',
  'Purpose in Life',
  'Islamic Reminders',
  'Relationships',
]

const resources = [
  {
    title: 'The Dopamine Reset: Overcoming Porn Addiction',
    desc: 'Understanding the neurological triggers behind screen-based habits, and a step-by-step 30-day recovery blueprint.',
    category: 'Porn Addiction',
    type: 'Read Guide',
  },
  {
    title: 'Breaking the Infinite Scroll',
    desc: 'How social applications hijack attention, and actionable boundaries to reduce screen time and rebuild real-life focus.',
    category: 'Mobile Addiction',
    type: 'Read Guide',
  },
  {
    title: 'Navigating Heavy Hearts: Understanding Depression',
    desc: 'Differentiating clinical depression from normal sadness, and coping strategies to ground yourself during heavy days.',
    category: 'Depression',
    type: 'Read Guide',
  },
  {
    title: 'Quieting an Overactive Mind: Managing Anxiety',
    desc: 'Practical sensory anchoring techniques and box breathing strategies to reduce physical panic symptoms instantly.',
    category: 'Anxiety',
    type: 'Read Guide',
  },
  {
    title: 'Divine Mercy: The Psychology of Tawbah & Hope',
    desc: 'How seeking forgiveness heals spiritual guilt, reduces anxiety, and builds a powerful pathway toward renewal.',
    category: 'Tawbah & Hope',
    type: 'Read Guide',
  },
  {
    title: 'Uncovering Your Legacy: Purpose in Life',
    desc: 'Moving past instant gratification. Aligning your daily routine with high values and meaningful contributions.',
    category: 'Purpose in Life',
    type: 'Read Guide',
  },
  {
    title: 'Salah as a Grounding Therapy',
    desc: 'Transforming daily prayers into intentional mindfulness checkpoints to ease emotional and mental fatigue.',
    category: 'Islamic Reminders',
    type: 'Read Guide',
  },
  {
    title: 'Navigating Toxic Peer Circles',
    desc: 'How to build firm personal boundaries and choose companions that elevate your spiritual and emotional state.',
    category: 'Relationships',
    type: 'Read Guide',
  },
  {
    title: 'Repentance and Renewal: Steps to Tawbah',
    desc: 'A gentle workbook guiding you through sincerity, remorse, and restructuring daily habits for lasting change.',
    category: 'Tawbah & Hope',
    type: 'Read Guide',
  },
  {
    title: 'Family Dynamics & Conflict Management',
    desc: 'Coping with intense household expectations, toxic dynamics, and communicating boundaries respectfully.',
    category: 'Relationships',
    type: 'Read Guide',
  },
]

const featuredVideos = [
  {
    title: 'Recovering From Digital Addictions',
    duration: '14 min',
    speaker: 'Dr. Anas Rahmani',
    desc: 'A psychological breakdown of dopamine triggers and how modern youth can escape the online cycle.',
  },
  {
    title: 'Sincere Repentance: Finding Peace in Tawbah',
    duration: '22 min',
    speaker: 'Mufti Nabeel Rizwan',
    desc: 'An emotional address showing how divine mercy overrides past mistakes, offering hope to heavy hearts.',
  },
]

const islamicQuotes = [
  {
    quote: '"Do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
    ref: 'Surah Az-Zumar 39:53',
  },
  {
    quote: '"So, surely with hardship comes ease. Surely with hardship comes ease."',
    ref: 'Surah Ash-Sharh 94:5-6',
  },
  {
    quote: '"Allah does not burden a soul beyond that it can bear."',
    ref: 'Surah Al-Baqarah 2:286',
  },
]

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Filter logic
  const filteredResources = resources.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="py-12 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 inline-block">
          Support Hub
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
          Self-Help Resources
        </h1>
        <p className="text-neutral-400 text-sm leading-relaxed">
          Access therapeutic articles, guidance strategies, and motivational videos designed to help you break bad habits and find peace.
        </p>
      </div>

      {/* MOTIVATIONAL ISLAMIC QUOTES CAROUSEL / LIST */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {islamicQuotes.map((q, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-charcoal-mid/60 border border-white/5 relative flex flex-col justify-between text-left"
            >
              <p className="font-serif text-neutral-200 italic leading-relaxed text-sm">
                {q.quote}
              </p>
              <span className="block text-[10px] uppercase tracking-widest text-gold mt-4 font-semibold">
                {q.ref}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED VIDEOS */}
      <section className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Play className="w-5 h-5 text-gold fill-gold/15" />
          <h2 className="font-serif text-2xl text-neutral-100 font-bold">Featured Video Talks</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredVideos.map((vid, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-charcoal-mid border border-white/5 relative overflow-hidden group hover:border-gold/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-gold text-[10px] font-semibold uppercase tracking-widest block mb-2">{vid.speaker}</span>
                <h3 className="font-serif text-xl text-neutral-200 font-bold mb-3">{vid.title}</h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6">{vid.desc}</p>
              </div>

              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-[10px] text-neutral-500 uppercase tracking-wider">Duration: {vid.duration}</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-colors">
                  <Play className="w-3.5 h-3.5 fill-charcoal-dark" /> Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEARCH AND CATEGORY FILTERS */}
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center border-b border-white/5 pb-8">
          
          {/* Search bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search resources, topics, guides..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-charcoal-mid border border-white/5 rounded-2xl pl-11 pr-4 py-3 text-neutral-200 focus:outline-none focus:border-gold/60 text-xs transition-colors"
            />
          </div>

          {/* Filters info */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <Filter className="w-4 h-4 text-gold" />
            <span>Select a category to narrow support files:</span>
          </div>

        </div>

        {/* Categories scrollable bar */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-charcoal-light">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gold text-charcoal-dark font-bold'
                    : 'bg-charcoal-mid text-neutral-400 border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </section>

      {/* RESOURCES CARDS GRID */}
      <section className="mb-16">
        <AnimatePresence mode="wait">
          {filteredResources.length > 0 ? (
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredResources.map((res) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={res.title}
                  className="p-8 rounded-2xl bg-charcoal-mid border border-white/5 hover:border-gold/20 hover:bg-charcoal-light/75 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div>
                    <span className="text-gold text-[10px] font-semibold uppercase tracking-widest block mb-3">
                      {res.category}
                    </span>
                    <h3 className="font-serif text-lg text-neutral-100 font-semibold mb-3 group-hover:text-gold transition-colors duration-200">
                      {res.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                      {res.desc}
                    </p>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold/10 hover:text-gold border border-white/5 hover:border-gold/30 text-xs font-semibold tracking-wider text-neutral-300 transition-colors flex items-center justify-center gap-2">
                    <BookOpen className="w-3.5 h-3.5" /> {res.type}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-neutral-400 text-xs leading-relaxed">No resources match your search or filter criteria.</p>
            </div>
          )}
        </AnimatePresence>
      </section>

    </div>
  )
}
