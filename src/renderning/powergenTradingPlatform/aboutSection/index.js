import React from 'react';
import styles from './aboutSection.module.scss';
import CommonButton from '@/components/commonButton';
const PowerGen = '/assets/images/power-gen.png';

const highlights = [
    {
        label: 'Fast Execution',
        icon: <svg viewBox="0 0 24 24"><path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.81 6-4.72 7.28L13 17v5l5-3-1.22-1.22C19.91 16.26 22 13.28 22 10c0-5.18-3.94-9.45-9-9.95zM11 2.05C5.95 2.55 2 6.82 2 12c0 3.28 2.09 6.26 5.22 7.78L6 21l5 3v-5l-2.28 2.28C6.81 20 5 17.21 5 14c0-4.08 3.05-7.44 7-7.93V2.05z" /></svg>,
    },
    {
        label: 'White Label Ready',
        icon: <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>,
    },
    {
        label: 'Multi-Platform',
        icon: <svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zm-8-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8-3H4V6h16v8z" /></svg>,
    },
    {
        label: 'Advanced Charting',
        icon: <svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" /></svg>,
    },
];

export default function AboutSection() {
    return (
        <div className={styles.aboutSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.twoColLayout}>
                        <div className={styles.leftCol}>
                            <div className={styles.badgeWrapper}>
                                <CommonButton text="About PowerGen" />
                            </div>
                            <h2>Modern Trading Infrastructure Built for Brokers</h2>
                            <p>
                                At Genxel Technology, we develop enterprise-grade trading platforms that help brokers deliver professional trading experiences to their clients. PowerGen Trading Platform is designed to provide fast execution, advanced trading tools, real-time market data, and fully branded trading environments.
                            </p>
                            <div className={styles.highlightsGrid}>
                                {highlights.map((item, idx) => (
                                    <div className={styles.highlightCard} key={idx}>
                                        <div className={styles.iconWrap}>{item.icon}</div>
                                        <span className={styles.label}>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.rightCol}>
                            <div className={styles.imageWrap}>
                                <img src={PowerGen} alt='PowerGen' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
