import React from 'react'
import styles from './mt4Roadmap.module.scss';
import { motion } from 'framer-motion';

const roadmapData = [
    {
        phase: '01 — Phase 1',
        title: 'Pre-Installation & Infrastructure Setup',
        timeline: 'Timeline: Day 1–2',
        steps: [
            { name: 'Infrastructure Planning', desc: 'We analyze your brokerage requirements, target markets, and trading volume to design a scalable MT5 architecture.' },
            { name: 'Main Trade Server Deployment', desc: 'Full installation and configuration of the MT5 Trade Server with performance optimization and stability testing.' },
            { name: 'History Server Setup', desc: 'Deploy a dedicated history server to ensure fast chart loading and seamless historical data access for traders.' },
            { name: 'Access Server & Security Layer', desc: 'Setup of access servers, proxy routing, and Anti-DDoS protection to ensure secure and uninterrupted connectivity.' },
        ]
    },
    {
        phase: '02 — Phase 2',
        title: 'Configuration & Liquidity Integration',
        timeline: 'Timeline: Day 2–3',
        steps: [
            { name: 'Trading Environment Configuration', desc: 'Setup of trading conditions including spreads, leverage, commissions, margin rules, and symbol configuration.' },
            { name: 'Advanced Platform Configuration', desc: 'Configure managers, user groups, permissions, alerts, and SMTP for complete administrative control.' },
            { name: 'Liquidity Bridge Integration', desc: 'Connect your platform with top-tier liquidity providers via secure bridges for deep liquidity and tight spreads.' },
            { name: 'Plugin & Risk Tools Setup', desc: 'Install and configure risk management tools, dealer plugins, and reporting systems for full operational control.' },
        ]
    },
    {
        phase: '03 — Phase 3',
        title: 'Redundancy, Backup & Failover',
        timeline: 'Timeline: Day 3–4',
        steps: [
            { name: 'Historical Data Deployment', desc: 'Integrate and optimize historical data across all instruments for accurate charts and analytics.' },
            { name: 'Backup Server Infrastructure', desc: 'Setup backup trade and history servers to ensure zero downtime and business continuity.' },
            { name: 'System Synchronization', desc: 'Synchronize all servers and components for seamless failover and uninterrupted trading experience.' },
            { name: 'Failover Testing & Validation', desc: 'Conduct real-time failover testing to ensure automatic system recovery in case of server failure.' },
        ]
    },
    {
        phase: '04 — Phase 4',
        title: 'Go-Live & Ongoing Support',
        timeline: 'Timeline: Day 5+',
        steps: [
            { name: 'Live Deployment', desc: 'Final system validation and transition to live trading environment with full monitoring.' },
            { name: '24/7 Technical Support', desc: 'Round-the-clock monitoring, maintenance, and issue resolution to ensure platform stability.' },
            { name: 'Performance Optimization', desc: 'Continuous optimization of execution speed, latency, and server performance.' },
            { name: 'Scaling & Upgrades', desc: 'Upgrade infrastructure, add liquidity providers, and scale your brokerage as your business grows.' },
        ]
    }
];

const keyBenefits = [
    { title: 'Enterprise-Grade Infrastructure', desc: 'Built for security, stability, and high performance.' },
    { title: 'Low Latency Execution', desc: 'Optimized servers and liquidity for ultra-fast trade execution.' },
    { title: 'Secure & Compliant', desc: 'Industry-standard security with regular updates and backups.' },
    { title: 'Expert Team Support', desc: 'Experienced MT5 professionals with dedicated support.' },
    { title: 'Scalable for Growth', desc: 'Flexible solutions that scale with your business needs.' },
];

export default function Mt4Roadmap() {
    return (
        <div className={styles.mt4Roadmap}>
            <div className='container'>
                <div className={styles.header}>
                    <h2 className={styles.title}>MT5 Setup & Support Roadmap</h2>
                    <p className={styles.subtitle}>
                        A fully managed, step-by-step deployment of your MetaTrader 5 infrastructure — from initial setup to live trading and ongoing optimization.
                    </p>
                </div>

                <div className={styles.roadmapGrid}>
                    <div className={styles.timelineTrack}></div>
                    {roadmapData.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.phaseItem}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className={styles.phaseIndicator}>
                                <div className={styles.dot}></div>
                            </div>
                            <div className={styles.phaseContent}>
                                <div className={styles.phaseHeader}>
                                    <span className={styles.phaseTag}>{item.phase}</span>
                                    <h3 className={styles.phaseTitle}>{item.title}</h3>
                                    <span className={styles.timeline}>{item.timeline}</span>
                                </div>
                                <div className={styles.stepsGrid}>
                                    {item.steps.map((step, idx) => (
                                        <div key={idx} className={styles.stepCard}>
                                            <h4>{step.name}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.benefitsSection}>
                    <h3 className={styles.benefitsTitle}>Key Benefits</h3>
                    <div className={styles.benefitsGrid}>
                        {keyBenefits.map((benefit, index) => (
                            <motion.div 
                                key={index} 
                                className={styles.benefitCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.checkIcon}>✓</div>
                                <div className={styles.benefitText}>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

