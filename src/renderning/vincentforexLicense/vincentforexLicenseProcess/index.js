import React from 'react';
import styles from './vincentforexLicenseProcess.module.scss';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Globe, 
  Headset, 
  FileText, 
  Upload, 
  PenTool, 
  ShieldCheck, 
  Landmark, 
  Scroll 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Proposal & Onboarding',
    description: 'Receive a customized proposal based on your business model and finalize the onboarding process. Our transparent pricing includes all legal, government, and setup services.',
    icon: <FileText size={48} />,
  },
  {
    id: 2,
    title: 'Submit Required Documents',
    description: 'Provide your passport, proof of address, and incorporation details through our secure system. All data is handled with strict confidentiality and compliance standards.',
    icon: <Upload size={48} />,
  },
  {
    id: 3,
    title: 'Sign Incorporation Documents',
    description: 'Review and digitally sign all incorporation documents prepared by our legal experts using secure e-signature technology.',
    icon: <PenTool size={48} />,
  },
  {
    id: 4,
    title: 'Agreement & Compliance Setup',
    description: 'Complete the engagement agreement and initiate compliance setup including AML/KYC frameworks required for your forex brokerage operations.',
    icon: <ShieldCheck size={48} />,
  },
  {
    id: 5,
    title: 'Company Incorporation Processed',
    description: 'Our team submits and processes your application with Saint Lucia authorities, handling all legal formalities and regulatory requirements on your behalf.',
    icon: <Landmark size={48} />,
  },
  {
    id: 6,
    title: 'Receive Your Company Documents',
    description: 'Get your Certificate of Incorporation, Articles of Association, and complete company documents delivered within 5-15 working days, ready for operations.',
    icon: <Scroll size={48} />,
  },
];

const features = [
  { icon: <Shield size={20} />, title: '100% Confidential', desc: 'Your data is safe with us' },
  { icon: <Clock size={20} />, title: 'Fast & Efficient', desc: '5-15 Working Days Delivery' },
  { icon: <Globe size={20} />, title: 'Global Business', desc: 'Operate Internationally' },
  { icon: <Headset size={20} />, title: 'Expert Support', desc: 'End-to-End Assistance' },
];

export default function VincentforexLicenseProcess() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.processSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <span className={styles.tag}>PROCESS</span>
          <h2>Saint Lucia Company Formation in <span>6 Simple Steps</span></h2>
          <p>
            Our streamlined process ensures your Saint Lucia forex company is established 
            quickly, securely, and in full compliance — so you can launch your brokerage 
            business with confidence and global reach.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.grid}
        >
          {steps.map((step) => (
            <motion.div key={step.id} variants={itemVariants} className={styles.stepCard}>
              <div className={styles.cardHeader}>
                <span className={styles.stepNumber}>{step.id}</span>
                <div className={styles.content}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className={styles.imageWrapper}>
                  {step.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.featuresFooter}
        >
          {features.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <div className={styles.featureText}>
                <strong>{feature.title}</strong>
                <span>{feature.desc}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
