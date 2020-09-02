import React from 'react'
import money_stack from '../../../../static/money_stack.svg'
import styles from './styles.module.css'

export default function MoneyStack(){
    return(
        <div className={styles.money_stack}>
            <div className={styles.money_stack_inner}>
                <img src={money_stack}/>

                <div className={styles.statistic_group}>
                    <div className={styles.statistic_number}>
                        <p>94% of US</p>
                        <br/>
                        <p style={{marginTop: '-4px', backgroundColor: 'green'}}>companies' profits</p>
                    </div>
                    <div className={styles.statistic_support}>
                        have been devoted to executives and shareholders, 
                        instead of workers, through buybacks and dividends over the last 15 years
                    </div>

                    <div className={styles.statistic_credit}>
                        Roosevelt Institute
                    </div>
                </div>
            </div>
        </div>
    )
}