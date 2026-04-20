import React from 'react'
import styles from './riskManagementOffer.module.scss';
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
        title: 'Real-Time Risk Monitoring',
        description: null,
        list: [
            'Track client trades live',
            'Exposure analysis',
            'Trade pattern insights',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Exposure Management',
        description: null,
        list: [
            'Control over B-book & A-book',
            'Smart hedging strategies',
            'Risk balancing',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Dedicated Risk Manager',
        description: null,
        list: [
            'Expert monitoring team',
            'Strategy recommendations',
            'Profit optimization',
        ],
    },
    {
        id: 4,
        icon: Icon4,
        title: 'Profit Optimization',
        description: null,
        list: [
            'Identify profitable flow',
            'Reduce unnecessary losses',
            'Improve broker margins',
        ],
    },


]
export default function RiskManagementOffer() {
    return (
        <div className={styles.whatWeOffer}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="What We Provide" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Comprehensive RMS Solutions for Forex Brokers
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
