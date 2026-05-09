import React, { useState } from 'react';
import styles from './faqSection.module.scss';
import {
    Plus,
    Minus,
    HelpCircle,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What is a Mauritius Forex License?",
            answer: "A Mauritius Forex License is officially known as an Investment Dealer License issued by the Financial Services Commission (FSC) Mauritius. It allows companies to legally offer forex trading, CFDs, securities trading, and other investment-related services internationally."
        },
        {
            id: 2,
            question: "Which authority regulates forex brokers in Mauritius?",
            answer: "Forex brokers in Mauritius are regulated by the Financial Services Commission (FSC) Mauritius, the integrated regulator for non-bank financial services and global business activities."
        },
        {
            id: 3,
            question: "Why is Mauritius a popular jurisdiction for forex licensing?",
            answer: "Mauritius is known for its business-friendly regulations, attractive tax structure, international reputation, affordable licensing costs, and strong access to African and global financial markets."
        },
        {
            id: 4,
            question: "How long does it take to obtain a Mauritius Forex License?",
            answer: "The licensing process generally takes around 3 to 6 months, depending on the quality of the application, compliance documentation, and regulatory review process."
        },
        {
            id: 5,
            question: "What are the minimum capital requirements for a Mauritius Forex License?",
            answer: "The minimum capital requirement depends on the license category. Investment Dealer licenses may require capital ranging from approximately MUR 700,000 to MUR 1,000,000 or more based on the business model and services offered."
        },
        {
            id: 6,
            question: "Can foreign investors apply for a Mauritius Forex License?",
            answer: "Yes, foreign entrepreneurs and international investors can apply for a Mauritius Forex License. Mauritius allows 100% foreign ownership for global business companies."
        },
        {
            id: 7,
            question: "What documents are required for the application process?",
            answer: "Applicants generally need company incorporation documents, business plans, AML/KYC policies, shareholder and director details, financial projections, proof of capital, and compliance documentation."
        },
        {
            id: 8,
            question: "Is a local office required in Mauritius?",
            answer: "Yes, companies are usually required to maintain local substance in Mauritius, including a registered office, resident directors, and management presence through a licensed management company."
        },
        {
            id: 9,
            question: "What activities are allowed under the Mauritius Investment Dealer License?",
            answer: "The license allows brokers to provide forex trading, CFD trading, portfolio management, securities dealing, investment advisory services, and other financial market activities depending on the license type."
        },
        {
            id: 10,
            question: "Does Mauritius offer tax benefits for forex brokers?",
            answer: "Mauritius offers an attractive tax environment with competitive corporate tax structures and access to multiple double taxation treaties, making it favorable for international brokerage businesses."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSectionAlignment}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <span>FAQ</span>
                    <h2>Commonly Asked Questions</h2>
                    <p>
                        Get answers to the most common questions about obtaining a Mauritius Forex License.
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

                <div className={styles.ctaSection}>
                    <h3>Still Have Questions?</h3>
                    <p>Our experts are ready to help you navigate the licensing process in Mauritius.</p>
                    <button className={styles.ctaButton}>
                        Contact Our Experts <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
