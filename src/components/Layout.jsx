import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-dark text-neutral-200 selection:bg-gold/20 selection:text-gold">
      <Navbar />
      
      {/* Main page transition wrapper */}
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}
