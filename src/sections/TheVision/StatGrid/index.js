import React from 'react'
import styles from './styles.module.css'

export default function StatGrid(){
    return(
        <div className={styles.stat_grid}>
            <div className={styles.stat_grid_inner}>
                <div className={styles.stat_content}>
                    <ul className={styles.stat_list}>
                        <li>
                            <h4>72,000+</h4>
                            <p>businesses across 80 countries and 150 industries</p>
                        </li>
                        <li>
                            <h4>18+ Million</h4>
                            <p>employees</p>
                        </li>
                        <li>
                            <h4>6.6+ Trillion</h4>
                            <p>in revenues</p>
                        </li>
                        <li>
                            <h4>15+ Trillion</h4>
                            <p>in assets under management</p>
                        </li>
                    </ul>
                    <div className={styles.post_grid}>
                        <h4>Hundreds of Millions</h4>
                        <p>
                            of people like you eager to vote every day with their purchases, investments, and employment decisions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}