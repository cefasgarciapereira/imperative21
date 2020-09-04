import React from 'react'
import Fade from 'react-reveal'
import styles from './styles.module.css'

export default function SimpleStat(props){
    return(
        <Fade bottom cascade>
            <div className={styles.simple_stat}>
                <div className={styles.simple_stat_inner}>
                    <p className={styles.simple_stat_prefix}>{props.prefix}</p>
                    <p className={styles.simple_stat_main}>
                        {props.firstLine}
                        <br/>
                        {props.secondLine}
                    </p>
                    <p className={styles.simple_stat_credit}>{props.credit}</p>
                </div>
            </div>
        </Fade>
    )
}