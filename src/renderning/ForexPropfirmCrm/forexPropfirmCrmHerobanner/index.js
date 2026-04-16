import React from 'react'
import styles from './forexPropfirmCrmHerobanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function ForexPropfirmCrmHerobanner() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.mauritiusForexLicenseBanner}>
                    <div className={styles.buttonCenter}>
                        <CommonButton text="RejoiceFX Prop Firm CRM" />
                    </div>
                    <h2>
                        All-in-One Forex Prop Firm CRM to Launch, Manage & Scale Your Trading Business
                    </h2>
                    {/* <p>
                        Build, automate, and scale your proprietary trading firm with RejoiceFX Prop Firm CRM—a powerful, fully customizable solution designed for modern prop firms. From trader onboarding and challenge management to real-time risk monitoring and automated payouts, everything is
                        managed from one intelligent platform.
                    </p> */}
                    <p>
                        Whether you’re starting a new prop firm or upgrading your existing infrastructure, RejoiceFX delivers the technology you need to grow
                        faster and operate smarter.
                    </p>
                </div>
            </div>
        </div>
    )
}
