import React from 'react'
import styles from './copyTradingKeyfeature.module.scss';
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
        title: 'Real-Time Trade Copying',
        description: null,
        list: [
            'Instant trade execution between master and follower accounts',
            'Ultra-low latency synchronization',
            'Supports MT4 & MT5',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Master Trader Management',
        description: null,
        list: [
            'Create and manage professional traders',
            'Performance-based ranking system',
            'Public or private strategy access',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Performance Analytics Dashboard',
        description: null,
        list: [
            'ROI, drawdown, win rate tracking',
            'Transparent trading history',
            'Advanced reporting tools',
        ],
    },
    {
        id: 4,
        icon: Icon4,
        title: 'Flexible Copy Modes',
        description: null,
        list: [
            'Fixed lot copying',
            'Equity-based copying',
            'Proportional copying',
            'Custom risk allocation',
        ],
    },
    {
        id: 5,
        icon: Icon5,
        title: 'Automated Profit Sharing',
        description: null,
        list: [
            'Set performance fees (%)',
            'Automated commission distribution',
            'Multi-level revenue models',
        ],
    },
    {
        id: 6,
        icon: Icon6,
        title: 'Risk Management Tools',
        description: null,
        list: [
            'Max drawdown limits',
            'Stop copying anytime',
            'Trade filters and limits',
        ],
    },
    {
        id: 7,
        icon: Icon7,
        title: 'Multi-Level Admin Panel',
        description: null,
        list: [
            'Broker, manager, and trader roles',
            'Full system control',
            'Real-time monitoring',
        ],
    },
    {
        id: 8,
        icon: Icon1,
        title: 'Seamless Integrations',
        description: null,
        list: [
            'MT4 / MT5',
            'Payment gateways (Crypto & Fiat)',
            'CRM & Back-office systems',
        ],
    },
];
export default function CopyTradingKeyfeature() {
    return (
        <div className={styles.keyFeatures}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="key Features" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Powerful Solutions for Copy Trading Platforms
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

