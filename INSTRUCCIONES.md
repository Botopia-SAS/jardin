# Instrucciones de Instalación y Uso

## Proyecto Completado ✅

Tu página web de **Jardín Tragos y Pasteles** está lista para ser desplegada. A continuación encontrarás las instrucciones para ejecutarla localmente y desplegarla en Vercel.

---

## 📋 Características Implementadas

✅ **Header Minimalista**
- Navegación con indicador de sección activa
- Logo clickeable
- Smooth scroll entre secciones
- Efecto de transparencia al hacer scroll

✅ **Sección Hero**
- Carrusel automático de imágenes de fondo
- Animaciones de entrada elegantes
- Botones de CTA (Call to Action) animados

✅ **Sección de Menú**
- Menú completo con 3 categorías (Desayunos, Bebidas Mezcladas, Bebidas)
- Sistema de tabs para cambiar entre categorías
- Tarjetas animadas para cada platillo
- Sección de adicionales
- Badge para opciones vegetarianas

✅ **Formulario de Reserva**
- Campos validados (nombre, email, teléfono, fecha, hora, personas)
- Selector de número de personas
- Campo de mensaje adicional
- Animación de envío y confirmación

✅ **Formulario de Contacto**
- Información de contacto con iconos
- Enlaces a redes sociales
- Formulario funcional con validación
- Animaciones al hacer hover

✅ **Footer**
- Información del restaurante
- Horarios
- Enlaces a redes sociales
- Copyright dinámico

✅ **Diseño**
- Colores pasteles según la identidad visual
- Responsive (mobile, tablet, desktop)
- Animaciones suaves con Framer Motion
- Tipografía elegante
- Scroll suave entre secciones

---

## 🚀 Inicio Rápido

### Paso 1: Instalar Dependencias

Abre una terminal en la carpeta `jardin-web` y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

### Paso 2: Ejecutar el Proyecto Localmente

Una vez instaladas las dependencias, ejecuta:

```bash
npm run dev
```

Abre tu navegador en [http://localhost:3000](http://localhost:3000)

### Paso 3: Verificar que Todo Funcione

Verifica que puedes ver:
- ✅ El logo en el header
- ✅ Las imágenes de fondo cambiando automáticamente en el Hero
- ✅ El menú con todas las opciones
- ✅ Los formularios de reserva y contacto
- ✅ Animaciones al hacer scroll

---

## 🌐 Desplegar en Vercel (GRATIS)

### Opción A: Despliegue Directo (5 minutos)

1. Ve a [vercel.com](https://vercel.com)
2. Crea una cuenta gratuita (puedes usar GitHub, GitLab o email)
3. Haz clic en "Add New Project"
4. Selecciona "Upload" en la parte superior
5. Arrastra la carpeta `jardin-web` completa
6. Haz clic en "Deploy"
7. ¡Listo! Tu sitio estará en vivo en 2-3 minutos

Vercel te dará una URL gratuita como: `https://jardin-tragos-pasteles.vercel.app`

### Opción B: Con GitHub (Recomendado para actualizaciones automáticas)

Lee el archivo [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.

---

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `tailwind.config.ts`:

```typescript
colors: {
  'pastel-pink': '#F5D7D7',    // Rosa pastel
  'pastel-rose': '#E8B4B8',    // Rosa empolvado
  'terracotta': '#B8695C',     // Terracota (color principal)
  'deep-rose': '#A25B6E',      // Rosa profundo
  'sage-green': '#A8B89E',     // Verde salvia
}
```

### Actualizar el Menú

Edita el archivo `components/MenuSection.tsx` y modifica el array `menuData`.

### Cambiar Imágenes

Reemplaza las imágenes en `public/images/`:
- `logo.jpg` - Logo del restaurante
- `bar.jpeg` - Imagen del bar/restaurante
- `dessert.jpeg` - Imagen de postres/comida

### Modificar Información de Contacto

Edita el archivo `components/ContactSection.tsx` para cambiar:
- Dirección
- Teléfono
- Email
- Horarios
- Enlaces de redes sociales

---

## 📁 Estructura del Proyecto

```
jardin-web/
├── app/                      # Páginas de Next.js (App Router)
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página principal
│   └── globals.css          # Estilos globales
├── components/               # Componentes React
│   ├── Header.tsx           # Header con navegación
│   ├── HeroSection.tsx      # Sección hero con carrusel
│   ├── MenuSection.tsx      # Sección del menú
│   ├── ReservationSection.tsx  # Formulario de reservas
│   ├── ContactSection.tsx   # Formulario de contacto
│   └── Footer.tsx           # Footer
├── public/                   # Archivos estáticos
│   └── images/              # Imágenes
│       ├── logo.jpg
│       ├── bar.jpeg
│       └── dessert.jpeg
├── package.json             # Dependencias del proyecto
├── tailwind.config.ts       # Configuración de Tailwind CSS
├── tsconfig.json            # Configuración de TypeScript
├── next.config.js           # Configuración de Next.js
├── README.md                # Documentación del proyecto
├── DEPLOYMENT.md            # Guía de despliegue detallada
└── INSTRUCCIONES.md         # Este archivo
```

---

## 🛠 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar versión de producción
npm start

# Verificar errores de código
npm run lint
```

---

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

---

## 🔧 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animaciones fluidas y elegantes
- **Vercel** - Plataforma de despliegue

---

## ⚡ Mejores Prácticas Implementadas

✅ SEO optimizado con meta tags
✅ Imágenes optimizadas con Next.js Image
✅ Lazy loading de componentes
✅ Animaciones con GPU acceleration
✅ Código limpio y modular
✅ TypeScript para type safety
✅ Responsive design mobile-first
✅ Accesibilidad web (ARIA labels)
✅ Performance optimizado

---

## 📞 Soporte

Si necesitas ayuda:

1. **Para errores de instalación**: Asegúrate de tener Node.js 18+ instalado
2. **Para errores de build**: Ejecuta `npm install` nuevamente
3. **Para problemas de despliegue**: Revisa [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎉 ¡Todo Listo!

Tu sitio web está completamente funcional y listo para ser desplegado. Solo necesitas:

1. ✅ Ejecutar `npm install`
2. ✅ Probar con `npm run dev`
3. ✅ Desplegar en Vercel

**¡Disfruta tu nuevo sitio web!** 🌸🍰🍹
