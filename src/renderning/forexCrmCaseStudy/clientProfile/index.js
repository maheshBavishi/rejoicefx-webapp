import React from 'react';
import styles from './clientProfile.module.scss';

export default function ClientProfile() {
    const profiles = [
        {
            label: 'Industry',
            title: 'Forex Brokerage & Financial Services',
            tags: [],
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
            ),
        },
        {
            label: 'Business Size',
            title: 'Mid-Sized International Broker',
            tags: [],
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
            ),
        },
        {
            label: 'Target Markets',
            title: 'Global Multi-Region',
            tags: ['Asia', 'Europe', 'Middle East', 'Africa'],
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            ),
        },
        {
            label: 'Trading Platforms',
            title: 'MetaTrader Suite',
            tags: ['MT4', 'MT5'],
            icon: (
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                </svg>
            ),
        },
    ];

    return (
        <div className={styles.clientProfileSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.badge}>
                            <span></span>
                            Client Overview
                        </div>
                        <h2>Client Profile</h2>
                        <p>A rapidly growing forex brokerage operating across multiple regions with ambitious expansion plans.</p>
                    </div>
                    <div className={styles.profileGrid}>
                        {profiles.map((item, idx) => (
                            <div className={styles.profileCard} key={idx}>
                                <div className={styles.cardIcon}>{item.icon}</div>
                                <span className={styles.cardLabel}>{item.label}</span>
                                <h3>{item.title}</h3>
                                {item.tags.length > 0 && (
                                    <div className={styles.tags}>
                                        {item.tags.map((tag, i) => (
                                            <span className={styles.tag} key={i}>{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
