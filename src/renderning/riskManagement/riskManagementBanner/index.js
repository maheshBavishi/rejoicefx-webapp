import React from 'react'
import styles from './riskManagementBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function RiskManagementBanner() {
    return (
        <div className="container-lg">
            <div className={styles.mauritiusForexLicenseBanner}>
                <div className={styles.buttonCenter}>
                    <CommonButton text="RejoiceFX RMS" />
                </div>
                <h2>
                    Advanced Risk Management System for Forex Brokers
                </h2>
                <p>
                    Control your risk and maximize profitability with RejoiceFX RMS Solutions. Our system monitors trading flow,
                    manages exposure, and ensures stable business operations.
                </p>
            </div>
        </div>
    )
}
