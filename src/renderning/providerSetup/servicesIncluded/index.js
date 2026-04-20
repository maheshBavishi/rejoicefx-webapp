import React from 'react'
import styles from './servicesIncluded.module.scss';
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
        title: 'LP Selection Assistance',
        description: null,
        list: [
            'Choose best LP based on your business model',
            'Cost vs spread optimization',
            'Multi-LP setup options',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Integration Setup',
        description: null,
        list: [
            'Bridge configuration',
            'MT4/MT5 connectivity',
            'Execution optimization',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Liquidity Management',
        description: null,
        list: [
            'Spread monitoring',
            'Execution speed optimization',
            'Multi-asset support',
        ],
    },

];
export default function ServicesIncluded() {
    return (
        <div className={styles.whatWeOffer}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Services Included" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Comprehensive Liquidity Solutions for Forex Brokers
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
