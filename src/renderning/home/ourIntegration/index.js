import React from 'react';
import styles from './ourIntegration.module.scss';
import { motion } from 'framer-motion';
const Logo1 = '/assets/icons/log1.svg';
const Logo2 = '/assets/icons/logo2.svg';
const Logo3 = '/assets/icons/logo3.svg';
const Logo4 = '/assets/icons/logo4.svg';
const Logo5 = '/assets/icons/logo5.svg';
const Logo6 = '/assets/icons/logo6.svg';
const Logo7 = '/assets/icons/logo7.svg';
const Logo8 = '/assets/icons/logo8.svg';
const Logo9 = '/assets/icons/logo9.svg';
const Logo10 = '/assets/icons/logo10.svg';
const Logo11 = '/assets/icons/logo11.svg';
const Logo12 = '/assets/icons/logo12.svg';
const Logo13 = '/assets/icons/logo13.svg';

const Logo14 = '/assets/images/finalto-logo.svg';
const Logo15 = '/assets/images/lmax-logo.svg';
const Logo16 = '/assets/images/blueberry-logo.svg';
const Logo17 = '/assets/images/newera-logo.svg';
const Logo18 = '/assets/images/scope-markets-logo.svg';
const Logo19 = '/assets/images/amana-capital-logo.svg';
const Logo = "/assets/icons/logo1.png";

const integrations = [
    {
        id: 'crm',
        title: 'CRM',
        items: [Logo1],
        className: styles.crmCard,
        hasBadge: false
    },
    {
        id: 'trading',
        title: 'TRADING PLATFORM',
        items: [Logo2, Logo3, Logo4, Logo5],
        className: styles.tradingCard,
        hasBadge: true,
    },
    {
        id: 'psp',
        title: 'PSP',
        items: [Logo10, Logo11, Logo12, Logo13],
        className: styles.pspCard,
        hasBadge: true,
    },
    {
        id: 'bridge',
        title: 'BRIDGE & PLUGIN',
        items: [Logo6, Logo7, Logo8, Logo9],
        className: styles.bridgeCard,
        hasBadge: true,
    },
    {
        id: 'liquidity',
        title: 'LIQUIDITY PROVIDER',
        items: [Logo14, Logo15, Logo16, Logo17, Logo18, Logo19],
        className: styles.liquidityCard,
        hasBadge: true,
    }
];

export default function OurIntegration() {
    return (
        <div className={styles.ourIntegration}>
            <div className='container'>
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Our Integration
                </motion.h2>

                {/* Desktop Diagram */}
                <div className={styles.diagramWrapper}>
                    <svg className={styles.connections} viewBox="0 0 1100 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
                            </marker>
                        </defs>
                        <line x1="550" y1="130" x2="550" y2="265" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                        <line x1="340" y1="230" x2="476" y2="308" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                        <line x1="760" y1="230" x2="624" y2="308" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                        <line x1="340" y1="570" x2="491" y2="411" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                        <line x1="660" y1="570" x2="588" y2="426" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#arrow)" />
                    </svg>

                    <motion.div
                        className={styles.centerNode}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.centerCircle}>
                            <img src={Logo} alt='Logo' />
                        </div>
                    </motion.div>

                    {integrations.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`${styles.card} ${card.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                        >
                            <h3>{card.title}</h3>
                            <div className={styles.grid}>
                                {card.items.map((item, i) => (
                                    <div key={i} className={styles.item}>
                                        <img src={item} alt="integration logo" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Layout */}
                <div className={styles.mobileLayout}>
                    <div className={styles.centerNodeMobile}>
                        <div className={styles.centerCircle}>
                            <span>GENXEL</span>
                        </div>
                    </div>
                    {integrations.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`${styles.card} ${card.className}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h3>{card.title}</h3>
                            <div className={styles.grid}>
                                {card.items.map((item, i) => (
                                    <div key={i} className={styles.item}>
                                        <img src={item} alt="integration logo" />
                                    </div>
                                ))}
                            </div>
                            {card.hasBadge && (
                                <div className={styles.badge}>{card.extra}</div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
