import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Top border with gradient */}
      <motion.div
        className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      <div className="bg-muted/30 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.h3
                className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Luis
              </motion.h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias web modernas y hermosas.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links - Sin cuadros de colores */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold">{t('footer.social')}</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      title={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-4">{t('footer.back_to_top')}</h3>
                <p className="text-sm text-foreground/60">Regresa al inicio de la página</p>
              </div>
              <motion.button
                onClick={scrollToTop}
                className="p-3 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 w-fit"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>

          {/* Divider with animation */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ originX: 0.5 }}
          />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="cursor-default"
            >
              &copy; {currentYear} Luis. {t('footer.rights')}
            </motion.p>

            <motion.p
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t('footer.made_with')}
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(5)].map((_, i) => {
          const xOffset = (i + 1) * 20 - 50;
          const leftPos = 10 + i * 18;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, xOffset, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${leftPos}%`,
                top: '100%',
              }}
            />
          );
        })}
      </div>
    </footer>
  );
}
