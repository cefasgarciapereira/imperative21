import React from 'react'
import styles from './styles.module.css'

export default function BannerStat(){
    return(
        <div className={styles.money_stack}>
            <div className={styles.money_stack_inner}>  
                <div className={styles.statistic_group}>
                    <div className={styles.statistic_number}>
                        <p>“Climate change is the greatest long-term threat</p>
                    </div>
                    <div className={styles.statistic_support}>
                        faced by humanity. All countries will be affected, but the poorest countries will be hit hardest. 
                        The cost of inaction far outweigh the costs of action.”
                    </div>

                    <div className={styles.statistic_credit}>
                        David Miliband
                        <br/>
                        International Rescue Committee
                        <br/>
                        and former British Member of Parliament
                    </div>
                </div>
            </div>
        </div>
    )
}