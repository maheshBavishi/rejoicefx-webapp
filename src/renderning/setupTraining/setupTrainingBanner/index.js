import React from 'react'
import styles from './setupTrainingBanner.module.scss';
import CommonButton from '@/components/commonButton';

export default function SetupTrainingBanner() {
    return (
        <div className={styles.setupTrainingBanner}>
            <div className="container">
                <div className={styles.buttonCenter}>
                    <CommonButton text="MT4 / MT5 Setup & Training" />
                </div>
                <div className={styles.title}>
                    <h1>
                        Complete MT4 / MT5 Setup & 24/7 Technical Support
                    </h1>
                </div>
                <p className={styles.description}>
                    Deploy and manage your trading platform seamlessly with GENXEL MetaTrader solutions. From setup to ongoing support,
                    we provide everything you need.
                </p>
            </div>
        </div>
    )
}
