import React from 'react';
import styles from './benefitsSection.module.scss';
import CommonButton from '@/components/commonButton';

const benefits = [
    'Deliver professional trading experiences',
    'Increase trader engagement',
    'Improve client retention',
    'Build stronger brand identity',
    'Launch faster with white-label infrastructure',
    'Support global traders across devices',
    'Manage operations from one unified platform',
];

const CheckIcon = () => (
    <svg viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
);

export default function BenefitsSection() {
    return (
        <div className="container-lg">
            <div className={styles.benefitsSection}>
                <div className="container">
                    <div className={styles.twoColLayout}>
                        <div className={styles.leftCol}>
                            <div className={styles.center}>
                                <CommonButton text="Platform Benefits" />
                            </div>
                            <h2>Benefits of PowerGen Trading Platform</h2>
                            <p>
                                Everything your brokerage needs to deliver world-class trading experiences, scale operations, and grow your client base efficiently.
                            </p>
                        </div>
                        <div className={styles.rightCol}>
                            <div className={styles.benefitList}>
                                {benefits.map((benefit, idx) => (
                                    <div className={styles.benefitItem} key={idx}>
                                        <div className={styles.checkIcon}>
                                            <CheckIcon />
                                        </div>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
