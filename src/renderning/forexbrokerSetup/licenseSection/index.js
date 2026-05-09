import React from 'react'
import styles from './licenseSection.module.scss';
import CommonButton from '@/components/commonButton';
import Link from 'next/link';
import Right from '@/components/icons/right';

const licenseData = [
    {
        title: 'Mauritius Forex License',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        link: '/mauritius-forex-license'
    },
    {
        title: 'Saint Lucia Forex License',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        link: '/vincent-forex-license'
    }
]

export default function LicenseSection() {
    return (
        <div className={styles.licenseSection}>
            <div className='container'>
                <div className={styles.centerAlignment}>
                    <CommonButton text="Forex License Options" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Launch Your Forex Brokerage with the Right License
                    </h2>
                </div>
                <div className={styles.grid}>
                    {licenseData.map((item, index) => (
                        <div className={styles.card} key={index}>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <Link href={item.link} className={styles.solution}>
                                <span>See Solution</span>
                                <Right />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
