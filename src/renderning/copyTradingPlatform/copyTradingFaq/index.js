import React, { useState } from 'react'
import styles from './copyTradingFaq.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';

const FAQ_Content = [
    {
        question: "What is Copy Trading?",
        answer: "Copy trading allows investors to automatically replicate trades of experienced traders in real time.",
    },
    {
        question: "Can users stop copying anytime?",
        answer: "Yes, investors have full control and can stop copying whenever they want.",
    },
    {
        question: "Does it support MT4 and MT5?",
        answer: "Yes, our platform integrates seamlessly with both MT4 and MT5.",
    },
    {
        question: "How is profit shared?",
        answer: "Profit sharing is automated based on predefined percentage models.",
    },
    {
        question: "Is it suitable for beginners?",
        answer: "Yes, even beginners can earn by following professional traders.",
    },
];
export default function CopyTradingFaq() {
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
                            <div className={classNames(styles.faq, toogle === i ? styles.toogle : '')}>
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
