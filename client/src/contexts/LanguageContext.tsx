import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones completas
const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.greeting': '¡Hola! Soy',
    'hero.title': 'Desarrollador Web Full Stack',
    'hero.subtitle': 'Creo experiencias web modernas, rápidas y hermosas con tecnologías de punta.',
    'hero.cta': 'Ver mis proyectos',
    'hero.scroll': 'Desplázate para explorar',

    // About
    'about.title': 'Sobre mí',
    'about.subtitle': 'Apasionado por la Tecnología',
    'about.content': 'Soy un desarrollador web full stack con experiencia en crear aplicaciones escalables y de alto rendimiento. Me encanta resolver problemas complejos y aprender nuevas tecnologías. Mi objetivo es crear experiencias web modernas, rápidas y hermosas.',
    'about.description': 'Soy un desarrollador web apasionado con experiencia en la creación de aplicaciones web escalables y de alto rendimiento. Me encanta resolver problemas complejos y aprender nuevas tecnologías.',
    'about.experience': 'Años de Experiencia',
    'about.projects': 'Proyectos Completados',
    'about.satisfaction': 'Satisfacción del Cliente',
    'about.achievements': 'Logros Destacados',

    // Skills
    'skills.title': 'Habilidades',
    'skills.description': 'Tecnologías y herramientas que domino para crear soluciones web de alta calidad.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'skills.databases': 'Bases de Datos',

    // Projects
    'projects.title': 'Proyectos',
    'projects.description': 'Proyectos destacados que demuestran mis habilidades y experiencia en desarrollo web',
    'projects.filter_all': 'Todos',
    'projects.filter_web': 'Web',
    'projects.filter_mobile': 'Móvil',
    'projects.view_more': 'Ver más',
    'projects.github': 'GitHub',
    'projects.live': 'Ver en vivo',

    // Contact
    'contact.title': 'Contacto',
    'contact.description': '¿Tienes un proyecto en mente? Contáctame para discutirlo.',
    'contact.name': 'Nombre',
    'contact.email': 'Correo electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar el mensaje',
    'contact.follow': 'Sígueme en redes',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.made_with': 'Hecho con ❤️ por Luis',
    'footer.navigation': 'Navegación',
    'footer.social': 'Redes Sociales',
    'footer.back_to_top': 'Volver arriba',
    'footer.email': 'Email',
    'footer.phone': 'Teléfono',
    'footer.location': 'Ubicación',

    // About Achievements
    'about.achievement_agile': 'Desarrollo Ágil',
    'about.achievement_responsive': 'Diseño Responsivo',
    'about.achievement_performance': 'Optimización de Rendimiento',
    'about.achievement_security': 'Seguridad Web',

    // Common
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.back': 'Volver',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.greeting': 'Hello! I\'m',
    'hero.title': 'Full Stack Web Developer',
    'hero.subtitle': 'I create modern, fast, and beautiful web experiences with cutting-edge technologies.',
    'hero.cta': 'View my projects',
    'hero.scroll': 'Scroll to explore',

    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate About Technology',
    'about.content': 'I\'m a full stack web developer with experience creating scalable and high-performance applications. I love solving complex problems and learning new technologies. My goal is to create modern, fast, and beautiful web experiences.',
    'about.description': 'I\'m a passionate web developer with experience creating scalable and high-performance web applications. I love solving complex problems and learning new technologies.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.satisfaction': 'Client Satisfaction',
    'about.achievements': 'Notable Achievements',

    // Skills
    'skills.title': 'Skills',
    'skills.description': 'Technologies and tools I master to create high-quality web solutions.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.databases': 'Databases',

    // Projects
    'projects.title': 'Projects',
    'projects.description': 'Featured projects that showcase my skills and experience in web development',
    'projects.filter_all': 'All',
    'projects.filter_web': 'Web',
    'projects.filter_mobile': 'Mobile',
    'projects.view_more': 'View More',
    'projects.github': 'GitHub',
    'projects.live': 'Live Demo',

    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Do you have a project in mind? Contact me to discuss it.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message',
    'contact.follow': 'Follow me on social media',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.made_with': 'Made with ❤️ by Luis',
    'footer.navigation': 'Navigation',
    'footer.social': 'Social Media',
    'footer.back_to_top': 'Back to top',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.location': 'Location',

    // About Achievements
    'about.achievement_agile': 'Agile Development',
    'about.achievement_responsive': 'Responsive Design',
    'about.achievement_performance': 'Performance Optimization',
    'about.achievement_security': 'Web Security',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.back': 'Back',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const storedLang = localStorage.getItem('language') as Language | null;
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLang = storedLang || browserLang;
    
    setLanguageState(initialLang);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
