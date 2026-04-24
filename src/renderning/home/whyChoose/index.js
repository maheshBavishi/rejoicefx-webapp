import React from 'react';
import styles from './whyChoose.module.scss';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <img src="/assets/icons/point-1.svg" alt="Why Choose RejoiceFX" />,
        title: 'Why Choose RejoiceFX',
        description: 'RejoiceFX empowers forex brokers and traders with an all-in-one ecosystem combining advanced technology, automation, and expert support to launch, manage, and scale brokerage businesses without complexity.'
    },
    {
        icon: <img src="/assets/icons/point-2.svg" alt="Complete Brokerage Solution" />,
        title: 'Complete Brokerage Solution',
        description: 'Launch your forex business from scratch with everything in one place-company formation, licensing, CRM, trading platforms, and liquidity-all seamlessly integrated.'
    },
    {
        icon: <img src="/assets/icons/point-3.svg" alt="AI-Powered Automation" />,
        title: 'AI-Powered Automation',
        description: 'Automate trading strategies, operations, and workflows with intelligent systems that improve efficiency, reduce manual work, and enhance decision-making.'
    },
    {
        icon: <img src="/assets/icons/point-4.svg" alt="Customizable & Scalable Infrastructure" />,
        title: 'Customizable & Scalable Infrastructure',
        description: 'Easily customize features based on your business model and scale effortlessly as your brokerage grows-without rebuilding your system.'
    },
    {
        icon: <img src="/assets/icons/point-5.svg" alt="Advanced CRM & Trader's Room" />,
        title: "Advanced CRM & Trader's Room",
        description: 'Manage clients, accounts, transactions, and reports from a powerful Forex CRM designed specifically for brokers to streamline operations and boost productivity.'
    }
];

const stats = [
    { label: "Platform Integration", value: "100+" },
    { label: "Monthly Settlements", value: "$4M+" },
    { label: "Technical Support", value: "24/7" },
    { label: "Global Clients", value: "50+" }
];

export default function WhyChoose() {
    return (
        <section className={styles.whyChoose}>
            <div className="container">
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Why Choose RejoiceFX
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        RejoiceFX empowers forex brokers and traders with an all-in-one ecosystem combining advanced technology, automation, and expert support to launch, manage, and scale brokerage businesses without complexity.
                    </motion.p>
                </div>

                <div className={styles.contentLayout}>
                    <div className={styles.leftStack}>
                        <div className={styles.leftCol}>
                            <div className={styles.infographicWrapper}>
                                <img
                                    className={styles.wheelImage}
                                    src="/assets/images/why-choose-wheel.png"
                                    alt="Why choose wheel"
                                />
                            </div>
                        </div>

                        <div className={styles.statsRow}>
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.statItem} ${index === stats.length - 1 ? styles.lastStat : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                                >
                                    <span className={styles.statValue}>{stat.value}</span>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.rightCol}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={styles.featureItem}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.iconBox}>
                                    {feature.icon}
                                </div>
                                <div className={styles.featureText}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
