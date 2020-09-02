import React from 'react'
import styles from './styles.module.css'

export default function NewsletterPrompt(){
    return(
        <div className={styles.newsletter_prompt}>
            <div className={styles.newsletter_inner}>
                <div className={styles.left_group}>
                    <p className={styles.lead}>BUSINESS LEADERS</p>
                    <h5 className={styles.heading}>Embody the new way of doing business.</h5>
                    <ul>
                        <li>Lead for the long-term</li>
                        <li>Measure what matters</li>
                        <li>Manage with stakeholder governance</li>
                    </ul>
                    <p className={styles.footer_text}>Reach out for leadership tools, resources and partnership.</p>
                    <button className={styles.button}>Get involved</button>
                </div>

                <div className={styles.right_group}>
                    <p className={styles.lead}>POLICYMAKERS</p>
                    <h5 className={styles.heading}>Build the foundation for a human-first economy</h5>
                    <p className={styles.footer_text}>Let's co-create the new rules for the new system together.</p>
                    <button className={styles.button}>Get involved</button>
                </div>
            </div>
        </div>
    )
}