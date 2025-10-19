'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface MenuItem {
  name: string
  description: string
  price: string
  vegetarian?: boolean
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    title: 'Desayunos',
    items: [
      {
        name: 'Bowl de Fruta',
        description: 'mango - fresa - banana - pera - yogurt - granola - miel',
        price: '24.000',
      },
      {
        name: 'Huevos Napolitanos',
        description: 'huevos fritos - salsa napolitana - crema de leche parmesano - masa madre',
        price: '27.000',
      },
      {
        name: 'Huevos Cremosos',
        description: 'huevos revueltos - tocineta crocante - miel',
        price: '28.000',
      },
      {
        name: 'Tartine de Huevo Frito',
        description: 'pan de masa madre - queso crema - aguacate - peperoni - huevo frito - cebolla encurtida',
        price: '30.000',
      },
      {
        name: 'Tartine de Huevos Cremosos',
        description: 'huevos revueltos pan de masa madre - aguacate - hummus',
        price: '26.000',
        vegetarian: true,
      },
      {
        name: 'Croque Monseour',
        description: 'pan brioche - jamon de cerdo - queso emmental - salsa blanca',
        price: '35.000',
      },
      {
        name: 'Croque Madame',
        description: 'pan brioche - jamon de cerdo - queso emmental - salsa bechamel - huevo frito',
        price: '37.000',
      },
      {
        name: 'Sandwich de Huevo',
        description: 'pan brioche - huevo revuelto - alioli - queso crema - pepperoni - queso holandes - rugula',
        price: '35.000',
      },
      {
        name: 'Croissant de Jamón y Queso',
        description: '',
        price: '14.900',
      },
      {
        name: 'Croissant de Mantequilla',
        description: '',
        price: '8.000',
      },
      {
        name: 'Arepa de Chocolo y Mozarella',
        description: '',
        price: '28.000',
      },
      {
        name: 'Tostada Francesa',
        description: 'pan brioche - salsa arequipe salado - crema de queso',
        price: '25.000',
      },
      {
        name: 'Pancakes Clásicos',
        description: 'pancakes - jarabe de maple - mantequilla',
        price: '22.000',
      },
    ],
  },
  {
    title: 'Bebidas Mezcladas',
    items: [
      {
        name: 'French 75',
        description: 'gin - zumo de limon - jarabe simple - vino espumoso',
        price: '42.000',
      },
      {
        name: 'Sbagliatto',
        description: 'campari - vermú rosso - vino espumoso',
        price: '39.000',
      },
      {
        name: 'Mimosa',
        description: 'zumo de naranja - vino espumoso',
        price: '26.000',
      },
      {
        name: 'Spritz',
        description: 'vermú rosso o campari o aperol o st germain - agua gasificada - vino espumoso',
        price: '37.000',
      },
    ],
  },
  {
    title: 'Bebidas',
    items: [
      { name: 'Chocolate', description: '', price: '13.900' },
      { name: 'Espresso', description: '', price: '6.900' },
      { name: 'Espresso Doble', description: '', price: '11.900' },
      { name: 'Americano', description: '', price: '8.900' },
      { name: 'Latte', description: '', price: '12.900' },
      { name: 'Capuchino', description: '', price: '12.900' },
      { name: 'Infusión Herbal', description: '', price: '6.000' },
      { name: 'Latte Chai', description: '', price: '10.900' },
      { name: 'Té Verde - Negro', description: '', price: '8.900' },
      { name: 'Jugo de Naranja', description: '', price: '12.900' },
      { name: 'S. Pellegrino - Acqua Panna', description: '', price: '17.900' },
      { name: 'Fermento Frutal', description: '', price: '9.900' },
    ],
  },
]

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-white to-pastel-pink/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-terracotta mb-4">
            Nuestro Menú
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Descubre nuestra selección de desayunos, bebidas artesanales y cocteles únicos
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {menuData.map((category, index) => (
            <motion.button
              key={category.title}
              onClick={() => setSelectedCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === index
                  ? 'bg-terracotta text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-pastel-pink border border-gray-200'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 sm:gap-6 md:grid-cols-2"
        >
          {menuData[selectedCategory].items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 flex flex-wrap items-center gap-2">
                  <span>{item.name}</span>
                  {item.vegetarian && (
                    <span className="text-xs bg-sage-green text-white px-2 py-1 rounded-full">
                      vegetariano
                    </span>
                  )}
                </h3>
                <span className="text-terracotta font-semibold text-lg sm:text-xl whitespace-nowrap">
                  ${item.price}
                </span>
              </div>
              {item.description && (
                <p className="text-gray-600 text-xs sm:text-sm italic leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-pastel-rose/20 rounded-2xl"
        >
          <h4 className="text-lg font-medium text-terracotta mb-3">Adicionales</h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Tocineta</span>
              <span className="font-medium">$13.000</span>
            </div>
            <div className="flex justify-between">
              <span>Dos huevos fritos</span>
              <span className="font-medium">$6.000</span>
            </div>
            <div className="flex justify-between">
              <span>Huevos cremosos</span>
              <span className="font-medium">$7.500</span>
            </div>
            <div className="flex justify-between">
              <span>Mermelada de fresa</span>
              <span className="font-medium">$4.000</span>
            </div>
            <div className="flex justify-between">
              <span>Mantequilla</span>
              <span className="font-medium">$4.500</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuSection
