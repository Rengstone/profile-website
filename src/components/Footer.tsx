import React from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          &copy; {currentYear} MDI. All rights reserved.
        </motion.p>
        {/* <motion.div
          className={styles.socialLinks}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a
            href="#"
            aria-label="GitHub"
            whileHover={{
              scale: 1.2,
              y: [-3, 3, -3],
              rotate: [0, -5, 5, 0]
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🐙
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            whileHover={{
              scale: 1.2,
              y: [-3, 3, -3],
              rotate: [0, -5, 5, 0]
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            👔
          </motion.a>
          <motion.a
            href="#"
            aria-label="Twitter"
            whileHover={{
              scale: 1.2,
              y: [-3, 3, -3],
              rotate: [0, -5, 5, 0]
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🐦
          </motion.a>
        </motion.div> */}
      </div>
    </footer>
  );
};

export default Footer;