import React from 'react'
import styles from './transformChallenges.module.scss';
import { motion } from 'framer-motion';

const challenges = [
    {
        title: 'Manual, Repetitive Tasks Consuming Resources',
        desc: 'Teams spend 60% of their time on repetitive tasks that could be automated, reducing focus on high-value strategic work.'
    },
    {
        title: 'Inconsistent Customer Support Experiences',
        desc: 'Human-only support leads to inconsistent responses, long wait times, and 24/7 availability challenges.'
    },
    {
        title: 'Data Processing Bottlenecks',
        desc: 'Manual data analysis and processing creates delays in decision-making and limits business agility.'
    },
    {
        title: 'Scaling Operational Capacity Issues',
        desc: 'Growing demand requires proportional hiring increases, leading to unsustainable cost growth.'
    }
];

const outcomes = [
    {
        title: 'Operational Efficiency Boost',
        desc: 'Automate routine tasks and workflows, freeing up your team for strategic initiatives.'
    },
    {
        title: '24/7 Intelligent Operations',
        desc: 'AI agents work around the clock, ensuring continuous productivity and customer support.'
    },
    {
        title: 'Cost Reduction Achievement',
        desc: 'Significantly reduce operational costs while maintaining or improving service quality.'
    },
    {
        title: 'Response Time Improvement',
        desc: 'Instant AI responses for customer queries and internal process automation.'
    }
];

export default function TransformChallenges() {
    return (
        <div className={styles.transformChallenges}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Transform Challenges into Results</h2>
                    <h3 className={styles.mainHeading}>From Pain Points to Powerful Outcomes</h3>
                    <p className={styles.subtitle}>
                        See how our solutions turn your biggest operational challenges into competitive advantages.
                    </p>
                </div>

                <div className={styles.transformationGrid}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <div className={styles.dotRed}></div>
                            <h4>Current Challenges</h4>
                        </div>
                        <div className={styles.cardsStack}>
                            {challenges.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className={styles.challengeCard}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className={styles.cardIndicator}>!</div>
                                    <div className={styles.cardContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.arrowColumn}>
                        <div className={styles.arrowIcon}>→</div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <div className={styles.dotGreen}></div>
                            <h4>Measurable Outcomes</h4>
                        </div>
                        <div className={styles.cardsStack}>
                            {outcomes.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className={styles.outcomeCard}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <div className={styles.cardIndicator}>✓</div>
                                    <div className={styles.cardContent}>
                                        <h5>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

