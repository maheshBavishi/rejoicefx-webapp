import React from 'react'
import styles from './whyChooseSetupTraining.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIcon from '@/components/icons/squreIcon';

const features = [
    { id: 1, title: <>Experienced MetaTrader <br /> experts</> },
    { id: 2, title: <>24/7  availability</> },
    { id: 3, title: <>Fast issue resolution</> },
    { id: 4, title: <>Reliable infrastructure</> },
];

export default function WhyChooseSetupTraining() {
    return (
        <div className={styles.whyChooseSetupTraining}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Why Choose Us" />
                </div>
                <h2>
                    Why Choose RejoiceFX for Setup & Training?
                </h2>
                <div className={styles.twoCol}>
                    {features.map((item) => (
                        <div className={styles.items} key={item.id}>
                            <SqureIcon />
                            <p>
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
