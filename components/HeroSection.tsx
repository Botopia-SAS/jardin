'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const backgrounds = [
  '/images/bar.jpeg',
  '/images/dessert.jpeg',
]

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgrounds.map((bg, index) => (
        <motion.div
          key={bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentBg === index ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4 sm:mb-6 leading-tight">
            Jardín Tragos y Pasteles
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 font-light px-2"
        >
          Donde la naturaleza floral se encuentra con cocteles y sabores únicos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-terracotta text-white rounded-full text-base sm:text-lg font-medium hover:bg-terracotta/90 transition-colors text-center"
          >
            Ver Menú
          </motion.a>
          <motion.a
            href="#reservar"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/95 text-terracotta rounded-full text-base sm:text-lg font-medium hover:bg-white transition-colors text-center"
          >
            Reservar Mesa
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
