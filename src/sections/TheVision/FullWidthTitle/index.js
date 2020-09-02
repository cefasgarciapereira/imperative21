import React from 'react'
import styles from './styles.module.css'

export default function FullWidthTitle(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <div className={styles.text_section}>
                    <h2>The Time For Action Is Now</h2>
                </div>
            </div>
        </div>
    )
}