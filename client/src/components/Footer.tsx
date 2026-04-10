import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, Heart, ArrowUp, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ludwiigdev', label: 'GitHub', color: 'from-gray-400 to-gray-600' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ludwiigdev', label: 'LinkedIn', color: 'from-blue-400 to-blue-600' },
    { icon: Mail, href: 'mailto:luis@example.com', label: 'Email', color: 'from-red-400 to-red-600' },
  ];

  const quickLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'luis@example.com', href: 'mailto:luis@example.com' },
    { icon: Phone, label: 'Teléfono', value: '+57 (555) 123-4567', href: 'tel:+575551234567' },
    { icon: MapPin, label: 'Ubicación', value: 'Bogota, Colombia', href: '#' },
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
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Top border with gradient animation */}
      <motion.div
        className="h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ originX: 0 }}
      />

      <div className="bg-gradient-to-b from-muted/40 to-muted/20 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Brand & Tagline */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Luis
                </h3>
              </motion.div>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Desarrollador Full Stack apasionado por crear experiencias web modernas y hermosas.
              </p>
              <motion.div
                className="flex items-center gap-2 text-xs text-foreground/60"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                <span>Creando soluciones innovadoras</span>
              </motion.div>
            </motion.div>

            {/* Quick Navigation */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground">{t('footer.navigation')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group relative"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                      />
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground">Contacto</h3>
              <ul className="space-y-3">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.li
                      key={info.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                    >
                      <motion.a
                        href={info.href}
                        className="flex items-start gap-3 group"
                        whileHover={{ x: 5 }}
                      >
                        <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-semibold text-foreground/60">{info.label}</p>
                          <p className="text-sm text-foreground/80 group-hover:text-primary transition-colors duration-300">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground">{t('footer.social')}</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative"
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                      title={link.label}
                    >
                      <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${link.color} opacity-10 group-hover:opacity-20 transition-all duration-300 absolute inset-0`} />
                      <div className="relative w-11 h-11 flex items-center justify-center rounded-lg border border-border/50 group-hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                        <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors duration-300" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.div>
                {t('footer.back_to_top')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Divider */}
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

            <motion.div
              className="flex items-center gap-2 flex-wrap justify-center"
            >
              <motion.p
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {t('footer.made_with')}
              </motion.p>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💻
              </motion.span>
            </motion.div>
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
