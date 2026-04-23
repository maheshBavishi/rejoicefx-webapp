import React from 'react'
import styles from './whyChooseRejoicefx.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';
const whoInfo = [
    { id: 1, title: 'End-to-end brokerage launch' },
    { id: 2, title: 'Faster go-to-market (within days)' },
    { id: 3, title: <>Cost-efficient <br />  setup</> },
    { id: 4, title: <>Expert team <br />  support</> },
    { id: 5, title: <>Scalable  <br />  infrastructure</> },
];
export default function WhyChooseRejoicefx() {
    return (
        <div className=''>
            <div className={styles.whyChooseRejoicefx}>
                <div className='container'>
                    <div className={styles.cemteralignment}>
                        <CommonButton text="Why Choose GENXEL?" />
                    </div>
                    <h2>
                        Why Choose GENXEL?
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
