import React from 'react'
import Slide from 'react-reveal/Slide';
import money_stack from '../../../../static/money_stack.svg'
import styles from './styles.module.css'

export default function MoneyStack(){
    return(
        <Slide bottom cascade>
            <div className={styles.money_stack}>
                <div className={styles.money_stack_inner}>
                    <img src={money_stack}/>

                    <div className={styles.statistic_group}>
                        <div className={styles.statistic_number}>
                            <p>Nos últimos 15 anos</p>
                            <br/>
                            <p>94% dos lucros</p>
                        </div>
                        <div className={styles.statistic_support}>
                        das empresas dos EUA foram dedicados, por meio de 
                        recompras e dividendos, a executivos e acionistas, 
                        em vez de trabalhadores
                        </div>

                        <div className={styles.statistic_credit}>
                            Instituto Roosevelt
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}