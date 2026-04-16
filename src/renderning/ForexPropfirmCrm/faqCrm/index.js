import React, { useState } from 'react'
import styles from './faqCrm.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';

const FAQ_Content = [
    {
        question: "What is a Prop Firm CRM?",
        answer: "A Prop Firm CRM is a system that helps manage traders, challenges, risk, payouts, and operations in a proprietary trading firm.",
    },
    {
        question: "Can I customize challenge rules?",
        answer: "Yes, you can fully customize profit targets, drawdown limits, trading days, and more.",
    },
    {
        question: "Does it support MT4 and MT5?",
        answer: "Yes, our CRM integrates seamlessly with both MT4 and MT5 platforms.",
    },
    {
        question: "How long does setup take?",
        answer: "You can launch your prop firm within a few days depending on customization.",
    },
    {
        question: "Do you provide payment gateway integration?",
        answer: "Yes, we support multiple payment methods including crypto and traditional banking.",
    },
];
export default function FaqSectionCrm() {
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
