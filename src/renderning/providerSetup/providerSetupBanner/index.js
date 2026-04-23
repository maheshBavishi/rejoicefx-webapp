import React from 'react'
import styles from './providerSetupBanner.module.scss';
import CommonButton from '@/components/commonButton';
export default function ProviderSetupBanner() {
    return (
        <div className="container-lg">
            <div className={styles.mauritiusForexLicenseBanner}>
                <div className={styles.buttonCenter}>
                    <CommonButton text="Liquidity Providers for Seamless Trading" />
                </div>
                <h2>
                    Connect with Top Liquidity Providers for Seamless Trading
                </h2>
                <p>
                    Access deep liquidity and competitive spreads with GENXEL Liquidity Provider Setup Services. We connect
                    you with trusted global LPs and handle full integration.
                </p>
            </div>
        </div>
    )
}
