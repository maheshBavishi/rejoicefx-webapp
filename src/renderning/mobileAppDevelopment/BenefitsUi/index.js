import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartHandshake, 
  Globe2, 
  Repeat, 
  ShieldCheck, 
  UserCheck, 
  TrendingUp, 
  Rocket 
} from 'lucide-react';
import CommonButton from '@/components/commonButton';
import styles from './BenefitsUi.module.scss';

const benefits = [
  { text: 'Increase client engagement', icon: <HeartHandshake size={24} /> },
  { text: 'Provide trading access anytime, anywhere', icon: <Globe2 size={24} /> },
  { text: 'Improve customer retention', icon: <Repeat size={24} /> },
  { text: 'Build brand trust and professionalism', icon: <ShieldCheck size={24} /> },
  { text: 'Simplify onboarding and funding', icon: <UserCheck size={24} /> },
  { text: 'Generate higher trading activity', icon: <TrendingUp size={24} /> },
  { text: 'Reach global audiences faster', icon: <Rocket size={24} /> }
];

export default function BenefitsUi() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={styles.benefitsUi}>
      <div className='container'>
        <div className={styles.header}>
          <div className={styles.center}>
            <CommonButton text="Benefits Section" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            Benefits of Having a Mobile Trading App
          </motion.h2>
        </div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <span className={styles.cardText}>{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
