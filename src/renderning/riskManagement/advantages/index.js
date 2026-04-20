import React from 'react'
import styles from './advantages.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';
const whoInfo = [
    { id: 1, title: 'Better control over trading risk' },
    { id: 2, title: 'Increased profitability' },
    { id: 3, title: <>Data-driven decision making</> },
    { id: 4, title: <>Reduced operational stress</> },
];
export default function Advantages() {
    return (
        <div className=''>
            <div className={styles.whyChooseRejoicefx}>
                <div className='container'>
                    <div className={styles.cemteralignment}>
                        <CommonButton text="Advantages" />
                    </div>
                    <h2>
                        Advantages
                    </h2>
                    <div className={styles.twoCol}>
                        {whoInfo.map((item) => (
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
        </div>
    )
}
