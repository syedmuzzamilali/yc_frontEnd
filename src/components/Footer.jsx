import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal-dark border-t border-white/5 pt-16 pb-8 px-6 text-neutral-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Youth Care Logo" 
              className="w-6 h-6 rounded-full border border-gold/20"
            />
            <span className="font-serif text-lg font-bold tracking-wide text-neutral-100">
              YOUTH<span className="text-gold">CARE</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            A safe, non-judgmental space dedicated to guiding youngsters through their dark times into purpose and peace.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-neutral-200 text-sm font-semibold uppercase tracking-wider mb-5">Navigation</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors duration-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors duration-200">About Us</Link></li>
            <li><Link to="/sessions" className="hover:text-gold transition-colors duration-200">Weekly Sessions</Link></li>
            <li><Link to="/resources" className="hover:text-gold transition-colors duration-200">Support Resources</Link></li>
            <li><Link to="/get-help" className="hover:text-gold text-gold font-medium transition-colors duration-200">Get Help</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-neutral-200 text-sm font-semibold uppercase tracking-wider mb-5">Contact Us</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>+91 98765 43210 (Confidential Hotline)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span className="break-all">support@youthcarehyd.org</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>Banjara Hills, Hyderabad, TS, India</span>
            </li>
          </ul>
        </div>

        {/* Support Hours */}
        <div>
          <h3 className="font-serif text-neutral-200 text-sm font-semibold uppercase tracking-wider mb-5">Safe Space</h3>
          <p className="text-sm leading-relaxed mb-4">
            Counseling is completely free, 100% confidential, and open to all backgrounds.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="Twitter">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="WhatsApp">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom info */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-neutral-500">
        <span>© {new Date().getFullYear()} Youth Care NGO. All rights reserved.</span>
        <span>Made with care for Hyderabad's youth.</span>
      </div>
    </footer>
  )
}
