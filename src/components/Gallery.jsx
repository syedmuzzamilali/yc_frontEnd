import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react'

const galleryCategories = [
  'All',
  'Sunday Sessions',
  'Counseling',
  'Sports',
  'Brotherhood',
  'Events',
  'Islamic Reminders',
]

const galleryItems = [
  {
    id: 1,
    title: 'Sunday Circle Gachibowli',
    category: 'Sunday Sessions',
    img: '/youth_community_hero.png',
  },
  {
    id: 2,
    title: 'Murad Nagar Mentorship Gathering',
    category: 'Brotherhood',
    img: '/youth_session_gathering.png',
  },
  {
    id: 3,
    title: 'Weekly Football Gathering at Gachibowli',
    category: 'Sports',
    img: '/youth_community_hero.png',
  },
  {
    id: 4,
    title: 'Private Safe Space Counseling Session',
    category: 'Counseling',
    img: '/youth_session_gathering.png',
  },
  {
    id: 5,
    title: 'Murad Nagar Weekend Discussion Circle',
    category: 'Sunday Sessions',
    img: '/youth_session_gathering.png',
  },
  {
    id: 6,
    title: 'Sports Outing - Murad Nagar Youth Team',
    category: 'Sports',
    img: '/youth_community_hero.png',
  },
  {
    id: 7,
    title: 'Brotherhood Dinner & Discussion',
    category: 'Brotherhood',
    img: '/youth_session_gathering.png',
  },
  {
    id: 8,
    title: 'Annual Youth Conference Hyderabad',
    category: 'Events',
    img: '/youth_community_hero.png',
  },
  {
    id: 9,
    title: 'Quranic Mindfulness Class',
    category: 'Islamic Reminders',
    img: '/youth_session_gathering.png',
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeImage, setActiveImage] = useState(null)

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  )

  return (
    <div className="py-12">
      {/* Category Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-6 mb-8 scrollbar-none justify-start md:justify-center">
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 whitespace-nowrap ${
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

      {/* Masonry-Style Randomized Responsive Grid */}
      <motion.div 
        layout 
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={item.id}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-white/5 bg-charcoal-mid group cursor-pointer"
              onClick={() => setActiveImage(item)}
            >
              {/* Lazy-loaded image tag */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500 rounded-2xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-gold text-[9px] font-semibold uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm text-neutral-100 font-bold flex items-center gap-1.5 justify-between">
                  {item.title}
                  <ZoomIn className="w-4 h-4 text-gold shrink-0" />
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Preview Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-gold/10 hover:text-gold text-neutral-400 rounded-full transition-colors"
              onClick={() => setActiveImage(null)}
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-charcoal-mid max-h-[75vh]">
                <img
                  src={activeImage.img}
                  alt={activeImage.title}
                  className="w-full h-full object-contain mx-auto"
                />
              </div>

              <div className="text-left px-2">
                <span className="text-gold text-xs font-semibold tracking-wider uppercase block mb-1">
                  {activeImage.category}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-neutral-100 font-bold">
                  {activeImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
