import React from 'react'
import styles from './copyTradingAdvantages.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';

const Image = '/assets/images/img8.png';

const advantages = [
    {
        id: 1,
        title: 'Increase Trader Engagement',
        description: 'Allow users to follow expert traders and stay active on your platform.',
    },
    {
        id: 2,
        title: 'Generate Passive Revenue',
        description: 'Earn through commissions, spreads, and performance fees.',
    },
    {
        id: 3,
        title: 'Easy for Beginners',
        description: 'Even non-experienced traders can participate and earn.',
    },
    {
        id: 4,
        title: 'Fully Automated System',
        description: 'Reduce manual operations with end-to-end automation.',
    },
    {
        id: 5,
        title: 'Scalable Infrastructure',
        description: 'Handle thousands of users and trades without performance issues.',
    },
];
export default function CopyTradingAdvantages() {
    return (
        <div className='container-lg'>
            <div className={styles.advantages}>
                <div className='container'>
                    <div className={styles.centerAlignment}>
                        <CommonButton text="RejoiceFX Copy Trading Platform" />
                    </div>
                    <h2>
                        Advantages of RejoiceFX Copy Trading Platform
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
