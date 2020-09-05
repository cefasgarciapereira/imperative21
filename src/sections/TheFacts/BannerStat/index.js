import React from 'react'
import styles from './styles.module.css'

export default function BannerStat(){
    return(
        <div className={styles.money_stack}>
            <div className={styles.money_stack_inner}>  
                <div className={styles.statistic_group}>
                    <div className={styles.statistic_number}>
                        <p>“As mudanças climáticas são a maior ameaça a longo prazo</p>
                    </div>
                    <div className={styles.statistic_support}>
                        já enfrentada pela humanidade. Todos os países serão afetados, 
                        mas os mais pobres serão os mais duramente atingidos. 
                        O custo da inação ultrapassa em muito os custos da ação.”
                    </div>

                    <div className={styles.statistic_credit}>
                        David Miliband
                        <br/>
                        Comitê Internacional de Resgate
                        <br/>
                        e ex-parlamentar britânico
                    </div>
                </div>
            </div>
        </div>
    )
}