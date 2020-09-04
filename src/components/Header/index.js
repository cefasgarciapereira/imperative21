import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'

export default function(){
    return(
        <Fade top>
            <div className={styles.header}>
                <h2>IMPERATIVE 21</h2>
            </div>
        </Fade>
    )
}