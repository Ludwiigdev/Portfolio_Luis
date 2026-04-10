import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRef } from 'react';
import FloatingLanguages from './FloatingLanguages';

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end center'],
  });

  // Animaciones épicas para la foto
  const photoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 0.5, 1]);
  const photoScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [0.5, 0.75, 1]);
  const photoY = useTransform(scrollYProgress, [0, 0.3, 0.6], [150, 75, 0]);
  const photoRotate = useTransform(scrollYProgress, [0, 0.3, 0.6], [-25, -10, 0]);
  const photoPerspective = useTransform(scrollYProgress, [0, 0.3, 0.6], [1200, 1200, 1200]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
  };

  // Partículas determinísticas
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (i % 3) * 40 - 40,
    y: Math.floor(i / 3) * 40 - 40,
    delay: i * 0.1,
  }));

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Foto con animación épica */}
          <motion.div
            className="flex justify-center lg:justify-start perspective"
            style={{
              opacity: photoOpacity,
              scale: photoScale,
              y: photoY,
              rotateX: photoRotate,
            }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group z-10">
              {/* Floating Languages */}
              <div className="absolute inset-0 z-20">
                <FloatingLanguages />
              </div>
              {/* Animated glow background - más épico */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Animated border gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl p-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <div className="w-full h-full rounded-3xl bg-background" />
              </motion.div>

              {/* Foto principal con efecto 3D */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-2xl group-hover:shadow-primary/30">
                <img
                  src="/luis-foto.png"
                  alt="Luis"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Shine effect épico */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Original floating particles effect */}
              {/* Disabled original particles - using FloatingLanguages instead */}
              {/* particles.map((particle) => (
                <motion.div
                  key={particle.id}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full"
                  style={{
                    left: `calc(50% + ${particle.x}px)`,
                    top: `calc(50% + ${particle.y}px)`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(particle.id) * 20, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: particle.delay,
                    repeat: Infinity,
                  }}
                />
              )) */}
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4">{t('about.subtitle')}</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                {t('about.content')}
              </p>
            </motion.div>

            {/* Estadísticas */}
            <motion.div className="grid grid-cols-3 gap-6" variants={containerVariants}>
              {[
                { number: '3+', label: t('about.experience') || 'Años de Experiencia' },
                { number: '15+', label: t('about.projects') || 'Proyectos Completados' },
                { number: '100%', label: t('about.satisfaction') || 'Satisfacción del Cliente' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center hover:shadow-lg hover:shadow-primary/20"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-foreground/60">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Logros Destacados */}
            <motion.div variants={itemVariants}>
              <h4 className="font-semibold mb-4">{t('about.achievements')}</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  t('about.achievement_agile'),
                  t('about.achievement_responsive'),
                  t('about.achievement_performance'),
                  t('about.achievement_security'),
                ].map(
                  (achievement, idx) => (
                    <motion.span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-medium hover:bg-primary/20 transition-all duration-300 cursor-default"
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
