import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function StatGrid(){
    return(
        <div className={styles.stat_grid}>
            <div className={styles.stat_grid_inner}>
                <div className={styles.stat_content}>
                    <Fade bottom cascade>
                        <ul className={styles.stat_list}>
                            <li>
                                <h4>+ de 72,000</h4>
                                <p>empresas em 80 países e 150 indústrias</p>
                            </li>
                            <li>
                                <h4>+ de 18 Milhões</h4>
                                <p>de funcionários</p>
                            </li>
                            <li>
                                <h4>+ de US$ 6,6 trilhões</h4>
                                <p>em receitas</p>
                            </li>
                            <li>
                                <h4>+ de US$ 15 trilhões</h4>
                                <p>em ativos sob gestão</p>
                            </li>
                        </ul>
                    </Fade>

                    <Fade bottom cascade>
                        <div className={styles.post_grid}>
                            <h4>Centenas de milhões</h4>
                            <p>
                                de pessoas como você ansiosas para votarem todos os dias com suas compras, investimentos e decisões de trabalho
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}