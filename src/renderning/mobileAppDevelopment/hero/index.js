import React from 'react'
import styles from './hero.module.scss';
import CommonButton from '@/components/commonButton';
export default function Hero() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.forexCrmBanner}>
                    <div className={styles.centeralignment}>
                        <CommonButton text="Forex & Trading Businesses" />
                    </div>
                    <h2>
                        Mobile App Development for Forex CRM & Trading Businesses
                    </h2>
                    <p>
                        Build Powerful Forex & Trading Mobile Apps for Modern Brokers
                        Deliver seamless trading experiences with high-performance mobile applications designed for forex brokers, trading platforms, and financial businesses. At Genxel Technology, we create secure, scalable, and feature-rich mobile apps for Android and iOS that
                        help brokers engage traders, manage operations, and grow globally.
                    </p>
                </div>
            </div>
        </div>
    )
}
