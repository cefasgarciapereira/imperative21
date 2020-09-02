import React from 'react'
import styles from './styles.module.css'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.footer_inner}>
                <p className={styles.footer_message}>
                    System change requires all of us. Let's get to work. Together.
                </p>
                <div className={styles.footer_section}>
                    <h2 className={styles.footer_logo}>IMPERATIVE 21</h2>

                    <ul className={styles.footer_list}>
                        <li className={styles.footer_item}><button className={styles.footer_link}>The Moment</button></li>
                        <li className={styles.footer_item}><button className={styles.footer_link}>The Fact</button></li>
                        <li className={styles.footer_item}><button className={styles.footer_link}>The Vision</button></li>
                    </ul>
                </div>

                <em className={styles.footer_thanks}>Thank you to the Ford Foundation and the Skoll Foundation for their catalytic support.</em>
                
                <div className={styles.footer_copyright}>
                    <p>©2020</p> <span>Privacy</span>
                </div>
            </div>
        </div>
    )
}