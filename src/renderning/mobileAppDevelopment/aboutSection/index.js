import React from 'react';
import { motion } from 'framer-motion';
import styles from './aboutSection.module.scss';

export default function AboutSection() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.aboutSection}>
      <div className="container">
        <motion.div 
          className={styles.contentWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className={styles.title}>
            Mobile App Solutions Built for the <span className={styles.highlight}>Forex Industry</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className={styles.description}>
            At Genxel Technology, we specialize in developing advanced mobile applications for forex brokers, prop firms, crypto platforms, and trading businesses. Our team builds custom Android and iOS apps that combine powerful trading functionality with modern UI/UX and enterprise-level security.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
