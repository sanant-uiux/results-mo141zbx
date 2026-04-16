import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center mesh-gradient px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="font-heading font-extrabold text-8xl md:text-9xl gradient-text mb-4">404</div>
        <h1 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
            >
              <Home size={18} /> Go to Homepage
            </motion.button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-purple-600 font-semibold hover:text-pink-500 transition-colors"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>
    </section>
  )
}
