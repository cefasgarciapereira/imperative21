import React from 'react'
import styles from './styles.module.css'

export default function TwitterShare(){
    return(
        <div className={styles.share}>
            <div className={styles.share_inner}>
                <p className={styles.lead}>All of us</p>
                <h5 className={styles.heading}>Make your voice heard to strengthen the power of our collective calls for change.</h5>
                <button className={styles.button}>Share the story</button>
            </div>
        </div>
    )
}