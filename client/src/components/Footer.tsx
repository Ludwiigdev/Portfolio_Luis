import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ludwiigdev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ludwiigdev', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:luis@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="relative mt-20 overflow-hidden bg-black/20 backdrop-blur-sm"
    >
      {/* Interactive aura background */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(88, 0, 255, 0.1), transparent 80%)`,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      />

      {/* Static background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Top gradient line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto px-4 py-20">
        {/* Main content - Horizontal layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black tracking-widest bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              LUIS
            </motion.h2>
            <motion.p
              className="text-sm text-foreground/60 mt-3 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Full Stack Developer • Creative Problem Solver
            </motion.p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {quickLinks.map((link, idx) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-foreground/30 text-foreground/70 hover:text-primary hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
                    title={link.label}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    <Icon className="w-5 h-5 relative z-10" />
                  </motion.a>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground/90 text-background text-xs font-semibold rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {link.label}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          style={{ originX: 0.5 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            &copy; {currentYear} Luis • {t('footer.rights')}
          </p>

          <motion.button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-foreground/30 hover:border-primary/50 text-foreground/70 hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            title="Back to top"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>

          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t('footer.made_with')}
          </motion.p>
        </motion.div>
      </div>

      {/* Floating particles - very subtle */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-primary/20 rounded-full"
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1,
            }}
            style={{
              left: `${20 + i * 30}%`,
              bottom: '0%',
            }}
          />
        ))}
      </div>
    </footer>
  );
}
