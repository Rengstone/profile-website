import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = '/CV_Moch_Dira_Issyari.pdf'; // Path to the CV file in the public folder
    link.download = 'Moch_Dira_Issyari_CV.pdf'; // Change the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Animation variants for staggered text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  // Character animation for the name
  // const textVariant = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5
  //     }
  //   }
  // };

  // Generate random particles
  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className={styles.particle}
      style={{
        width: `${Math.random() * 10 + 2}px`,
        height: `${Math.random() * 10 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  ));

  return (
    <section id="home" className={styles.hero}>
      {/* Particles for background */}
      {particles}

      {/* Geometric shapes for background */}
      <div className={styles["shape-1-bg"]}></div>
      <div className={styles["shape-1"]}></div>
      <div className={styles["shape-2"]}></div>
      <div className={styles["shape-3"]}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.textContainer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.nameWrapper}>
              <motion.h1
                className={styles.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Moch Dira Issyari
              </motion.h1>
            </div>
            <motion.p
              className={styles.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Frontend Developer
            </motion.p>
            <motion.p
              className={styles.description}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Passionate about creating beautiful and functional web experiences.
              Specializing in React, TypeScript, and modern web technologies.
            </motion.p>
            <motion.button
              className={styles.cvButton}
              onClick={handleDownloadCV}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(74, 108, 247, 0.4)",
                x: [0, -5, 5, -5, 0]
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileFocus={{
                boxShadow: "0 0 0 3px rgba(74, 108, 247, 0.5)"
              }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ display: "block" }}
              >
                Download CV
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
        <div className={styles.photoContainer}>
          <motion.div
            className={styles.photoPlaceholder}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateZ: 5 }}
          >
            👤
          </motion.div>
          {/* Floating elements for fun animation */}
          {/* <motion.div
            className={styles.floatingElement}
            style={{ top: '20%', left: '15%' }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div> */}
          {/* <motion.div
            className={styles.floatingElement}
            style={{ top: '60%', right: '20%' }}
            animate={{
              y: [5, -15, 5],
              x: [10, -10, 10],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ⚡
          </motion.div> */}
          {/* <motion.div
            className={styles.floatingElement}
            style={{ bottom: '20%', left: '25%' }}
            animate={{
              y: [-15, 5, -15],
              x: [-10, 10, -10],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            🌟
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;