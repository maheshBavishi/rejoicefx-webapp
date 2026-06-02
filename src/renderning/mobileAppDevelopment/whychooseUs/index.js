import React from 'react';
import { motion } from 'framer-motion';
import { Target, Settings, Smartphone, Activity, ShieldCheck, Headphones } from 'lucide-react';
import CommonButton from '@/components/commonButton';
import styles from './whychooseUs.module.scss';

const reasons = [
  {
    title: 'Industry-Focused Expertise',
    description: 'We understand forex brokerage workflows, trading systems, and financial technology requirements.',
    icon: <Target size={28} />
  },
  {
    title: 'Custom Development',
    description: 'Every app is tailored according to your business model and branding.',
    icon: <Settings size={28} />
  },
  {
    title: 'Modern UI/UX',
    description: 'Clean and intuitive designs focused on user engagement and retention.',
    icon: <Smartphone size={28} />
  },
  {
    title: 'Scalable Architecture',
    description: 'Apps built to handle thousands of active traders efficiently.',
    icon: <Activity size={28} />
  },
  {
    title: 'High Security Standards',
    description: 'Secure APIs, encrypted data handling, and advanced authentication systems.',
    icon: <ShieldCheck size={28} />
  },
  {
    title: 'Dedicated Support',
    description: 'Ongoing maintenance, upgrades, and technical support after deployment.',
    icon: <Headphones size={28} />
  }
];

export default function WhychooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.whychooseUs}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.center}>
            <CommonButton text="Why Choose Us" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Why Choose Genxel Technology for Mobile App Development?
          </motion.h2>
        </div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardDescription}>{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
