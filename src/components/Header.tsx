import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import styles from './Header.module.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <motion.h1
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          M.D.I
        </motion.h1>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map(item => (
            <motion.a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={e => handleSmoothScroll(e, item.href)}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Toggle theme"
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </motion.button>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(prev => !prev)}
          >
            <span className={menuOpen ? styles.open : ''} />
            <span className={menuOpen ? styles.open : ''} />
            <span className={menuOpen ? styles.open : ''} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={e => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
