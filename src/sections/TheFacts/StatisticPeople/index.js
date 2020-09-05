import React from 'react'
import styles from './styles.module.css'
import people from '../../../../public/people.svg'
import Fade from 'react-reveal/Fade'

export default function StatisticPeople(){
    return(
            <div className={styles.statistic_people}>
                <div className={styles.statistic_inner}>
                    <Fade cascade bottom>
                        <div className={styles.statistic_group}>
                            <p className={styles.statistic_support}>
                                "A Pandemia de COVID19 escancarou o pensamento das 
                                pessoas sendo vistas como mercadorias e não como seres 
                                humanos, tratados com dignidade, respeito e como parte 
                                integrante dos ativos da empresa"
                            </p>
                            <img src={people}></img>
                            <p className={styles.statistic_credit}>
                                Rebecca Henderson, professora na Harvard Business School
                                <br/>
                                e autora de “Reimagining Capitalism in a World on Fire”
                            </p>
                        </div>
                </Fade>
                </div>
            </div>
    )
}