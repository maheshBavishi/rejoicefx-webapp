import React from 'react'
import styles from './benefitsSection.module.scss';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'Multi-Asset Trading Infrastructure',
        desc: 'Offer Forex, CFDs, commodities, indices, and stocks from a single platform with seamless execution across global markets.',
        icon: '/assets/icons/global.svg'
    },
    {
        title: 'Advanced Risk Management System',
        desc: 'Control exposure, monitor trades in real-time, and protect your brokerage with automated risk tools, limits, and dealer plugins.',
        icon: '/assets/icons/d1.svg'
    },
    {
        title: 'Liquidity Integration & Bridge Setup',
        desc: 'Connect with top-tier liquidity providers and ensure deep market access with ultra-fast execution and minimal slippage.',
        icon: '/assets/icons/point-1.svg'
    },
    {
        title: 'MT4 & MT5 White Label Setup',
        desc: 'Launch your branded trading platform quickly with complete backend infrastructure, admin panel, and client management system.',
        icon: '/assets/icons/d2.svg'
    },
    {
        title: 'Algorithmic & Copy Trading Support',
        desc: 'Enable automated trading using Expert Advisors (EAs), trading bots, and social/copy trading features to boost client engagement.',
        icon: '/assets/icons/d3.svg'
    },
    {
        title: 'End-to-End Brokerage Setup & Training',
        desc: 'From company formation to server setup, CRM, and compliance — we handle everything so you can focus on growing your business.',
        icon: '/assets/icons/team.svg'
    }
];

const highlights = [
    { label: 'High Performance Servers & VPS', sub: 'Low latency, 99.99% uptime' },
    { label: 'Secure & Compliant', sub: 'PCI DSS, KYC/AML & data protection' },
    { label: 'Dedicated Support', sub: '24/7 expert support from setup to scale' },
    { label: 'Scalable Solutions', sub: 'Built to grow with your brokerage' },
    { label: 'Proven Expertise', sub: 'Trusted by brokers worldwide' }
];

export default function BenefitsSection() {
    return (
        <div className={styles.benefitsSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Features & Benefits</h2>
                    <h3 className={styles.mainHeading}>Complete MT4 & MT5 Brokerage Solutions</h3>
                    <p className={styles.subtitle}>
                        Launch, scale, and optimize your forex brokerage with enterprise-grade MetaTrader infrastructure, liquidity integration, and advanced risk management tools.
                    </p>
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconBox}>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className={styles.cardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.highlightsBox}>
                    <h3 className={styles.highlightsTitle}>Key Highlights</h3>
                    <div className={styles.highlightsGrid}>
                        {highlights.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.highlightItem}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className={styles.bullet}></span>
                                <div className={styles.highlightText}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.subText}>{item.sub}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

