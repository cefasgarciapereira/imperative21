import React from 'react'
import styles from './styles.module.css'

export default function Callout(){
    return(
        <div className={styles.callout}>
            <div className={styles.callout_inner}>
                <h2>“The future is not some place we are going to, but one we are creating.”</h2>
                <p className={styles.credit}>
                    The late John Schaar 
                    <br/>
                    Professor Emeritus at the University of California, Santa Cruz
                </p>
            </div>
        </div>
    )
}