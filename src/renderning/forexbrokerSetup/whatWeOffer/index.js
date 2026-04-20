import React from 'react'
import styles from './whatWeOffer.module.scss';
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
        title: 'Forex License Assistance',
        description: null,
        list: [
            'Guidance for global jurisdictions',
            'Documentation & compliance support',
            'Fast-track licensing process',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Forex CRM Setup',
        description: null,
        list: [
            'Full CRM installation & customization',
            'Client onboarding & KYC automation',
            'Back-office management',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'MT4 / MT5 Setup',
        description: null,
        list: [
            'White-label solutions',
            'Server configuration',
            'Platform branding',
        ],
    },
    {
        id: 4,
        icon: Icon4,
        title: 'Bridge & Connectivity',
        description: null,
        list: [
            'Bridge integration with liquidity providers',
            'Trade execution optimization',
            'Low latency infrastructure',
        ],
    },
    {
        id: 5,
        icon: Icon5,
        title: 'Liquidity Provider Setup',
        description: null,
        list: [
            'Access to Tier-1 LPs',
            'Multi-asset liquidity (Forex, Crypto, Metals)',
            'Spread optimization',
        ],
    },
    {
        id: 6,
        icon: Icon6,
        title: 'Risk Management System (RMS)',
        description: null,
        list: [
            'Real-time risk monitoring',
            'Exposure management',
            'Profit optimization strategies',
        ],
    },

];
export default function WhatWeOffer() {
    return (
        <div className={styles.whatWeOffer}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="What We Offer" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Start Your Forex Brokerage Journey with RejoiceFx
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
