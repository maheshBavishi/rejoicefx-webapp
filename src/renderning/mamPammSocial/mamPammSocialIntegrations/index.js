import React from 'react'
import styles from './mamPammSocialIntegrations.module.scss'
import CommonButton from '@/components/commonButton'

const Icon13 = '/assets/icons/13.svg';
const Icon14 = '/assets/icons/14.svg';
const Icon15 = '/assets/icons/15.svg';
const Icon16 = '/assets/icons/16.svg';
const Icon17 = '/assets/icons/17.svg';

const integrationData = [
    {
        id: 1,
        icon: Icon13,
        title: 'MT4 / MT5 Platforms',
    },
    {
        id: 2,
        icon: Icon14,
        title: 'Payment Gateways',
    },
    {
        id: 3,
        icon: Icon15,
        title: 'Email & SMS APIs',
    },
    {
        id: 4,
        icon: Icon16,
        title: 'Liquidity Providers',
    },
    {
        id: 5,
        icon: Icon17,
        title: 'Risk Management Tools',
    },
];

export default function MamPammSocialIntegrations() {
    return (
        <div className={styles.integrations}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Integrations" />
                </div>
                <h2>Seamless Integrations</h2>
                <div className={styles.grid}>
                    {integrationData.map((item) => (
                        <div className={styles.items} key={item.id}>
                            <img src={item.icon} alt={item.title} />
                            <h3>
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
