import React from 'react'
import styles from './mamPammSocialAdvantages.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';

const Image = '/assets/images/img8.png';

const advantages = [
    {
        id: 1,
        title: 'Efficient Fund Management',
        description: 'Manage hundreds of accounts simultaneously with ease.',
    },
    {
        id: 2,
        title: 'Increased Revenue Opportunities',
        description: 'Earn through management fees, performance fees, and commissions.',
    },
    {
        id: 3,
        title: 'Transparent Operations',
        description: 'Provide investors with full visibility into performance and transactions.',
    },
    {
        id: 4,
        title: 'Time-Saving Automation',
        description: 'Reduce manual effort with automated allocation and reporting.',
    },
    {
        id: 5,
        title: 'Scalable Infrastructure',
        description: 'Perfect for growing brokers and fund managers handling large capital.',
    },
];

export default function MamPammSocialAdvantages() {
    return (
        <div className='container-lg'>
            <div className={styles.advantages}>
                <div className='container'>
                    <div className={styles.centerAlignment}>
                        <CommonButton text="Advantages" />
                    </div>
                    <h2>
                        Advantages of GENXEL MAM/PAMM Solutions
                    </h2>
                    <div className={styles.grid}>
                        <div className={styles.items}>
                            <div className={styles.image}>
                                <img src={Image} alt="Advantages" />
                            </div>
                        </div>
                        <div className={styles.items}>
                            {advantages.map((advantage) => (
                                <div className={styles.textgrid} key={advantage.id}>
                                    <SqureIcon />
                                    <div>
                                        <h3>{advantage.title}</h3>
                                        <p>{advantage.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
