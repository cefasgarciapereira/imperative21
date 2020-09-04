import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function Callout(){
    return(
        <div className={styles.callout}>
            <Fade cascade clear>
                <div className={styles.callout_inner}>
                    <h2>Stakeholder Capitalism is Working</h2>
                    <p>The top 20% of companies ranked by JUST Capital for stakeholder leadership 
                        have outperformed the bottom 20% by 4.7% through the current bear market
                        and the first signs of recovery.</p>
                    <p className={styles.credit}>JUST Capital</p>
                </div>
            </Fade>
        </div>
    )
}