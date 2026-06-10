import React from 'react';
import styles from './whyChoosePowergen.module.scss';
import CommonButton from '@/components/commonButton';

const features = [
    {
        title: 'Fully Branded White Label Solution',
        description: 'Launch under your own brand, domain, logo, and custom design with complete ownership.',
        icon: <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>,
    },
    {
        title: 'Ultra-Fast Trade Execution',
        description: 'Optimized infrastructure for low-latency order processing and real-time streaming.',
        icon: <svg viewBox="0 0 24 24"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 16.26 22 13.28 22 10c0-5.18-3.94-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.28 2.09 6.26 5.22 7.78L6 21l5 3v-5l-2.28 2.28C6.81 20 5 17.21 5 14c0-4.08 3.05-7.44 7-7.93V2.05z" /></svg>,
    },
    {
        title: 'Multi-Platform Trading',
        description: 'Support for Web, Desktop, Android, and iOS applications from a single ecosystem.',
        icon: <svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" /></svg>,
    },
    {
        title: 'Real-Time Market Data',
        description: 'Live quotes, streaming charts, and instant market updates for seamless trading.',
        icon: <svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" /></svg>,
    },
    {
        title: 'Advanced Security',
        description: 'Encrypted infrastructure with secure authentication and account protection.',
        icon: <svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" /></svg>,
    },
    {
        title: 'Scalable Infrastructure',
        description: 'Built to support growing brokerages and high trading volumes without limits.',
        icon: <svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" /></svg>,
    },
];

export default function WhyChoosePowergen() {
    return (
        <div className="container-lg">
            <div className={styles.whyChooseSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text="Why PowerGen" />
                        </div>
                        <h2>Why Choose PowerGen Trading Platform?</h2>
                        <p>Enterprise-level trading infrastructure with everything brokers need to succeed.</p>
                    </div>
                    <div className={styles.featuresGrid}>
                        {features.map((feat, idx) => (
                            <div className={styles.featureCard} key={idx}>
                                <div className={styles.iconWrap}>{feat.icon}</div>
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
