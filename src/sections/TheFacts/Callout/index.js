import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function Callout(){
    return(
        <div className={styles.callout}>
            <Fade cascade clear>
                <div className={styles.callout_inner}>
                    <h2>O Capitalismo de Stakeholder está funcionando</h2>
                    <p>20% das melhores empresas ranqueadas pela JUST Capital, 
                        em termos de liderança de stakeholders, tiveram uma performance de 4,7% 
                        acima do que as demais durante o atual período de baixa do mercado 
                        ("bear market") e nos primeiros sinais de recuperação.</p>
                    <p className={styles.credit}>JUST Capital</p>
                </div>
            </Fade>
        </div>
    )
}