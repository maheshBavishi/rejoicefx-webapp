import React, { useState } from 'react'
import styles from './mamPammSocialFaq.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';

const FAQ_Content = [
    {
        question: "What is MAM?",
        answer: "MAM (Multi-Account Manager) allows traders to manage multiple accounts from one interface.",
    },
    {
        question: "What is PAMM?",
        answer: "PAMM (Percentage Allocation Management Module) distributes trades and profits based on investor equity.",
    },
    {
        question: "Which is better MAM or PAMM?",
        answer: "It depends on your business model—MAM offers more flexibility, while PAMM is more automated.",
    },
    {
        question: "Does it support MT4 and MT5?",
        answer: "Yes, our solution supports both platforms seamlessly.",
    },
    {
        question: "Can I customize fee structures?",
        answer: "Yes, you can set performance fees, management fees, and other commission models.",
    },
];

export default function MamPammSocialFaq() {
    const [toogle, setToogle] = useState(false);
    const handleToggle = (index) => {
        if (toogle === index) {
            setToogle(null);
        } else {
            setToogle(index);
        }
    };
    return (
        <div className={styles.faqSection}>
            <div className="container">
                <div className={styles.center}>
                    <CommonButton text="FAQ" />
                </div>
                <h2>
                    Frequently Asked Questions
                </h2>
                <div className={styles.mainBox}>
                    {FAQ_Content?.map((item, i) => {
                        return (
                            <div className={classNames(styles.faq, toogle === i ? styles.toogle : '')} key={i}>
                                <div className={styles.faqHeader}>
                                    <p>{item?.question}</p>
                                    <div className={styles.icon} onClick={() => handleToggle(i)}>
                                        <DownArrow />
                                    </div>
                                </div>
                                <div className={classNames(styles.faqBody, toogle === i ? styles.show : styles.hide)}>
                                    <p>
                                        {item?.answer}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
