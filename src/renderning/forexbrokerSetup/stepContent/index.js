import React from 'react';
import styles from './stepContent.module.scss';
import { Building2, Cpu, Users } from 'lucide-react';

const topSteps = [
    {
        id: 1,
        title: 'Legal Foundation',
        subtitle: 'Company formation & licensing'
    },
    {
        id: 2,
        title: 'Platform Selection',
        subtitle: 'Technology & infrastructure'
    },
    {
        id: 3,
        title: 'Team Building',
        subtitle: 'Hiring & training staff'
    },
    {
        id: 4,
        title: 'Integration Setup',
        subtitle: 'Liquidity & bridge configuration'
    },
    {
        id: 5,
        title: 'Testing Phase',
        subtitle: 'Demo trading & validation'
    },
    {
        id: 6,
        title: 'Market Launch',
        subtitle: 'Go-live & client onboarding'
    }
];

const detailedPhases = [
    {
        id: 'foundation',
        title: 'Foundation Phase',
        icon: <Building2 size={24} color="#8A2BE2" />,
        steps: [
            {
                num: 1,
                title: 'Business Planning',
                desc: 'Market analysis, business model, financial projections'
            },
            {
                num: 2,
                title: 'Jurisdiction Selection',
                desc: 'Choose regulatory jurisdiction and license type'
            },
            {
                num: 3,
                title: 'Company Formation',
                desc: 'Legal entity registration and initial capital'
            },
            {
                num: 4,
                title: 'License Application',
                desc: 'Submit regulatory documentation and procedures'
            }
        ]
    },
    {
        id: 'technology',
        title: 'Technology Phase',
        icon: <Cpu size={24} color="#8A2BE2" />,
        steps: [
            {
                num: 1,
                title: 'Platform Decision',
                desc: 'Select MetaTrader, cTrader, or Match-Trader'
            },
            {
                num: 2,
                title: 'Infrastructure Setup',
                desc: 'Hosting, servers, and network architecture'
            },
            {
                num: 3,
                title: 'Security Implementation',
                desc: 'SSL, firewalls, and data protection measures'
            },
            {
                num: 4,
                title: 'CRM Integration',
                desc: 'Client management and back-office systems'
            }
        ]
    },
    {
        id: 'operations',
        title: 'Operations Phase',
        icon: <Users size={24} color="#8A2BE2" />,
        steps: [
            {
                num: 1,
                title: 'Team Recruitment',
                desc: 'Hire key personnel and support staff'
            },
            {
                num: 2,
                title: 'Process Development',
                desc: 'Standard operating procedures and workflows'
            },
            {
                num: 3,
                title: 'Compliance Setup',
                desc: 'KYC/AML procedures and risk management'
            },
            {
                num: 4,
                title: 'Marketing Strategy',
                desc: 'Brand development and acquisition channels'
            }
        ]
    }
];

export default function StepContent() {
    return (
        <div className={styles.stepContent}>
            <div className="container">
                {/* Header Section */}
                <div className={styles.header}>
                    <span className={styles.subTitle}>STEP-BY-STEP PROCESS</span>
                    <h2>
                        Start Your Own <span>Forex Brokerage</span>
                    </h2>
                    <p className={styles.description}>
                        Complete turnkey forex broker solution from company formation to trading platform setup. Our proven process helps you launch successfully.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className={styles.timelineWrapper}>
                    <div className={styles.line}></div>
                    <div className={styles.timelineItems}>
                        {topSteps.map((step) => (
                            <div key={step.id} className={styles.timelineItem}>
                                <div className={styles.numberBox}>{step.id}</div>
                                <h3>{step.title}</h3>
                                <p>{step.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Phases Cards */}
                <div className={styles.cardsGrid}>
                    {detailedPhases.map((phase) => (
                        <div key={phase.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>{phase.icon}</div>
                                <h3>{phase.title}</h3>
                            </div>
                            <div className={styles.cardBody}>
                                {phase.steps.map((step) => (
                                    <div key={step.num} className={styles.stepItem}>
                                        <div className={styles.stepNum}>{step.num}</div>
                                        <div className={styles.stepText}>
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
