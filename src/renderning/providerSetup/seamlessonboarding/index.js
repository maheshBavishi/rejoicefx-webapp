import React from 'react'
import styles from './seamlessonboarding.module.scss';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import { motion } from 'framer-motion';
import RightLgArrow from '@/components/icons/rightLgArrow';
import Link from 'next/link';

const IconPlug = '/assets/icons/Plug.svg';
const IconManager = '/assets/icons/team.svg';
const IconSupport = '/assets/icons/point-4.svg';

export default function Seamlessonboarding() {
    const cardVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
            },
        }),
    };

    return (
        <div className={styles.seamlessonboarding}>
            <div className='container'>
                <div className={styles.mainGrid}>
                    <motion.div
                        className={styles.leftContent}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={styles.mainTitle}>
                            Seamless onboarding.<br />
                            Unmatched support.
                        </h2>
                        <div className={styles.descriptionGroup}>
                            <p className={styles.description}>
                                At RejoiceFX, we simplify one of the most critical parts of your brokerage — liquidity integration. From selecting the right liquidity provider to full technical setup, we handle everything so you can focus on scaling your trading business.
                            </p>
                            <p className={styles.description}>
                                Liquidity is the backbone of any successful brokerage. It impacts execution speed, spreads, and client satisfaction. Our mission is to deliver fast, stable, and competitive trading conditions for your clients.
                            </p>
                        </div>
                        <Link href="/contact-us">
                            <Button text="Contact Us" icon={<RightLgArrow />} />
                        </Link>
                    </motion.div>

                    <div className={styles.rightContent}>
                        {[
                            {
                                icon: IconPlug,
                                title: 'Easy Integration',
                                desc: 'Plug-and-play integration with top liquidity providers and your trading ecosystem. REST & FIX APIs, MT4/MT5, cTrader, payment gateways, bridges, and more. Go live faster with our pre-built modules.',
                            },
                            {
                                icon: IconSupport,
                                title: 'Dedicated Account Manager',
                                desc: 'Your single point of contact who understands your business inside out. We coordinate tech, liquidity, and operations—ensuring smooth onboarding, seamless communication, and scalable growth.',
                            },
                            {
                                icon: IconSupport,
                                title: 'Priority Support',
                                desc: '24/7 technical support with guaranteed response times, priority escalation paths, and proactive monitoring to keep your infrastructure running at peak performance.',
                            }
                        ].map((feature, i) => (
                            <motion.div
                                className={styles.featureCard}
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                            >
                                <div className={styles.iconBox}>
                                    <img src={feature.icon} alt={feature.title} />
                                </div>
                                <div className={styles.cardBody}>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

