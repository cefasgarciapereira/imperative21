import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function Callout(){
    return(
        <div className={styles.callout}>
            <Fade cascade clear>
                <div className={styles.callout_inner}>
                    <h2>“O futuro não é um lugar para onde vamos, e sim um lugar que estamos criando.”</h2>
                    <p className={styles.credit}>
                        O falecido John Schaar 
                        <br/>
                        Professor Emérito da Universidade da Califórnia, Santa Cruz
                    </p>
                </div>
            </Fade>
        </div>
    )
}