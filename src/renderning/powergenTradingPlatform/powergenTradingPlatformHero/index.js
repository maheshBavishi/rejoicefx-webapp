import React from 'react'
import styles from './powergenTradingPlatformHero.module.scss'
import CommonButton from '@/components/commonButton'
export default function PowergenTradingPlatformHero() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.forexCrmBanner}>
                    <div className={styles.centeralignment}>
                        <CommonButton text="PowerGen Trading Platform (Web Terminal)" />
                    </div>
                    <h2>
                        Advanced Multi-Asset Trading Platform for Modern Brokers
                    </h2>
                    <p>
                        Launch a powerful, fully branded web trading platform designed for forex brokers, prop firms, and financial businesses. PowerGen Trading Platform delivers a seamless trading experience across web, desktop, and mobile with lightning-fast execution, advanced charting, and enterprise-
                        grade security.
                    </p>
                </div>
            </div>
        </div>
    )
}
