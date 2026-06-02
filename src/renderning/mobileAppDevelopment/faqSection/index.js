import React, { useState } from 'react';
import styles from './faqSection.module.scss';
import {
    Plus,
    Minus,
    HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CommonButton from '@/components/commonButton';

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: 'Do you develop both Android and iOS apps?',
            answer: 'Yes, we develop applications for both Android and iOS platforms.'
        },
        {
            id: 2,
            question: 'Can you integrate MT4 and MT5?',
            answer: 'Yes, we provide complete MT4 and MT5 integration services.'
        },
        {
            id: 3,
            question: 'Do you provide custom UI/UX design?',
            answer: 'Absolutely. Every app is designed according to your brand identity and business requirements.'
        },
        {
            id: 4,
            question: 'Can you develop copy trading features?',
            answer: 'Yes, we can build complete copy trading and social trading modules.'
        },
        {
            id: 5,
            question: 'Do you provide post-launch support?',
            answer: 'Yes, we offer maintenance, updates, and technical support after deployment.'
        },
        {
            id: 6,
            question: 'How long does development take?',
            answer: 'The timeline depends on project scope and features, but most apps are delivered in phases.'
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSectionAlignment}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.center}>
                        <CommonButton text="FAQ" />
                    </div>
                    <h2>Frequently Asked Questions</h2>
                    <p>
                        Find answers to common questions about our mobile app development services.
                    </p>
                </div>

                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <div key={item.id} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
                            <div className={styles.questionWrapper} onClick={() => toggleAccordion(index)}>
                                <div className={styles.questionHeader}>
                                    <HelpCircle size={20} className={styles.icon} />
                                    <h4>{item.question}</h4>
                                </div>
                                <div className={styles.iconContainer}>
                                    {activeIndex === index ? (
                                        <motion.div
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Minus size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Plus size={20} />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        className={styles.answerWrapper}
                                    >
                                        <div className={styles.answerContent}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
