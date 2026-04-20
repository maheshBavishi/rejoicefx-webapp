import React from 'react'
import styles from './forexbrokerSetupBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function ForexbrokerSetupBanner() {
    return (
        <div className="container-lg">
            <div className={styles.mauritiusForexLicenseBanner}>
                <div className={styles.buttonCenter}>
                    <CommonButton text="RejoiceFX Prop Firm CRM" />
                </div>
                <h2>
                    Complete Forex Broker Setup Solutions – Launch Your Brokerage with Confidence
                </h2>
                <p>
                    Start your Forex brokerage business with RejoiceFX end-to-end setup solutions. From licensing and CRM to liquidity and trading
                    platform integration, we handle everything so you can focus on growth.
                </p>
            </div>
        </div>
    )
}
