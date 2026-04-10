import { motion } from 'framer-motion';

interface Language {
  name: string;
  icon: string;
  color: string;
}

interface FloatingLanguagesProps {
  languages?: Language[];
}

export default function FloatingLanguages({
  languages = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'TypeScript', icon: 'TS', color: 'text-blue-600' },
    { name: 'JavaScript', icon: 'JS', color: 'text-yellow-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-500' },
    { name: 'Python', icon: '🐍', color: 'text-blue-500' },
    { name: 'SQL', icon: '🗄️', color: 'text-orange-500' },
  ],
}: FloatingLanguagesProps) {
  const totalLanguages = languages.length;
  const radius = 140;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {languages.map((lang, index) => {
        const angle = (index / totalLanguages) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={lang.name}
            className="absolute"
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
            }}
            animate={{
              x: x,
              y: y,
              opacity: 1,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.8,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.2,
              }}
            >
              <div className={`text-2xl mb-1 ${lang.color}`}>
                {lang.icon}
              </div>
              <div className="text-xs font-semibold text-foreground/70 whitespace-nowrap">
                {lang.name}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
