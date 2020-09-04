import React from 'react'
import Modal from '../../../components/Modal'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function NewsletterPrompt(){
    return(
        <div className={styles.newsletter_prompt}>
            <div className={styles.newsletter_inner}>
                <Fade bottom cascade>
                    <div className={styles.left_group}>
                        <p className={styles.lead}>BUSINESS LEADERS</p>
                        <h5 className={styles.heading}>Embody the new way of doing business.</h5>
                        <Fade clear>
                            <ul>
                                <li>Lead for the long-term</li>
                                <li>Measure what matters</li>
                                <li>Manage with stakeholder governance</li>
                            </ul>
                        </Fade>
                        <p className={styles.footer_text}>Reach out for leadership tools, resources and partnership.</p>
                        <Modal label="Get Involved"/>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className={styles.right_group}>
                        <p className={styles.lead}>POLICYMAKERS</p>
                        <h5 className={styles.heading}>Build the foundation for a human-first economy</h5>
                        <Fade clear>
                            <p className={styles.footer_text}>Let's co-create the new rules for the new system together.</p>
                        </Fade>
                        <Modal label="Get Involved"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}