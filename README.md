# Jardín Tragos y Pasteles

Una página web elegante y minimalista para el restaurante Jardín Tragos y Pasteles, construida con Next.js 15, TypeScript, Tailwind CSS y Framer Motion.

## Características

- Diseño responsive y minimalista con colores pasteles
- Animaciones suaves y elegantes con Framer Motion
- Header con indicador de sección activa
- Sección Hero con carrusel de imágenes de fondo
- Menú completo con categorías (Desayunos, Bebidas Mezcladas, Bebidas)
- Formulario de reserva de mesa
- Formulario de contacto
- Footer con información de contacto y redes sociales

## Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **React 18** - Biblioteca de UI

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Construcción para Producción

```bash
npm run build
npm start
```

## Despliegue en Vercel

1. Instalar Vercel CLI (opcional):
```bash
npm i -g vercel
```

2. Desde la carpeta del proyecto:
```bash
vercel
```

O simplemente conecta tu repositorio de GitHub a Vercel para despliegue automático.

### Configuración de Vercel

El proyecto está configurado para desplegarse en Vercel sin configuración adicional. Solo asegúrate de:

1. Crear una cuenta en [Vercel](https://vercel.com)
2. Importar el repositorio o arrastrar la carpeta del proyecto
3. Vercel detectará automáticamente que es un proyecto Next.js y configurará todo

## Estructura del Proyecto

```
jardin-web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── MenuSection.tsx
│   ├── ReservationSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
│   └── images/
│       ├── logo.jpg
│       ├── bar.jpeg
│       └── dessert.jpeg
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Personalización

### Colores

Los colores principales se definen en `tailwind.config.ts`:
- `pastel-pink`: #F5D7D7
- `pastel-rose`: #E8B4B8
- `terracotta`: #B8695C
- `deep-rose`: #A25B6E
- `sage-green`: #A8B89E

### Menú

Para actualizar el menú, edita el array `menuData` en `components/MenuSection.tsx`.

### Imágenes

Reemplaza las imágenes en `public/images/` con tus propias fotos manteniendo los mismos nombres de archivo.

## Licencia

© 2025 Jardín Tragos y Pasteles. Todos los derechos reservados.
