import React from 'react'
import styles from './styles.module.css'

export default function ContentSection(){
    return(
        <div>
            <div className={styles.content_section}>
                <div className={styles.content_section_inner}>
                    <h2>
                        The fact is our economy will never live up to its full
                        potential for people and the planet in a system with 
                        misaligned incentives and a culture with contrary norms.
                    </h2>
                </div>
            </div>
            <div className={styles.number_counter}>
                <div className={styles.number_counter_inner}>
                    <div>
                        <span className={styles.number_counter_number}>305,000,000</span>
                        <br/>
                        <span className={styles.number_counter_support}>unemployed</span>
                    </div>
                    <div className={styles.number_counter_group}>
                        <p className={styles.number_counter_body}>An estimated 305 million more full time workers will be out of work in the 2nd quarter of 2020.</p>
                        <p className={styles.number_counter_credit}>International Labour <br/> Organization <br/> May 17, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}