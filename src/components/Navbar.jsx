import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Sessions', path: '/sessions' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-charcoal-dark/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img 
            src="/logo.png" 
            alt="Youth Care Logo" 
            className="w-8 h-8 rounded-full border border-gold/20 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif text-lg font-bold tracking-wide text-neutral-100 group-hover:text-gold transition-colors duration-300">
            YOUTH<span className="text-gold">CARE</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-sm font-medium tracking-wider uppercase transition-colors duration-300 py-1"
                style={{ color: isActive ? 'var(--color-gold)' : 'rgba(244, 244, 245, 0.7)' }}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gold"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Get Help Button */}
        <div className="hidden md:block">
          <Link
            to="/get-help"
            className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gold border border-gold/40 bg-gold/5 hover:bg-gold hover:text-charcoal-dark transition-all duration-300 shadow-[0_0_15px_rgba(197,168,92,0.1)] hover:shadow-[0_0_20px_rgba(197,168,92,0.25)]"
          >
            Get Help
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[73px] left-0 w-full bg-charcoal-mid border-b border-white/5 py-6 px-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium tracking-wide uppercase transition-colors"
                  style={{ color: isActive ? 'var(--color-gold)' : 'rgba(244, 244, 245, 0.7)' }}
                >
                  {link.name}
                </Link>
              )
            })}
            <Link
              to="/get-help"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center px-5 py-3 rounded-full text-sm font-semibold uppercase tracking-wider text-charcoal-dark bg-gold hover:bg-gold-hover transition-colors"
            >
              Get Help Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
