import React from 'react';
import styles from './RequirementsSectionSt.module.scss';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Home, 
  FileEdit, 
  Languages, 
  Lock, 
  FileCheck2, 
  Scale, 
  Timer,
  AlertCircle 
} from 'lucide-react';

const mainRequirements = [
  {
    id: 1,
    title: 'Identity Verification',
    description: 'A clear, certified copy of a valid passport (including photo and signature pages) for each director, shareholder, and ultimate beneficial owner (UBO).',
    icon: <UserCheck size={40} />,
  },
  {
    id: 2,
    title: 'Proof of Residential Address',
    description: 'A certified document issued within the last 3 months showing your current address. Accepted documents include:',
    list: [
      'Utility bills (electricity, water, gas, internet)',
      'Bank or financial statements',
      'Government-issued letters or tax documents',
      'Insurance or brokerage statements',
    ],
    note: 'Note: Scanned or digital copies are acceptable during the initial submission process.',
    icon: <Home size={40} />,
  },
  {
    id: 3,
    title: 'Incorporation Application Form',
    description: 'A completed and signed company incorporation form provided by Genxel, including business activity details and shareholder structure.',
    icon: <FileEdit size={40} />,
  },
];

const importantNotes = [
  {
    title: 'English Language Requirement',
    description: 'All documents must be in English. If not, a certified English translation is required.',
    icon: <Languages size={24} />,
  },
  {
    title: 'Secure Submission',
    description: 'All documents are submitted through our encrypted system to ensure complete confidentiality and data protection.',
    icon: <Lock size={24} />,
  },
  {
    title: 'Document Certification',
    description: 'Documents must be certified by a Notary Public, Chartered Accountant, or licensed legal professional with official stamp and signature.',
    icon: <FileCheck2 size={24} />,
  },
  {
    title: 'Compliance Standards',
    description: 'Documents are reviewed in accordance with international KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations.',
    icon: <Scale size={24} />,
  },
  {
    title: 'Processing Efficiency',
    description: 'Proper and complete documentation helps speed up the incorporation process and avoids delays.',
    icon: <Timer size={24} />,
  },
];

export default function RequirementsSectionSt() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={styles.requirementsSection}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.header}
        >
          <h2>Documents Required for <span>Saint Lucia Company Formation</span></h2>
          <div className={styles.divider}></div>
          <p>
            To ensure a smooth and compliant incorporation process, all directors, shareholders, and beneficial 
            owners must submit the following documents. Genxel ensures secure handling and fast verification.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.mainBox}
        >
          {mainRequirements.map((req) => (
            <motion.div key={req.id} variants={itemVariants} className={styles.reqCard}>
              <div className={styles.iconBox}>
                <div className={styles.iconCircle}>{req.icon}</div>
              </div>
              <div className={styles.content}>
                <div className={styles.titleRow}>
                  <span className={styles.stepNum}>{req.id}</span>
                  <h3>{req.title}</h3>
                </div>
                <p>{req.description}</p>
                {req.list && (
                  <div className={styles.listWrapper}>
                    <ul>
                      {req.list.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    {req.note && <p className={styles.note}>{req.note}</p>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={styles.notesBox}
        >
          <div className={styles.notesHeader}>
            <AlertCircle size={24} />
            <h3>Important Notes for Document Submission</h3>
          </div>
          <div className={styles.notesGrid}>
            {importantNotes.map((note, idx) => (
              <div key={idx} className={styles.noteItem}>
                <div className={styles.noteIcon}>{note.icon}</div>
                <div className={styles.noteText}>
                  <h4>{note.title}</h4>
                  <p>{note.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
