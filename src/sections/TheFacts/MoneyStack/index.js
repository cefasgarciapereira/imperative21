import React from 'react'
import Slide from 'react-reveal/Slide';
import money_stack from '../../../../static/money_stack.svg'
import styles from './styles.module.css'

export default function MoneyStack(){
    return(
        <Slide bottom cascade>
            <div className={styles.money_stack}>
                <div className={styles.money_stack_inner}>
                    <img src={money_stack} alt="money stack"/>

                    <div className={styles.statistic_group}>
                        <div className={styles.statistic_number}>
                            <p>Em 2019</p>
                            <br/>
                            <p>1% da população</p>
                        </div>
                        <div className={styles.statistic_support}>
                            ganhava quase 34 vezes mais que metade de menor rendimento.
                        </div>

                        <div className={styles.statistic_credit}>
                            IBGE
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}