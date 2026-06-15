import React from 'react';
import styles from './clientTestimonials.module.scss';
import CommonButton from '@/components/commonButton';

const testimonials = [
    {
        text: '"Genxel Technology transformed our brokerage operations completely. Before implementing the CRM, managing clients, partners, and compliance processes required multiple systems and significant manual effort. Today, everything operates from a single platform. Our onboarding speed has improved dramatically, and our IB network has grown faster than expected."',
        name: 'CEO',
        role: 'Newera365',
        initials: 'Ne',
    },
    {
        text: '"The Trader Room and Mobile App developed by Genxel Technology significantly improved our client experience. Deposits, withdrawals, account creation, and support requests are now seamless. The platform has become one of our biggest competitive advantages."',
        name: 'Operations Director',
        role: 'Foreaxa',
        initials: 'Fx',
    },
    {
        text: '"What impressed us most was their understanding of the forex industry. They didn\'t just build software—they delivered a complete brokerage management solution that scaled with our business."',
        name: 'Head of Business Development',
        role: 'IncredFx',
        initials: 'IF',
    },
];

export default function ClientTestimonials() {
    return (
        <div className={styles.testimonialsSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.center}>
                            <CommonButton text="Client Feedback" />
                        </div>
                        <h2>Client Testimonials</h2>
                        <p>
                            Hear directly from the leaders who experienced the transformation firsthand.
                        </p>
                    </div>
                    <div className={styles.testimonialsGrid}>
                        {testimonials.map((t, idx) => (
                            <div className={styles.testimonialCard} key={idx}>
                                <div>
                                    <span className={styles.quoteIcon}>"</span>
                                    <div className={styles.stars}>
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={styles.star}>★</span>
                                        ))}
                                    </div>
                                    <p className={styles.testimonialText}>{t.text}</p>
                                </div>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorAvatar}>{t.initials}</div>
                                    <div className={styles.authorDetails}>
                                        <span className={styles.name}>— {t.name}</span>
                                        <span className={styles.role}>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
