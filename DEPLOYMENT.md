# Guía de Despliegue en Vercel

Esta guía te ayudará a desplegar tu sitio web de Jardín Tragos y Pasteles en Vercel.

## Opción 1: Despliegue Directo (Más Rápido)

### Sin Git

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta gratuita
2. Desde el dashboard, haz clic en "Add New Project"
3. Selecciona "Upload" en la parte superior
4. Arrastra y suelta la carpeta `jardin-web` completa
5. Vercel detectará automáticamente que es un proyecto Next.js
6. Haz clic en "Deploy"
7. ¡Listo! Tu sitio estará disponible en unos minutos

## Opción 2: Despliegue con Git (Recomendado)

### Configurar Git y GitHub

1. Inicializa un repositorio Git en la carpeta del proyecto:
```bash
cd jardin-web
git init
git add .
git commit -m "Initial commit: Jardín Tragos y Pasteles website"
```

2. Crea un nuevo repositorio en [GitHub](https://github.com/new)
   - Nombre sugerido: `jardin-tragos-pasteles`
   - Déjalo como público o privado según prefieras
   - NO inicialices con README (ya lo tenemos)

3. Conecta tu repositorio local con GitHub:
```bash
git remote add origin https://github.com/TU-USUARIO/jardin-tragos-pasteles.git
git branch -M main
git push -u origin main
```

### Desplegar en Vercel desde GitHub

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente la configuración de Next.js
5. Revisa la configuración (generalmente no necesitas cambiar nada):
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build` (auto-detectado)
   - Output Directory: `.next` (auto-detectado)
6. Haz clic en "Deploy"
7. Espera de 2-5 minutos mientras se construye y despliega

### Configuración Post-Despliegue

Una vez desplegado:

1. **Dominio personalizado** (opcional):
   - Ve a Settings > Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones para configurar los DNS

2. **Variables de entorno** (si las necesitas en el futuro):
   - Ve a Settings > Environment Variables
   - Agrega las variables necesarias

3. **Actualizaciones automáticas**:
   - Cada vez que hagas `git push` a tu repositorio, Vercel desplegará automáticamente los cambios

## Opción 3: Usando Vercel CLI

1. Instala Vercel CLI globalmente:
```bash
npm i -g vercel
```

2. Desde la carpeta del proyecto:
```bash
cd jardin-web
vercel login
vercel
```

3. Sigue las instrucciones en la terminal:
   - Set up and deploy: Yes
   - Which scope: Tu cuenta
   - Link to existing project: No
   - Project name: jardin-tragos-pasteles
   - Directory: ./ (enter)
   - Override settings: No

4. Para desplegar a producción:
```bash
vercel --prod
```

## Verificación del Despliegue

Una vez desplegado, verifica que todo funcione correctamente:

- ✅ El logo se muestra correctamente
- ✅ Las imágenes de fondo del Hero cambian automáticamente
- ✅ El menú se despliega con todas las categorías
- ✅ Los formularios de reserva y contacto funcionan
- ✅ Las animaciones se ejecutan suavemente
- ✅ El sitio es responsive en móvil, tablet y desktop
- ✅ El header muestra la sección activa mientras haces scroll

## Solución de Problemas

### Las imágenes no se muestran

Asegúrate de que las imágenes estén en `public/images/`:
- `logo.jpg`
- `bar.jpeg`
- `dessert.jpeg`

### Error de build

Si hay un error durante el build:
1. Prueba construir localmente primero: `npm run build`
2. Revisa los errores en la consola
3. Asegúrate de que todas las dependencias estén instaladas

### Animaciones no funcionan

Las animaciones requieren JavaScript habilitado en el navegador. Verifica que:
- El navegador tiene JavaScript habilitado
- No hay errores en la consola del navegador

## URLs Útiles

- Dashboard de Vercel: https://vercel.com/dashboard
- Documentación de Next.js: https://nextjs.org/docs
- Documentación de Vercel: https://vercel.com/docs

## Soporte

Si encuentras algún problema durante el despliegue:
1. Revisa los logs en el dashboard de Vercel
2. Consulta la documentación oficial de Vercel
3. Revisa que todas las dependencias en package.json estén correctas

---

¡Tu sitio web está listo para el mundo! 🎉
