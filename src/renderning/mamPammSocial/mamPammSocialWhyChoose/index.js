import React from 'react'
import styles from './mamPammSocialWhyChoose.module.scss';
import CommonButton from '@/components/commonButton';
const Icon09 = '/assets/icons/9.svg'
const Icon010 = '/assets/icons/10.svg'
const Icon011 = '/assets/icons/11.svg'
const Icon012 = '/assets/icons/12.svg'

const reasons = [
    {
        icon: Icon09,
        id: 1,
        title: 'Forex Industry Expertise',
        description: 'Specialized solutions tailored for Forex brokers and asset managers.',
    },
    {
        icon: Icon010,
        id: 2,
        title: 'Fully Customizable Platform',
        description: 'Adapt allocation methods, fee structures, and dashboards to your needs.',
    },
    {
        icon: Icon011,
        id: 3,
        title: 'Seamless Integration',
        description: 'Works flawlessly with MT4, MT5, CRM systems, and liquidity providers.',
    },
    {
        icon: Icon012,
        id: 4,
        title: 'Business Growth Focus',
        description: 'Increase AUM (Assets Under Management) and client retention.',
    },
    {
        icon: Icon09,
        id: 5,
        title: '24/7 Dedicated Support',
        description: 'Expert assistance whenever you need it.',
    },
];

export default function MamPammSocialWhyChoose() {
    return (
        <div className={styles.whyChooseRejoicefx}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Why Choose Us?" />
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
