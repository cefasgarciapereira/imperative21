import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function Callout(){
    return(
        <div className={styles.callout}>
            <Fade cascade clear>
                <div className={styles.callout_inner}>
                    <h2>“The future is not some place we are going to, but one we are creating.”</h2>
                    <p className={styles.credit}>
                        The late John Schaar 
                        <br/>
                        Professor Emeritus at the University of California, Santa Cruz
                    </p>
                </div>
            </Fade>
        </div>
    )
}