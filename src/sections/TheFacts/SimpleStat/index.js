import React from 'react'
import styles from './styles.module.css'

export default function SimpleStat(){
    return(
        <div className={styles.simple_stat}>
            <div className={styles.simple_stat_inner}>
                <p className={styles.simple_stat_prefix}>26 individuals own</p>
                <p className={styles.simple_stat_main}>
                    half of humanity 
                    <br/>
                    more wealth than
                </p>
                <p className={styles.simple_stat_credit}>Oxfam 2019</p>
            </div>
        </div>
    )
}