'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Header = () => {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'menu', label: 'Menú' },
    { id: 'reservar', label: 'Reservar' },
    { id: 'contacto', label: 'Contacto' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer flex-shrink-0"
            onClick={() => scrollToSection('inicio')}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-white/30 shadow-md">
              <Image
                src="/images/logo.jpg"
                alt="Jardín Tragos y Pasteles"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-10">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeSection === section.id
                      ? isScrolled
                        ? 'text-terracotta font-bold'
                        : 'text-white font-bold drop-shadow-lg'
                      : isScrolled
                      ? 'text-gray-800 hover:text-terracotta'
                      : 'text-white/90 hover:text-white drop-shadow-md'
                  }`}
                >
                  {section.label}
                </span>
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled ? 'bg-terracotta' : 'bg-white'
                      }`}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header
