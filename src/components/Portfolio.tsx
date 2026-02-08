import React from 'react';
import { motion } from 'framer-motion';
import styles from './Portfolio.module.css';

import ringuaImg from '../assets/ringua.png';
import ringuaDoc from '../assets/documentation/Ringua_Documentation.pdf';

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string; // Optional image URL
  docUrl?: string;   // Optional documentation URL
}

const Portfolio: React.FC = () => {
  // Sample project data - in a real app, this could come from an API or data file
  const projects: Project[] = [
    {
      id: 1,
      title: 'Ringua Language Learning Platform',
      description: 'Ringua is a web-based language learning application that uses a gamification approach.',
      technologies: ['Laravel', 'PHP', 'Eloquent ORM', 'Tailwind CSS', 'JavaScript', 'PostgreSQL'],
      imageUrl: ringuaImg,
      docUrl: ringuaDoc
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks and projects.',
      technologies: ['React', 'Redux', 'Express', 'PostgreSQL']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with forecasts and location services.',
      technologies: ['JavaScript', 'CSS', 'API Integration']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS Modules']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Portfolio
        </motion.h2>
        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.projectImage}>
                {project.imageUrl ? (
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.projectImg}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                ) : (
                  <motion.div
                    className={styles.imagePlaceholder}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    🖼️
                  </motion.div>
                )}
              </div>

              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className={styles.techTag}
                      whileHover={{ scale: 1.1, backgroundColor: '#3a5ce5' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {project.docUrl && (
                  <a
                    href={project.docUrl}
                    download
                    className={styles.downloadBtn}
                  >
                    📄 Download Documentation
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;