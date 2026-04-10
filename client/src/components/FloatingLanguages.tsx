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
  const radius = 160;

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
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
              scale: 0,
            }}
            animate={{
              x: x,
              y: y,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.15,
              duration: 1,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
          >
            <motion.div
              className="flex flex-col items-center"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, -8, 0],
              }}
              transition={{
                duration: 5 + index * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{
                scale: 1.3,
                y: -15,
              }}
            >
              {/* Glassmorphism background */}
              <motion.div
                className="relative flex items-center justify-center w-14 h-14 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(88, 0, 255, 0.2)',
                    '0 0 40px rgba(88, 0, 255, 0.4)',
                    '0 0 20px rgba(88, 0, 255, 0.2)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className={`text-2xl font-bold ${lang.color}`}>
                  {lang.icon}
                </div>
              </motion.div>
              
              {/* Label */}
              <motion.div
                className="text-xs font-semibold text-foreground/80 whitespace-nowrap mt-2 px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm border border-border/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
              >
                {lang.name}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Outer glow ring */}
      <motion.div
        className="absolute w-80 h-80 rounded-full border border-primary/20"
        animate={{
          rotate: 360,
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
          opacity: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
    </div>
  );
}
