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
              <span>+91 98666 20994 (Confidential Hotline)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span className="break-all">support@youthcarehyd.org</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              <span>12-2-308/1, Alapathi Nagar, Murad Nagar, Hyderabad 500006, TS, India</span>
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
            <a href="https://instagram.com/youth__care_" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="Instagram">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="Facebook">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://youtube.com/@YouthCareHyderabad" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-gold/10 hover:text-gold rounded-full transition-all duration-300" aria-label="YouTube">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4 text-neutral-500">
        <span>© {new Date().getFullYear()} Youth Care NGO. All rights reserved.</span>
        <span>Created by <a href="https://syedmuzzamilali.me" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Syed Muzzamil Ali</a></span>
      </div>
    </footer>
  )
}
