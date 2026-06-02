import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, TabletSmartphone, Layers } from 'lucide-react';
import CommonButton from '@/components/commonButton';
import styles from './platforms.module.scss';

const platformsData = [
  {
    title: 'Android App Development',
    description: 'Native and cross-platform Android applications optimized for performance and scalability.',
    icon: <Smartphone size={36} />
  },
  {
    title: 'iOS App Development',
    description: 'Premium iPhone and iPad applications with smooth user experiences.',
    icon: <TabletSmartphone size={36} />
  },
  {
    title: 'Cross-Platform Development',
    description: 'Develop apps for both Android and iOS using modern frameworks for faster delivery and cost efficiency.',
    icon: <Layers size={36} />
  }
];

export default function Platforms() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <div className={styles.platforms}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.center}>
            <CommonButton text="Platforms Section" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Mobile Platforms We Develop
          </motion.h2>
        </div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {platformsData.map((platform, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrapper}>
                {platform.icon}
              </div>
              <h3 className={styles.cardTitle}>{platform.title}</h3>
              <p className={styles.cardDescription}>{platform.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
