import React from 'react';
import styles from './tradingEcosystem.module.scss';
import CommonButton from '@/components/commonButton';

const platforms = [
    {
        title: 'Web Trading Terminal',
        description: 'Browser-based trading platform with responsive UI and advanced trading functionality.',
        features: ['No installation required', 'Cross-browser compatibility', 'One-click trading', 'Advanced charting tools', 'Real-time market watch', 'Multi-language support'],
        icon: <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z" /></svg>,
    },
    {
        title: 'Desktop Trading Platform',
        description: 'Professional desktop terminal designed for active and institutional traders.',
        features: ['Multi-monitor support', 'Advanced indicators', 'Fast order execution', 'Custom trading layouts', 'Professional trading tools', 'Strategy management'],
        icon: <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zm-8-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8-3H4V6h16v8z" /></svg>,
    },
    {
        title: 'Mobile Trading Applications',
        description: 'Trade anytime and anywhere with secure Android and iOS mobile applications.',
        features: ['Push notifications', 'Biometric authentication', 'Live account monitoring', 'Instant order placement', 'Wallet management', 'Real-time charts'],
        icon: <svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" /></svg>,
    },
];

export default function TradingEcosystem() {
    return (
        <div className={styles.tradingEcosystemSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text="One Ecosystem" />
                        </div>
                        <h2>One Trading Ecosystem Across Every Device</h2>
                        <p>Web, Desktop, and Mobile — all powered by the same robust backend infrastructure.</p>
                    </div>
                    <div className={styles.platformsGrid}>
                        {platforms.map((platform, idx) => (
                            <div className={styles.platformCard} key={idx}>
                                <div className={styles.platformIcon}>{platform.icon}</div>
                                <h3>{platform.title}</h3>
                                <p className={styles.platformDesc}>{platform.description}</p>
                                <span className={styles.featuresLabel}>Features</span>
                                <div className={styles.featureList}>
                                    {platform.features.map((feat, i) => (
                                        <div className={styles.featureItem} key={i}>{feat}</div>
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
