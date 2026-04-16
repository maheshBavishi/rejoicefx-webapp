import React from 'react'
import styles from './copyTradingwhyChoose.module.scss';
import CommonButton from '@/components/commonButton';
const Icon09 = '/assets/icons/9.svg'
const Icon010 = '/assets/icons/10.svg'
const Icon011 = '/assets/icons/11.svg'
const Icon012 = '/assets/icons/12.svg'

const reasons = [
    {
        icon: Icon09,
        id: 1,
        title: 'Built for Forex & Fintech Businesses',
        description: 'Our solutions are designed specifically for brokers, prop firms, and trading platforms.',
    },
    {
        icon: Icon010,
        id: 2,
        title: 'Customizable & White-Label Ready',
        description: 'Brand the platform as your own and customize features based on your business model.',
    },
    {
        icon: Icon011,
        id: 3,
        title: 'Growth-Focused Technology',
        description: 'Increase client retention, deposits, and trading volume.',
    },
    {
        icon: Icon012,
        id: 4,
        title: 'Dedicated Support',
        description: '24/7 technical and operational assistance.',
    },
];
export default function CopyTradingWhyChoose() {
    return (
        <div className={styles.whyChooseRejoicefx}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Why Choose RejoiceFX?" />
                </div>
                <h2>Why Choose RejoiceFX?</h2>
                <div className={styles.grid}>
                    {reasons.map((reason) => (
                        <div className={styles.card} key={reason.id}>
                            <img src={reason.icon} alt={reason.icon} />
                            <h3>
                                {reason.title}
                            </h3>
                            <p>
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
