import React from 'react';
import styles from './theChallenge.module.scss';

const challenges = [
    'Manual lead management processes',
    'Delayed KYC verification',
    'Poor affiliate and IB tracking',
    'Multiple disconnected systems',
    'High operational costs',
    'Limited reporting and analytics',
    'Low conversion rates from leads to funded traders',
    'Lack of mobile accessibility',
];

const WarningIcon = () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
);

export default function TheChallenge() {
    return (
        <div className={styles.challengeSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.innerWrap}>
                        <div className={styles.twoColLayout}>
                            <div className={styles.leftCol}>
                                <div className={styles.badge}>
                                    <span></span>
                                    The Problem
                                </div>
                                <h2>The Challenge</h2>
                                <div className={styles.divider}></div>
                                <p>
                                    As the broker expanded into new markets, operational inefficiencies became
                                    critical obstacles to growth. Disconnected systems and manual processes were
                                    costing time, money, and client opportunities.
                                </p>
                            </div>
                            <div className={styles.rightCol}>
                                <div className={styles.challengeList}>
                                    {challenges.map((challenge, idx) => (
                                        <div className={styles.challengeItem} key={idx}>
                                            <div className={styles.challengeIcon}>
                                                <WarningIcon />
                                            </div>
                                            <p>{challenge}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
