import React from 'react'
import styles from './setupTrainingWhatWeOffer.module.scss';
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
        title: 'Full MT4 / MT5 Setup',
        description: null,
        list: [
            'Server installation',
            'White-label configuration',
            'Branding customization',
        ],
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Technical Support (24/7)',
        description: null,
        list: [
            'Dedicated support team',
            'Server monitoring',
            'Issue resolution',
        ],
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Training & Guidance',
        description: null,
        list: [
            'Admin panel training',
            'Dealer training',
            'Risk management training',
        ],
    },
    {
        id: 4,
        icon: Icon4,
        title: 'Maintenance & Updates',
        description: null,
        list: [
            'Regular updates',
            'Performance optimization',
            'Backup & security',
        ],
    },

];
export default function SetupTrainingWhatWeOffer() {
    return (
        <div className={styles.setupTrainingWhatWeOffer}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Services Included" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Everything You Need to Launch Your Brokerage
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
