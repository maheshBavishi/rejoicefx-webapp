import React from 'react';
import styles from './resultsAchieved.module.scss';
import CommonButton from '@/components/commonButton';

const results = [
    {
        metric: '65%',
        title: 'Faster Client Onboarding',
        description: 'Automated KYC and account creation significantly reduced onboarding time.',
    },
    {
        metric: '40%',
        title: 'Increase in Lead Conversion',
        description: 'Sales teams gained better visibility into lead behavior and pipeline activities.',
    },
    {
        metric: '70%',
        title: 'Reduction in Manual Operations',
        description: 'Automation eliminated repetitive administrative tasks across the board.',
    },
    {
        metric: '3X',
        title: 'Growth in IB Network',
        description: 'The new affiliate management system attracted and retained more introducing brokers.',
    },
    {
        metric: '99.9%',
        title: 'Platform Uptime',
        description: 'Cloud infrastructure ensured uninterrupted service availability.',
    },
    {
        metric: '50K+',
        title: 'Active Trader Capacity',
        description: 'The platform was built to support future business expansion at scale.',
    },
];

export default function ResultsAchieved() {
    return (
        <div className={styles.resultsSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.innerWrap}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.center}>
                                <CommonButton text="Impact Delivered" />
                            </div>
                            <h2>Results Achieved</h2>
                            <p>
                                Measurable outcomes that transformed how the brokerage operates and competes in global markets.
                            </p>
                        </div>
                        <div className={styles.resultsGrid}>
                            {results.map((result, idx) => (
                                <div className={styles.resultCard} key={idx}>
                                    <div className={styles.metric}>{result.metric}</div>
                                    <h3>{result.title}</h3>
                                    <p>{result.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
