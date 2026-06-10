import React from 'react';
import styles from './projectImpact.module.scss';
import CommonButton from '@/components/commonButton';

const impactData = [
    { metric: 'Client Onboarding', before: '48 Hours', after: '15 Minutes' },
    { metric: 'Lead Conversion Rate', before: '12%', after: '29%' },
    { metric: 'Manual Operations', before: 'High', after: 'Minimal' },
    { metric: 'IB Management', before: 'Manual', after: 'Automated' },
    { metric: 'Reporting', before: 'Multiple Systems', after: 'Single Dashboard' },
    { metric: 'Scalability', before: 'Limited', after: 'Enterprise Ready' },
];

export default function ProjectImpact() {
    return (
        <div className={styles.projectImpactSection}>
            <div className="container-lg">
                <div className="container">
                    <div className={styles.innerWrap}>
                        <div className={styles.sectionHeader}>
                            <div className={styles.center}>
                                <CommonButton text="Before vs After" />
                            </div>
                            <h2>Project Impact</h2>
                            <p>
                                A clear picture of the transformation achieved across every key operational metric.
                            </p>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.impactTable}>
                                <thead>
                                    <tr>
                                        <th>Metric</th>
                                        <th>Before CRM</th>
                                        <th>After CRM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {impactData.map((row, idx) => (
                                        <tr key={idx}>
                                            <td>{row.metric}</td>
                                            <td>{row.before}</td>
                                            <td>{row.after}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
