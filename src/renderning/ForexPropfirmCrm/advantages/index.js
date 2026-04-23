import React from 'react'
import styles from './advantages.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';

const Image = '/assets/images/img8.png';

const advantages = [
    {
        id: 1,
        title: 'Fully Customizable Platform',
        description: 'Tailor every aspect of your prop firm—from challenge models to trader dashboards—based on your business needs.',
    },
    {
        id: 2,
        title: 'Faster Time to Market',
        description: 'Launch your prop firm within days using our ready-to-deploy infrastructure.',
    },
    {
        id: 3,
        title: 'Scalable Technology',
        description: 'Our CRM grows with your business, supporting thousands of traders without performance issues.',
    },
    {
        id: 4,
        title: 'Secure & Reliable',
        description: 'Enterprise-grade security ensures data protection, secure transactions, and platform stability.',
    },
    {
        id: 5,
        title: 'Cost-Effective Solution',
        description: 'Reduce operational costs with automation and eliminate the need for multiple systems.',
    },
];

export default function Advantages() {
    return (
        <div className='container-lg'>
            <div className={styles.advantages}>
                <div className='container'>
                    <div className={styles.centerAlignment}>
                        <CommonButton text="Advantages of GENXEL" />
                    </div>
                    <h2>
                        Advantages of GENXEL Prop Firm CRM
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
