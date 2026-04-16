import React from 'react'
import styles from './mamPammSocialKeyFeatures.module.scss';
import CommonButton from '@/components/commonButton';

const Icon1 = '/assets/icons/1.svg';
const Icon2 = '/assets/icons/2.svg';
const Icon3 = '/assets/icons/3.svg';
const Icon4 = '/assets/icons/4.svg';
const Icon5 = '/assets/icons/5.svg';
const Icon6 = '/assets/icons/6.svg';
const Icon7 = '/assets/icons/7.svg';

const features = [
    {
        id: 1,
        icon: Icon1,
        title: 'Multi-Account Management (MAM)',
        description: null,
        list: [
            'Execute trades across multiple accounts simultaneously',
            'Centralized master account control',
            'Real-time allocation and execution',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Percentage Allocation Management Module (PAMM)',
        description: null,
        list: [
            'Allocate trades based on investor equity',
            'Automated profit/loss distribution',
            'Transparent fund performance tracking',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Flexible Allocation Methods',
        description: null,
        list: [
            'Lot-based allocation',
            'Equity-based allocation',
            'Percentage allocation',
            'Balance-based allocation',
        ],
    },
    {
        id: 4,
        icon: Icon4,
        title: 'Real-Time Trade Execution',
        description: null,
        list: [
            'Instant trade replication across accounts',
            'High-speed execution with minimal latency',
            'MT4 & MT5 compatibility',
        ],
    },
    {
        id: 5,
        icon: Icon5,
        title: 'Performance & Reporting Dashboard',
        description: null,
        list: [
            'Real-time analytics and reporting',
            'Investor-level performance tracking',
            'Detailed transaction history',
        ],
    },
    {
        id: 6,
        icon: Icon6,
        title: 'Risk Management Controls',
        description: null,
        list: [
            'Set drawdown limits',
            'Exposure management',
            'Stop-out protection',
        ],
    },
    {
        id: 7,
        icon: Icon7,
        title: 'Automated Fee & Commission Management',
        description: null,
        list: [
            'Performance fees',
            'Management fees',
            'Custom fee structures',
        ],
    },
    {
        id: 8,
        icon: Icon1,
        title: 'Multi-Level Access Control',
        description: null,
        list: [
            'Admin, Manager, Investor roles',
            'Controlled access and permissions',
            'Full operational visibility',
        ],
    },
];

export default function MamPammSocialKeyFeatures() {
    return (
        <div className={styles.keyFeatures}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="key Features" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Powerful Solutions for MAM, PAMM & Social Trading
                    </h2>
                </div>
                <div className={styles.grid}>
                    {features.map((feature) => (
                        <div className={styles.items} key={feature.id}>
                            <img src={feature.icon} alt={feature.title} />
                            <h3>{feature.title}</h3>
                            {feature.description && (
                                <p>{feature.description}</p>
                            )}
                            {feature.list && (
                                <ul>
                                    {feature.list.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
