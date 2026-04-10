import { motion } from 'framer-motion';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = '' }: GlitchTextProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { opacity: 1 },
        hover: { opacity: 1 },
      }}
    >
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-primary/80"
        variants={{
          initial: { x: 0, opacity: 0 },
          hover: {
            x: [0, -2, 2, -1, 1, 0],
            opacity: [0, 1, 1, 1, 1, 0],
          },
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute inset-0 text-purple-500/80"
        variants={{
          initial: { x: 0, opacity: 0 },
          hover: {
            x: [0, 2, -2, 1, -1, 0],
            opacity: [0, 0.8, 0.8, 0.8, 0.8, 0],
          },
        }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          delay: 0.05,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
}
