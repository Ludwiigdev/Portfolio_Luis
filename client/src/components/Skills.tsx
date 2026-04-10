import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code2, Database, Wrench, Smartphone } from 'lucide-react';

const skillsData = {
  frontend: {
    icon: Code2,
    emoji: '🌐',
    color: 'from-orange-500 to-red-500',
    skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vue.js', 'HTML/CSS'],
  },
  backend: {
    icon: Database,
    emoji: '⚙️',
    color: 'from-blue-500 to-cyan-500',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  tools: {
    icon: Wrench,
    emoji: '⚡',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Git', 'Docker', 'VS Code', 'Figma', 'Webpack', 'Jest'],
  },
  databases: {
    icon: Smartphone,
    emoji: '🐘',
    color: 'from-green-500 to-emerald-500',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'],
  },
};

const Cube3D = ({ emoji, color }: { emoji: string; color: string }) => {
  return (
    <div className="w-20 h-20 perspective mb-4">
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateX: -20, rotateY: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        {/* Front face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center text-3xl rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg`}
          style={{ transform: 'translateZ(40px)' }}
        >
          {emoji}
        </div>

        {/* Back face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center text-3xl rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg opacity-50`}
          style={{ transform: 'rotateY(180deg) translateZ(40px)' }}
        />

        {/* Right face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg opacity-75`}
          style={{ transform: 'rotateY(90deg) translateZ(40px)' }}
        />

        {/* Left face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg opacity-75`}
          style={{ transform: 'rotateY(-90deg) translateZ(40px)' }}
        />

        {/* Top face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg opacity-60`}
          style={{ transform: 'rotateX(90deg) translateZ(40px)' }}
        />

        {/* Bottom face */}
        <div
          className={`absolute w-20 h-20 flex items-center justify-center rounded-lg border-2 border-gray-700 bg-gradient-to-br ${color} shadow-lg opacity-60`}
          style={{ transform: 'rotateX(-90deg) translateZ(40px)' }}
        />
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: 'frontend', label: t('skills.frontend') },
    { key: 'backend', label: t('skills.backend') },
    { key: 'tools', label: t('skills.tools') },
    { key: 'databases', label: t('skills.databases') },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('skills.title')}</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const categoryData = skillsData[category.key as keyof typeof skillsData];

            return (
              <motion.div
                key={category.key}
                variants={itemVariants}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  {/* 3D Cube */}
                  <div className="flex justify-center mb-4" style={{ perspective: '1000px' }}>
                    <Cube3D emoji={categoryData.emoji} color={categoryData.color} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-center mb-4 group-hover:text-primary transition-colors duration-300">
                    {category.label}
                  </h3>

                  {/* Skills list */}
                  <div className="space-y-2">
                    {categoryData.skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-sm text-foreground/70 group-hover:text-foreground transition-all duration-300">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
