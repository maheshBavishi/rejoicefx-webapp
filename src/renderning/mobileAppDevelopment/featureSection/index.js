import React from 'react';
import { motion } from 'framer-motion';
import {
    UserCheck,
    LayoutDashboard,
    LineChart,
    Wallet,
    Bell,
    Globe,
    Users,
    CreditCard,
    Copy
} from 'lucide-react';
import styles from './featureSection.module.scss';
import CommonButton from '@/components/commonButton';

const features = [
    {
        title: 'User Registration & KYC',
        description: 'Simple onboarding with document upload and identity verification.',
        icon: <UserCheck size={32} />
    },
    {
        title: 'Live Trading Dashboard',
        description: 'Real-time account balance, equity, margin, and trading activity.',
        icon: <LayoutDashboard size={32} />
    },
    {
        title: 'Advanced Trading Charts',
        description: 'Interactive charts with indicators and market analysis tools.',
        icon: <LineChart size={32} />
    },
    {
        title: 'Secure Wallet System',
        description: 'Deposit, withdrawal, internal transfer, and transaction history.',
        icon: <Wallet size={32} />
    },
    {
        title: 'Push Notifications',
        description: 'Market alerts, trade updates, and promotional notifications.',
        icon: <Bell size={32} />
    },
    {
        title: 'Multi-Language Support',
        description: 'Reach global traders with multilingual mobile applications.',
        icon: <Globe size={32} />
    },
    {
        title: 'IB & Affiliate Management',
        description: 'Track referrals, commissions, and partner performance.',
        icon: <Users size={32} />
    },
    {
        title: 'Payment Gateway Integration',
        description: 'Integrate local and global payment systems securely.',
        icon: <CreditCard size={32} />
    },
    {
        title: 'Copy Trading Module',
        description: 'Allow users to copy expert traders automatically.',
        icon: <Copy size={32} />
    }
];

export default function FeatureSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className={styles.featureSection}>
            <div className='container'>
                <div className={styles.center}>
                    <CommonButton text="Features We Provide" />
                </div>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className={styles.title}
                    >
                        Powerful Features We Provide
                    </motion.h2>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((feature, index) => (
                        <motion.div key={index} variants={itemVariants} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
