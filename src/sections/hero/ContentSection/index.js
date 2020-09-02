import React from 'react'
import styles from './styles.module.css'

export default function ContentSection(){
    return(
        <div>
            <div className={styles.content_section}>
                <div className={styles.content_section_inner}>
                    <div className={styles.text_section}>
                        <p>
                            The global health pandemic, economic crisis, and racial justice uprisings 
                            have revealed a deeper, more fundamental problem: An economic system that 
                            rewards maximizing wealth over wellbeing and prioritizing individualism over interdependence.
                        </p>
                        <h2>
                            Today we have an opportunity to reimagine and redesign what comes next.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}