'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-pastel-pink/20 to-pastel-rose/30 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-serif text-terracotta mb-4">Jardín Tragos y Pasteles</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Un espacio donde la naturaleza floral se fusiona con cocteles artesanales y sabores únicos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">Horarios</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-medium">Domingo:</span> 10:00 am - 9:00 pm</p>
              <p><span className="font-medium">Lunes:</span> Cerrado</p>
              <p><span className="font-medium">Mar-Sáb:</span> 12:00 pm - 12:00 am</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Calle 67 # 4A - 41</p>
              <p>Bogotá, Colombia</p>
              <a
                href="mailto:jardintragosycafe@gmail.com"
                className="block hover:text-terracotta transition-colors"
              >
                jardintragosycafe@gmail.com
              </a>
              <div className="pt-3">
                <a
                  href="https://www.instagram.com/jardintragosypasteles/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-gray-300 text-center text-sm text-gray-600"
        >
          <p>&copy; {new Date().getFullYear()} Jardín Tragos y Pasteles. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
