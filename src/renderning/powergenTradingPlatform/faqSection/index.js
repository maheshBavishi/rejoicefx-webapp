import React, { useState } from 'react';
import styles from './faqSection.module.scss';
import CommonButton from '@/components/commonButton';
import classNames from 'classnames';

const faqs = [
    {
        question: 'Do you provide web, desktop, and mobile trading platforms?',
        answer: 'Yes, we develop complete multi-platform trading ecosystems including web-based terminals, professional desktop applications, and native Android and iOS mobile applications — all connected to the same backend infrastructure.',
    },
    {
        question: 'Can the platform integrate with MT5?',
        answer: 'Yes, we provide seamless MT5 integration support. PowerGen Trading Platform connects directly to your MetaTrader 5 backend, enabling real-time synchronization, secure API communication, and unified account management without disrupting your existing operations.',
    },
    {
        question: 'Is the platform fully white-labeled?',
        answer: 'Yes, the entire platform can be fully customized with your branding — including logo, domain, color scheme, UI design, and content. Your clients will experience a completely branded environment with no Genxel branding visible.',
    },
    {
        question: 'Do you support multi-asset trading?',
        answer: 'Yes, the platform supports a wide range of asset classes including forex pairs, cryptocurrencies, CFDs, commodities, indices, and more. We can configure the supported instruments based on your business requirements.',
    },
    {
        question: 'Can you add custom broker features?',
        answer: 'Absolutely. We provide custom module and feature development based on your specific business requirements. Whether it\'s a custom reporting dashboard, bonus management system, or a unique trader workflow, our team builds it tailored to your needs.',
    },
    {
        question: 'Do you provide post-launch support?',
        answer: 'Yes, we offer continuous maintenance, updates, and technical support after deployment. Our team ensures your platform remains stable, secure, and up-to-date with ongoing monitoring and dedicated support services.',
    },
];

export default function FaqSection() {
    const [toggle, setToggle] = useState(null);

    const handleToggle = (index) => {
        setToggle(toggle === index ? null : index);
    };

    return (
        <div className={styles.faqSection}>
            <div className="container-lg">
                <div className="">
                    <div className={styles.center}>
                        <CommonButton text="FAQ" />
                    </div>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.mainBox}>
                        {faqs.map((item, i) => (
                            <div
                                className={classNames(styles.faq, toggle === i ? styles.toggle : '')}
                                key={i}
                            >
                                <div className={styles.faqHeader} onClick={() => handleToggle(i)}>
                                    <p>{item.question}</p>
                                    <div className={styles.icon}>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className={classNames(styles.faqBody, toggle === i ? styles.show : styles.hide)}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
