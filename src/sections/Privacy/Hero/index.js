import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'

export default function Hero(){
    return(
        <div className={styles.hero}>
            <Fade bottom>
                <h2>Política de Privacidade</h2>
            </Fade>
        </div>
    )
}