import React from 'react'
import styles from './providerSetupWhychoose.module.scss';
import SqureIcon from '@/components/icons/squreIcon';
import CommonButton from '@/components/commonButton';
const whoInfo = [
    { id: 1, title: 'Access to top-tier LPs' },
    { id: 2, title: 'Fast integration' },
    { id: 3, title: <>Reliable execution</> },
    { id: 4, title: <>Expert guidance</> },
];
export default function ProviderSetupWhychoose() {
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
