# 🎨 Portfolio Moderno Luis

Un portafolio web moderno, profesional y completamente funcional construido con **React**, **Next.js**, **TailwindCSS** y **Framer Motion**.

## ✨ Características Principales

### 🌍 Multiidioma
- **Soporte completo para Español e Inglés** con cambio dinámico
- Contexto React para gestión global de idioma
- Persistencia de preferencia en localStorage

### 🌙 Tema Oscuro/Claro
- Toggle de tema con persistencia
- Paleta de colores moderna y minimalista
- Transiciones suaves entre temas
- Soporta preferencias del sistema

### 📱 Diseño Responsive
- Completamente adaptable a móvil, tablet y desktop
- Breakpoints optimizados con TailwindCSS
- Navegación adaptativa
- Imágenes y componentes responsivos

### 🎭 Animaciones Elegantes
- Animaciones de entrada con Framer Motion
- Efectos hover suaves en componentes
- Transiciones de página fluidas
- Animaciones de carga y estados

### 📂 Secciones Principales

#### Hero Section
- Presentación principal con animaciones
- Botones CTA (Call To Action)
- Enlaces a redes sociales
- Indicador de scroll

#### Skills (Habilidades)
- Categorías: Frontend, Backend, Herramientas, Bases de Datos
- Cards interactivas con hover effects
- Iconos de tecnologías
- Animaciones de entrada escalonadas

#### Projects (Proyectos)
- Cards modernas con imágenes
- Sistema de filtros por categoría
- Enlaces a GitHub y demo en vivo
- Overlay con acciones al hover
- Animaciones suaves

#### Contact (Contacto)
- Formulario validado
- Estados de envío (loading, success, error)
- Información de contacto (email, teléfono, ubicación)
- Respuestas visuales al usuario

#### Footer
- Enlaces rápidos a secciones
- Redes sociales
- Información de copyright

## 🛠️ Stack Tecnológico

### Frontend
- **React 19** - Librería UI
- **Next.js** - Framework React
- **TailwindCSS 4** - Utilidades CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos

### Desarrollo
- **TypeScript** - Tipado estático
- **Vite** - Build tool
- **Vitest** - Testing
- **ESLint & Prettier** - Calidad de código

### Backend
- **Express** - Servidor web
- **tRPC** - RPC type-safe
- **Drizzle ORM** - Database ORM
- **MySQL/TiDB** - Base de datos

## 🚀 Instalación y Uso

### Requisitos
- Node.js 18+
- pnpm (recomendado)

### Instalación
```bash
# Clonar repositorio
git clone <repository-url>
cd portfolio-moderno-luis

# Instalar dependencias
pnpm install

# Variables de entorno (si es necesario)
cp .env.example .env.local
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
pnpm dev

# El servidor estará disponible en http://localhost:3000
```

### Build para Producción
```bash
# Construir aplicación
pnpm build

# Iniciar servidor de producción
pnpm start
```

### Testing
```bash
# Ejecutar tests
pnpm test

# Tests en modo watch
pnpm test --watch
```

## 📁 Estructura del Proyecto

```
portfolio-moderno-luis/
├── client/
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/              # Componentes shadcn/ui
│   │   ├── contexts/            # Contextos React
│   │   │   ├── ThemeContext.tsx
│   │   │   └── LanguageContext.tsx
│   │   ├── pages/               # Páginas
│   │   │   ├── Home.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx              # Componente raíz
│   │   ├── main.tsx             # Entrada
│   │   └── index.css            # Estilos globales
│   └── public/                  # Archivos estáticos
├── server/                      # Código backend
│   ├── routers.ts               # Rutas tRPC
│   ├── db.ts                    # Helpers de BD
│   └── _core/                   # Core del servidor
├── drizzle/                     # Esquema de BD
└── package.json
```

## 🎨 Paleta de Colores

### Tema Claro
- **Fondo Principal**: #FFFFFF
- **Fondo Secundario**: #F5F5F5
- **Texto Principal**: #1A1A1A
- **Acento Primario**: #3B82F6 (Azul)
- **Acento Secundario**: #A855F7 (Púrpura)

### Tema Oscuro
- **Fondo Principal**: #0F0F0F
- **Fondo Secundario**: #1A1A1A
- **Texto Principal**: #FFFFFF
- **Acento Primario**: #3B82F6 (Azul)
- **Acento Secundario**: #A855F7 (Púrpura)

## 🌐 Idiomas Soportados

- **Español (ES)** - Idioma por defecto
- **Inglés (EN)** - Traducción completa

## 📊 Funcionalidades Implementadas

- ✅ Migración completa de HTML/CSS/JS vanilla a React
- ✅ Sistema de tema oscuro/claro con persistencia
- ✅ Sistema de idiomas ES/EN con contexto React
- ✅ Navbar con navegación y toggles
- ✅ Hero section con animaciones
- ✅ Sección de habilidades con categorías
- ✅ Sección de proyectos con filtros
- ✅ Formulario de contacto validado
- ✅ Footer con enlaces y redes sociales
- ✅ Diseño completamente responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ Código limpio y bien estructurado
- ✅ TypeScript para seguridad de tipos

## 📝 Notas de Desarrollo

### Contextos Globales
- **ThemeContext**: Gestiona tema oscuro/claro con localStorage
- **LanguageContext**: Gestiona idioma global con localStorage

### Componentes Reutilizables
- Todos los componentes usan shadcn/ui para consistencia
- Animaciones centralizadas con Framer Motion
- Estilos globales con TailwindCSS

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Pruebas en múltiples dispositivos

## 🔄 Próximas Mejoras

- [ ] Integración con backend para formulario de contacto
- [ ] Galería de proyectos con modal detallado
- [ ] Blog o sección de artículos
- [ ] Integración con APIs externas
- [ ] PWA (Progressive Web App)
- [ ] Optimización de imágenes con next/image
- [ ] Analytics e integración con Google Analytics

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

**Luis** - Desarrollador Web Full Stack

- GitHub: [@Ludwiigdev](https://github.com/Ludwiigdev)
- LinkedIn: [Tu LinkedIn]
- Email: contact@example.com

---

**Hecho con ❤️ usando React, Next.js y TailwindCSS**
