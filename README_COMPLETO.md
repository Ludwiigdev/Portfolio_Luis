# 🎨 Portfolio Moderno Luis - Documentación Completa

## 📋 Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Características](#características)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Desarrollo](#desarrollo)
7. [Build y Producción](#build-y-producción)
8. [Estructura de Componentes](#estructura-de-componentes)
9. [Sistema de Traducciones](#sistema-de-traducciones)
10. [Sistema de Temas](#sistema-de-temas)
11. [Contribuciones](#contribuciones)

---

## 📝 Descripción General

**Portfolio Moderno Luis** es una aplicación web moderna y profesional construida con React, Next.js y TailwindCSS. Presenta un diseño minimalista, animaciones elegantes, soporte multiidioma (ES/EN), modo oscuro/claro, y características interactivas como un cubo Rubik animado.

El portafolio demuestra habilidades en desarrollo web full stack, incluyendo:
- Desarrollo frontend moderno con React 19
- Animaciones suaves con Framer Motion
- Diseño responsivo y accesible
- Internacionalización (i18n)
- Gestión de temas dinámicos

---

## 🛠️ Tecnologías Utilizadas

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **React** | 19.2.1 | Framework UI principal |
| **Next.js** | - | Vite como bundler |
| **TypeScript** | 5.9.3 | Tipado estático |
| **TailwindCSS** | 4.1.14 | Utilidades CSS |
| **Framer Motion** | 12.23.22 | Animaciones avanzadas |
| **Lucide React** | 0.453.0 | Iconos vectoriales |
| **React Hook Form** | 7.64.0 | Gestión de formularios |
| **Zod** | 4.1.12 | Validación de esquemas |

### Backend
| Tecnología | Versión | Propósito |
|------------|---------|----------|
| **Express** | 4.21.2 | Servidor HTTP |
| **tRPC** | 11.6.0 | RPC type-safe |
| **Drizzle ORM** | 0.44.5 | ORM para base de datos |
| **MySQL** | 3.15.0 | Driver de base de datos |

### Herramientas de Desarrollo
| Herramienta | Versión | Propósito |
|------------|---------|----------|
| **Vite** | 7.1.7 | Bundler y dev server |
| **Vitest** | 2.1.4 | Testing unitario |
| **Prettier** | 3.6.2 | Formateador de código |
| **pnpm** | 10.4.1 | Package manager |

---

## ✨ Características

### 🎯 Secciones Principales

#### 1. **Hero Section**
- Cubo Rubik interactivo 3D (arrastrable)
- Presentación elegante con gradientes
- Botones CTA (Call To Action)
- Redes sociales con animaciones
- Responsive en todos los dispositivos

#### 2. **About Section**
- Foto con animación épica de scroll reveal
- Descripción personal traducible
- Estadísticas destacadas (Años de experiencia, Proyectos, Satisfacción)
- Logros destacados (Desarrollo Ágil, Diseño Responsivo, etc.)
- Partículas flotantes animadas

#### 3. **Skills Section**
- 4 categorías: Frontend, Backend, Herramientas, Bases de Datos
- Cubos 3D animados por categoría
- Iconos de tecnologías con hover effects
- Animaciones de entrada escalonadas

#### 4. **Projects Section**
- Cards modernas con imágenes
- Filtros por categoría (Web, Mobile, Todos)
- Hover effects con elevación y sombras
- Enlaces a GitHub y demo en vivo
- Descripciones traducibles

#### 5. **Contact Section**
- Formulario de contacto validado
- Información de contacto (Email, Teléfono, Ubicación)
- Redes sociales con iconos limpios
- Estados de envío (loading, success, error)
- Animaciones interactivas

#### 6. **Footer**
- Navegación rápida
- Redes sociales
- Botón "Volver arriba" flotante
- Partículas animadas
- Copyright dinámico

### 🌍 Funcionalidades Globales

- **Cambio de Idioma**: Selector ES/EN con persistencia
- **Modo Oscuro/Claro**: Toggle con persistencia en localStorage
- **Responsive Design**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Transiciones elegantes en toda la app
- **Accesibilidad**: Navegación por teclado, colores accesibles

---

## 📁 Estructura del Proyecto

```
portfolio-moderno-luis/
├── client/                          # Frontend React
│   ├── public/                      # Archivos estáticos
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   ├── src/
│   │   ├── components/              # Componentes reutilizables
│   │   │   ├── Navbar.tsx           # Navegación principal
│   │   │   ├── Hero.tsx             # Sección Hero con cubo
│   │   │   ├── About.tsx            # Sección About con foto
│   │   │   ├── Skills.tsx           # Sección de habilidades
│   │   │   ├── Projects.tsx         # Sección de proyectos
│   │   │   ├── Contact.tsx          # Sección de contacto
│   │   │   ├── Footer.tsx           # Pie de página
│   │   │   ├── Cube.tsx             # Cubo Rubik interactivo
│   │   │   ├── Cube.css             # Estilos del cubo
│   │   │   ├── ErrorBoundary.tsx    # Manejo de errores
│   │   │   └── ui/                  # Componentes shadcn/ui
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── input.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── sonner.tsx
│   │   │       └── ...
│   │   ├── contexts/                # Contextos React
│   │   │   ├── ThemeContext.tsx     # Gestión de tema
│   │   │   └── LanguageContext.tsx  # Gestión de idioma
│   │   ├── pages/                   # Páginas principales
│   │   │   ├── Home.tsx             # Página principal
│   │   │   └── NotFound.tsx         # Página 404
│   │   ├── lib/                     # Utilidades
│   │   │   ├── trpc.ts              # Cliente tRPC
│   │   │   └── utils.ts             # Funciones auxiliares
│   │   ├── App.tsx                  # Componente raíz
│   │   ├── main.tsx                 # Punto de entrada
│   │   ├── index.css                # Estilos globales
│   │   └── vite-env.d.ts            # Tipos de Vite
│   └── index.html                   # HTML principal
├── server/                          # Backend Express + tRPC
│   ├── _core/                       # Configuración interna
│   │   ├── index.ts                 # Servidor Express
│   │   ├── context.ts               # Contexto tRPC
│   │   ├── trpc.ts                  # Configuración tRPC
│   │   ├── env.ts                   # Variables de entorno
│   │   ├── cookies.ts               # Gestión de cookies
│   │   ├── oauth.ts                 # Autenticación OAuth
│   │   ├── llm.ts                   # Integración LLM
│   │   ├── notification.ts          # Notificaciones
│   │   ├── voiceTranscription.ts    # Transcripción de voz
│   │   ├── imageGeneration.ts       # Generación de imágenes
│   │   ├── map.ts                   # Integración de mapas
│   │   └── systemRouter.ts          # Rutas del sistema
│   ├── db.ts                        # Funciones de base de datos
│   ├── routers.ts                   # Rutas tRPC
│   ├── storage.ts                   # Almacenamiento S3
│   └── auth.logout.test.ts          # Tests de autenticación
├── drizzle/                         # ORM Drizzle
│   ├── schema.ts                    # Esquema de base de datos
│   └── migrations/                  # Migraciones SQL
├── shared/                          # Código compartido
│   ├── const.ts                     # Constantes globales
│   └── types.ts                     # Tipos compartidos
├── storage/                         # Helpers de almacenamiento
│   └── s3.ts                        # Configuración S3
├── package.json                     # Dependencias
├── pnpm-lock.yaml                   # Lock file
├── tsconfig.json                    # Configuración TypeScript
├── tailwind.config.js               # Configuración TailwindCSS
├── vite.config.ts                   # Configuración Vite
├── vitest.config.ts                 # Configuración Vitest
├── .env                             # Variables de entorno
├── .gitignore                       # Archivos ignorados
├── .prettierrc                      # Configuración Prettier
├── README.md                        # Este archivo
└── todo.md                          # Lista de tareas
```

---

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js** 22.13.0 o superior
- **pnpm** 10.4.1 o superior
- **Git** para control de versiones

### Pasos de Instalación

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/Ludwiigdev/Portfolio_Luis.git
cd Portfolio_Luis
```

#### 2. Instalar Dependencias

```bash
pnpm install
```

#### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# Base de datos
DATABASE_URL=mysql://usuario:contraseña@localhost:3306/portfolio

# Autenticación
JWT_SECRET=tu_secreto_jwt_aqui

# OAuth
VITE_APP_ID=tu_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# Información del propietario
OWNER_OPEN_ID=tu_open_id
OWNER_NAME=Luis

# APIs Manus
BUILT_IN_FORGE_API_URL=https://api.manus.im
BUILT_IN_FORGE_API_KEY=tu_api_key
VITE_FRONTEND_FORGE_API_URL=https://api.manus.im
VITE_FRONTEND_FORGE_API_KEY=tu_frontend_api_key

# Analytics
VITE_ANALYTICS_ENDPOINT=https://analytics.manus.im
VITE_ANALYTICS_WEBSITE_ID=tu_website_id
```

#### 4. Inicializar la Base de Datos

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

---

## 💻 Desarrollo

### Iniciar Servidor de Desarrollo

```bash
pnpm dev
```

El servidor estará disponible en `http://localhost:3000`

### Estructura de Desarrollo

- **Frontend**: Vite con HMR (Hot Module Replacement)
- **Backend**: Express con auto-reload
- **Base de datos**: MySQL con Drizzle ORM

### Comandos Disponibles

```bash
# Desarrollo
pnpm dev                # Inicia servidor de desarrollo

# Testing
pnpm test               # Ejecuta tests con Vitest
pnpm test:watch        # Modo watch para tests

# Código
pnpm format            # Formatea código con Prettier
pnpm check             # Verifica tipos TypeScript
pnpm lint              # Linting (si está configurado)

# Base de datos
pnpm drizzle-kit generate  # Genera migraciones
pnpm drizzle-kit migrate   # Ejecuta migraciones
pnpm drizzle-kit studio   # Abre Drizzle Studio
```

---

## 🏗️ Build y Producción

### Compilar para Producción

```bash
pnpm build
```

Esto genera:
- `dist/` - Aplicación frontend compilada
- `dist/index.js` - Servidor backend compilado

### Ejecutar en Producción

```bash
pnpm start
```

### Optimizaciones de Producción

- **Code Splitting**: Carga de código bajo demanda
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: Reducción de tamaño de archivos
- **Compresión**: Gzip para transferencia eficiente
- **Caching**: Headers de caché optimizados

---

## 🧩 Estructura de Componentes

### Componentes Principales

#### **Navbar.tsx**
```tsx
- Logo animado
- Navegación con enlaces suave
- Toggle de tema (oscuro/claro)
- Selector de idioma (ES/EN)
- Menú hamburguesa responsive
```

#### **Hero.tsx**
```tsx
- Cubo Rubik 3D interactivo
- Presentación del nombre y título
- Descripción traducible
- Botones CTA
- Redes sociales con iconos
```

#### **About.tsx**
```tsx
- Foto con animación épica
- Descripción personal traducible
- Estadísticas (experiencia, proyectos, satisfacción)
- Logros destacados
- Partículas flotantes
```

#### **Skills.tsx**
```tsx
- 4 categorías de habilidades
- Cubos 3D animados
- Iconos de tecnologías
- Animaciones de entrada
```

#### **Projects.tsx**
```tsx
- Grid de proyectos
- Filtros por categoría
- Cards con hover effects
- Enlaces a GitHub y demo
```

#### **Contact.tsx**
```tsx
- Formulario validado
- Información de contacto
- Redes sociales
- Estados de envío
```

---

## 🌍 Sistema de Traducciones

### Estructura de Idiomas

El archivo `LanguageContext.tsx` contiene todas las traducciones:

```typescript
const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: '¡Hola! Soy',
      title: 'Desarrollador Web Full Stack',
      description: 'Creo experiencias web modernas, rápidas y hermosas...',
    },
    // ... más traducciones
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    // ... más traducciones
  },
};
```

### Uso en Componentes

```tsx
import { useLanguage } from '@/contexts/LanguageContext';

export default function MiComponente() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
    </div>
  );
}
```

### Agregar Nuevas Traducciones

1. Abre `client/src/contexts/LanguageContext.tsx`
2. Agrega la clave en ambos idiomas:

```typescript
hero: {
  title: 'Desarrollador Web Full Stack', // ES
  // ...
}

// EN
hero: {
  title: 'Full Stack Web Developer', // EN
  // ...
}
```

3. Usa en componentes con `t('hero.title')`

---

## 🎨 Sistema de Temas

### Configuración de Temas

El archivo `ThemeContext.tsx` gestiona los temas:

```typescript
// Temas disponibles
type Theme = 'light' | 'dark';

// Colores por tema (definidos en index.css)
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.6%;
    --primary: 217 91% 60%;
    // ... más variables
  }

  .dark {
    --background: 0 0% 3.6%;
    --foreground: 0 0% 98%;
    // ... más variables
  }
}
```

### Uso en Componentes

```tsx
import { useTheme } from '@/contexts/ThemeContext';

export default function MiComponente() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

### Personalizar Colores

Edita `client/src/index.css` para cambiar la paleta de colores:

```css
:root {
  --primary: 217 91% 60%;      /* Azul principal */
  --secondary: 280 85% 67%;    /* Púrpura */
  --accent: 280 100% 50%;      /* Acento */
  /* ... más variables */
}
```

---

## 🧪 Testing

### Ejecutar Tests

```bash
pnpm test
```

### Escribir Tests

Crea archivos `.test.ts` o `.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest';

describe('MiComponente', () => {
  it('debe renderizar correctamente', () => {
    expect(true).toBe(true);
  });
});
```

### Referencia de Tests

Ver `server/auth.logout.test.ts` para ejemplo completo.

---

## 📦 Dependencias Principales

### Frontend
- **React 19**: Framework UI moderno
- **Framer Motion**: Animaciones avanzadas
- **TailwindCSS**: Utilidades CSS
- **Lucide React**: Iconos vectoriales
- **React Hook Form**: Gestión de formularios
- **Zod**: Validación de esquemas

### Backend
- **Express**: Servidor HTTP
- **tRPC**: RPC type-safe
- **Drizzle ORM**: ORM para base de datos

### Herramientas
- **Vite**: Bundler rápido
- **TypeScript**: Tipado estático
- **Prettier**: Formateador de código
- **Vitest**: Testing unitario

---

## 🤝 Contribuciones

### Flujo de Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Usa TypeScript para todo el código nuevo
- Sigue el formato de Prettier (`pnpm format`)
- Escribe tests para nuevas funcionalidades
- Documenta cambios significativos

---

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Ver `LICENSE` para más detalles.

---

## 👤 Autor

**Luis** - Desarrollador Web Full Stack

- GitHub: [@Ludwiigdev](https://github.com/Ludwiigdev)
- LinkedIn: [Tu perfil]
- Email: contact@example.com

---

## 🙏 Agradecimientos

- Inspiración en diseños modernos
- Comunidad de React y Next.js
- Equipo de Manus por las herramientas

---

## 📞 Soporte

Para preguntas o problemas:

1. Abre un issue en GitHub
2. Contacta a través del formulario de contacto en el portafolio
3. Envía un email a contact@example.com

---

**Última actualización**: Abril 2026
**Versión**: 2.0.0 (Migración a React + Next.js)
