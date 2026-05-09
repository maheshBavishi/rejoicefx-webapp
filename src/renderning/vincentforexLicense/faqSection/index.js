import React, { useState } from 'react';
import styles from './faqSection.module.scss';
import {
    Plus,
    Minus,
    HelpCircle,
    ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "What is a Saint Lucia Forex License?",
            answer: "A Saint Lucia Forex License allows companies to legally operate forex brokerage and related financial trading services through a registered international business structure in Saint Lucia. It is commonly used by forex brokers, fintech firms, and online trading platforms targeting global clients."
        },
        {
            id: 2,
            question: "Why is Saint Lucia becoming popular for forex businesses?",
            answer: "Saint Lucia is gaining popularity because of its fast company incorporation process, affordable setup costs, business-friendly environment, and flexible offshore structure suitable for international forex operations."
        },
        {
            id: 3,
            question: "Is Saint Lucia a good jurisdiction for startup forex brokers?",
            answer: "Yes, Saint Lucia is considered a cost-effective option for startup forex brokers looking for an offshore business structure with simple operational requirements and global business flexibility."
        },
        {
            id: 4,
            question: "How long does it take to set up a forex company in Saint Lucia?",
            answer: "The company formation process in Saint Lucia is generally quick and can often be completed within a few business days, depending on documentation and compliance requirements."
        },
        {
            id: 5,
            question: "What are the main benefits of a Saint Lucia Forex Company?",
            answer: "Key benefits include low operational costs, tax efficiency, strong confidentiality, quick incorporation, simple maintenance requirements, and the ability to serve international clients."
        },
        {
            id: 6,
            question: "Can foreign investors own a Saint Lucia forex company?",
            answer: "Yes, Saint Lucia allows 100% foreign ownership, making it attractive for international entrepreneurs and investors in the forex and fintech industry."
        },
        {
            id: 7,
            question: "Are there tax advantages for forex companies in Saint Lucia?",
            answer: "Saint Lucia offers a favorable tax environment for international business companies, which can help forex businesses optimize operational efficiency and global structuring."
        },
        {
            id: 8,
            question: "What documents are required to register a Saint Lucia forex company?",
            answer: "Typically required documents include passport copies, proof of address, company structure details, business activities information, and compliance-related documentation."
        },
        {
            id: 9,
            question: "Is a physical office required in Saint Lucia?",
            answer: "In many cases, companies only need a registered office and registered agent in Saint Lucia. However, operational requirements may vary depending on the business model."
        },
        {
            id: 10,
            question: "Can a Saint Lucia forex company open international bank accounts?",
            answer: "Yes, Saint Lucia companies can apply for international corporate bank accounts and payment processing solutions, subject to banking compliance and due diligence procedures."
        },
        {
            id: 11,
            question: "Does Saint Lucia support fintech and CFD businesses?",
            answer: "Yes, Saint Lucia is commonly used for forex trading platforms, CFD brokers, crypto-related businesses, fintech startups, and other international online financial services."
        },
        {
            id: 12,
            question: "Is AML and KYC compliance required for Saint Lucia forex companies?",
            answer: "Yes, forex businesses operating internationally are generally expected to follow Anti-Money Laundering (AML) and Know Your Customer (KYC) procedures to maintain compliance and banking relationships."
        },
        {
            id: 13,
            question: "Can a Saint Lucia forex business operate internationally?",
            answer: "Yes, Saint Lucia companies are commonly structured to provide international services to clients across multiple regions, subject to local laws in the target countries."
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
                    <h2>Saint Lucia Forex Licensing FAQs</h2>
                    <p>
                        Find answers to common questions about setting up and operating a forex business in Saint Lucia.
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
                    <h3>Get Started with Your Saint Lucia License</h3>
                    <p>Our legal experts are ready to assist you with company incorporation and licensing.</p>
                    <button className={styles.ctaButton}>
                        Talk to an Expert <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
