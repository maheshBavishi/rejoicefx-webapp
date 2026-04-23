import React from 'react'
import styles from './whyChooseRejoicefx.module.scss';
import CommonButton from '@/components/commonButton';
const Icon09 = '/assets/icons/9.svg'
const Icon010 = '/assets/icons/10.svg'
const Icon011 = '/assets/icons/11.svg'
const Icon012 = '/assets/icons/12.svg'

const reasons = [
    {
        icon: Icon09,
        id: 1,
        title: 'Industry-Focused Expertise',
        description: 'We specialize in Forex and prop trading technologies, ensuring you get solutions built specifically for your business.',
    },
    {
        icon: Icon010,
        id: 2,
        title: 'End-to-End Services',
        description: 'From CRM and trading platform setup to liquidity and licensing—we provide everything under one roof.',
    },
    {
        icon: Icon011,
        title: 'Growth-Oriented Approach',
        description: 'Our solutions are designed not just to run your business, but to help you scale and increase revenue.',
    },
    {
        icon: Icon012,
        id: 4,
        title: 'Dedicated Support Team',
        description: 'Get 24/7 technical and operational support from our experienced team.',
    },
];

export default function WhyChooseRejoicefx() {
    return (
        <div className={styles.whyChooseRejoicefx}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Why Choose GENXEL?" />
                </div>
                <h2>Why Choose GENXEL?</h2>
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
