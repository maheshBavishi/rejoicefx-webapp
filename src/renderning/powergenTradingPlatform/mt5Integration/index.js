import React from 'react';
import styles from './mt5Integration.module.scss';
import CommonButton from '@/components/commonButton';

const benefits = [
    'MT5 connectivity',
    'Real-time synchronization',
    'Secure API architecture',
    'Unified account management',
    'Fast deployment',
    'Scalable infrastructure',
];

export default function Mt5Integration() {
    return (
        <div className="container-lg">
            <div className={styles.mt5IntegrationSection}>
                <div className="container">
                    <div className={styles.twoColLayout}>
                        <div className={styles.leftCol}>
                            <div className={styles.center}>
                                <CommonButton text="MT5 Integration" />
                            </div>
                            <h2>Seamless MT5 Integration</h2>
                            <p>
                                PowerGen Trading Platform integrates smoothly with MetaTrader infrastructure to provide a complete trading ecosystem without changing your backend operations.
                            </p>
                            <div className={styles.benefitList}>
                                {benefits.map((item, idx) => (
                                    <div className={styles.benefitItem} key={idx}>
                                        <div className={styles.dot}></div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.rightCol}>
                            <div className={styles.mt5Card}>
                                <div className={styles.mt5Logo}>
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                                    </svg>
                                </div>
                                <h3>MetaTrader 5 (MT5)</h3>
                                <p>Full MT5 backend compatibility with real-time sync, secure API bridge, and unified account management.</p>
                                <div className={styles.divider}></div>
                                <div className={styles.tags}>
                                    <span className={styles.tag}>MT5 Ready</span>
                                    <span className={styles.tag}>Real-Time Sync</span>
                                    <span className={styles.tag}>Secure API</span>
                                    <span className={styles.tag}>White Label</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
