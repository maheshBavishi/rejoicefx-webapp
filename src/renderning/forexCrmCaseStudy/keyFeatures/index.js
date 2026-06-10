import React from 'react';
import styles from './keyFeatures.module.scss';

const features = [
    {
        title: 'Smart Lead Management',
        description: 'Track every prospect from first interaction to funded trading account with intelligent pipeline automation.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        ),
    },
    {
        title: 'Automated KYC Verification',
        description: 'Accelerate compliance approval while maintaining rigorous security standards and regulatory adherence.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
        ),
    },
    {
        title: 'Advanced IB Management',
        description: 'Manage commissions, referrals, and multi-level partner structures effortlessly with real-time tracking.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
        ),
    },
    {
        title: 'Multi-Wallet System',
        description: 'Securely handle deposits, withdrawals, and internal fund transfers with full audit trails.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
        ),
    },
    {
        title: 'Real-Time Trading Data',
        description: 'Monitor client activity, balances, and trading performance instantly with live dashboard updates.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
            </svg>
        ),
    },
    {
        title: 'Mobile Trading Experience',
        description: 'Allow traders to access their accounts anywhere, anytime with a feature-rich mobile application.',
        icon: (
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
            </svg>
        ),
    },
];

export default function KeyFeatures() {
    return (
            <div className="container-lg">
        <div className={styles.keyFeaturesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>Platform Capabilities</div>
                        <h2>Key Features Showcase</h2>
                        <p>
                            A powerful feature set designed to streamline every aspect of modern forex brokerage operations.
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((feat, idx) => (
                            <div className={styles.featureCard} key={idx}>
                                <div className={styles.featureIconWrap}>{feat.icon}</div>
                                <h3>{feat.title}</h3>
                                <p>{feat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
