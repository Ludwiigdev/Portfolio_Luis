import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito, pagos y panel de administración.',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con sincronización en tiempo real.',
    category: 'web',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 3,
    title: 'Mobile Weather App',
    description: 'Aplicación móvil de clima con pronósticos detallados y mapas interactivos.',
    category: 'mobile',
    tags: ['React Native', 'TypeScript', 'API REST'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a0c5?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Dashboard de análisis con gráficos interactivos y reportes en tiempo real.',
    category: 'web',
    tags: ['Next.js', 'Recharts', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Red social con feed, mensajería y notificaciones en tiempo real.',
    category: 'web',
    tags: ['React', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Aplicación para rastrear ejercicios, calorías y progreso físico.',
    category: 'mobile',
    tags: ['React Native', 'Redux', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=500&h=300&fit=crop',
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { value: 'all', label: t('projects.filter_all') },
    { value: 'web', label: t('projects.filter_web') },
    { value: 'mobile', label: t('projects.filter_mobile') },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('projects.title')}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/50'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                exit="exit"
                layout
                className="group"
              >
                <div className="h-full rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-48 bg-muted">
                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />

                    {/* Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop';
                      }}
                    />

                    {/* Hover Actions */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="p-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
                          <Github className="w-5 h-5 text-white" />
                        </div>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="p-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4 flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(var(--primary), 0.2)' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-border">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <Github className="w-4 h-4" />
                          GitHub
                        </Button>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="sm" className="w-full gap-2 bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg hover:shadow-primary/50">
                          <ArrowUpRight className="w-4 h-4" />
                          Live
                        </Button>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
