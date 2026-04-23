import React from 'react';
import styles from './liquidityProviders.module.scss';
import CommonButton from '@/components/commonButton';

const providers = [
    { id: 1, name: 'Finalto', image: '/assets/images/finalto-logo.svg' },
    { id: 2, name: 'LMAX', image: '/assets/images/lmax-logo.svg' },
    { id: 3, name: 'Blueberry', image: '/assets/images/blueberry-logo.svg' },
    { id: 4, name: 'NewEra', image: '/assets/images/newera-logo.svg' },
    { id: 5, name: 'Scope Markets', image: '/assets/images/scope-markets-logo.svg' },
    { id: 6, name: 'Amana Capital', image: '/assets/images/amana-capital-logo.svg' },
];

export default function LiquidityProviders() {
    return (
        <div className={styles.liquidityProviders}>
            <div className="container">
                <div className={styles.centerAlignment}>
                    <CommonButton text="Supported Providers" />
                </div>
                <div className={styles.title}>
                    <h2>Supported Liquidity Providers</h2>
                    <p>
                        Gain access to seamless integrations with top-tier global liquidity providers, ensuring deep liquidity, robust pricing, and incredibly low latency.
                    </p>
                </div>

                <div className={styles.grid}>
                    {providers.map((item) => (
                        <div className={styles.card} key={item.id}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={`${item.name} logo`}
                                    className={styles.providerImage}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
