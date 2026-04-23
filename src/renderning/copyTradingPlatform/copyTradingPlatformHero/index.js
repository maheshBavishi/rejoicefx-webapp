import React from 'react'
import styles from './copyTradingPlatformHero.module.scss';
import CommonButton from '@/components/commonButton';
export default function CopyTradingPlatformHero() {
    return (
        <div>
            <div className="container-lg">
                <div className={styles.mauritiusForexLicenseBanner}>
                    <div className={styles.buttonCenter}>
                        <CommonButton text="GENXEL Prop Firm CRM" />
                    </div>
                    <h2>
                        Advanced Copy Trading Platform for Brokers, Traders & Investors
                    </h2>
                    {/* <p>
                        Build, automate, and scale your proprietary trading firm with GENXEL Prop Firm CRM—a powerful, fully customizable solution designed for modern prop firms. From trader onboarding and challenge management to real-time risk monitoring and automated payouts, everything is
                        managed from one intelligent platform.
                    </p> */}
                    <p>
                        Grow your Forex business with <b>GENXEL Copy Trading Platform    </b>—a powerful solution that connects professional traders with investors. Enable seamless trade replication, performance tracking, and automated profit sharing with
                        a fully customizable system.
                    </p>
                </div>
            </div>
        </div>
    )
}
