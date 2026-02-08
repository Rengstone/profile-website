import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const EMAIL = '1102.arik@gmail.com';
const WHATSAPP_NUMBER = '6281294440804'; // no +, no spaces

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Message from ${formData.name || 'Portfolio Visitor'}`
    );
    const body = encodeURIComponent(formData.message);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <motion.div
          className={styles.contactContent}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* =====================
              LEFT: CONTACT INFO
          ====================== */}
          <motion.div
            className={styles.contactInfo}
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Let’s work together</h3>
            <p>
              Have a project, idea, or just want to say hi?
              The fastest way to reach me is via email or WhatsApp.
            </p>

            {/* PRIMARY ACTIONS */}
            <div className={styles.primaryActions}>
              <a
                href={`mailto:${EMAIL}`}
                className={styles.emailButton}
              >
                📧 Email Me
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                💬 WhatsApp Me
              </a>
            </div>

            {/* CONTACT DETAILS */}
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span>📧</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>

              <div className={styles.detailItem}>
                <span>📍</span>
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </motion.div>

          {/* =====================
              RIGHT: SIMPLE FORM
          ====================== */}
          <motion.form
            onSubmit={handleSubmit}
            className={styles.contactForm}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your idea..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send via Email
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
