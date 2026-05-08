import React from 'react';
import styles from './explicit.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Percent, 
  Lock, 
  BarChart3, 
  Users, 
  DollarSign, 
  Landmark, 
  Activity, 
  CheckSquare, 
  Globe 
} from 'lucide-react';

const advantages = [
  { icon: <Zap size={20} />, text: 'Fast and streamlined company incorporation process with minimal paperwork' },
  { icon: <Percent size={20} />, text: 'Attractive tax environment designed for international businesses and investors' },
  { icon: <Lock size={20} />, text: 'Strong privacy and confidentiality protection for shareholders and directors' },
  { icon: <BarChart3 size={20} />, text: 'Stable political and economic environment that supports long-term business growth' },
  { icon: <Users size={20} />, text: 'Flexible corporate structure with no restrictions on foreign ownership' },
  { icon: <DollarSign size={20} />, text: 'Cost-effective company maintenance and competitive government fees' },
  { icon: <Landmark size={20} />, text: 'Access to international banking and financial services for global operations' },
  { icon: <Activity size={20} />, text: 'Ideal jurisdiction for forex brokers, fintech startups, and offshore business companies' },
  { icon: <CheckSquare size={20} />, text: 'Simple compliance requirements with efficient regulatory procedures' },
  { icon: <Globe size={20} />, text: 'Strategic Caribbean location with growing opportunities for international trade and investment' },
];

export default function Explicit() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className={styles.explicitAlignment}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.imgWrapper}
          >
            <div className={styles.img}>
              <Image 
                src="/assets/images/saint_lucia_hero.png" 
                alt="Saint Lucia Business Setup" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.content}
          >
            <span className={styles.tag}>
              <Globe size={14} />
              GLOBAL BUSINESS HUB
            </span>
            <h2>Why Choose Saint Lucia for Your Business Setup?</h2>
            
            <div className={styles.advantageList}>
              {advantages.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className={styles.advantageItem}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
