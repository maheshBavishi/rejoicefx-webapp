import React from 'react';
import styles from './ourSolution.module.scss';
import CommonButton from '@/components/commonButton';

const modules = [
    {
        title: 'Forex CRM',
        features: ['Lead Management', 'Client Management', 'KYC Verification', 'Customer Segmentation', 'Compliance Monitoring', 'Sales Pipeline Tracking'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" />
            </svg>
        ),
    },
    {
        title: 'Trader Room',
        features: ['Account Registration', 'Live & Demo Account Creation', 'Internal Wallet System', 'Fund Transfers', 'Deposit & Withdrawal Management', 'Trading Account Management'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
            </svg>
        ),
    },
    {
        title: 'Introducing Broker (IB) Portal',
        features: ['Multi-Level Affiliate System', 'Referral Tracking', 'Commission Management', 'Revenue Sharing', 'Partner Reporting Dashboard'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        ),
    },
    {
        title: 'Mobile Application',
        features: ['Client Dashboard', 'Wallet Management', 'Trading Account Overview', 'Real-Time Notifications', 'Support Ticket Management'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
            </svg>
        ),
    },
    {
        title: 'Reporting & Analytics',
        features: ['Revenue Reports', 'Trading Volume Reports', 'Client Acquisition Reports', 'Sales Performance Dashboard', 'Conversion Analytics'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
            </svg>
        ),
    },
    {
        title: 'Third-Party Integrations',
        features: ['MT4 Integration', 'MT5 Integration', 'Payment Gateway Integration', 'SMS Gateway', 'Email Automation', 'CRM Automation Tools'],
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
        ),
    },
];

export default function OurSolution() {
    return (
        <div className={styles.ourSolutionSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text=" Our Approach" />
                        </div>
                        <h2>Our Solution</h2>
                        <p>
                            Genxel Technology developed a comprehensive Forex CRM ecosystem tailored to the broker's requirements.
                        </p>
                    </div>
                    <div className={styles.modulesGrid}>
                        {modules.map((mod, idx) => (
                            <div className={styles.moduleCard} key={idx}>
                                <div className={styles.moduleIconWrap}>{mod.icon}</div>
                                <h3>{mod.title}</h3>
                                <div className={styles.featureList}>
                                    {mod.features.map((feat, i) => (
                                        <div className={styles.featureItem} key={i}>
                                            <div className={styles.dot}></div>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
