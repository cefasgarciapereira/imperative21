import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'

export default function ContentSection(){
    return(
        <div>
            <div className={styles.content_section}>
                <div className={styles.content_section_inner}>
                    <Fade bottom cascade>
                        <div className={styles.text_section}>
                                <p>
                                    A pandemia global de saúde, a crise econômica e os protestos por justiça racial 
                                    revelaram um problema mais profundo e fundamental: um sistema econômico que recompensa 
                                    a maximização da riqueza acima do bem-estar e prioriza o individualismo à interdependência.
                                </p>
                                <h2>
                                    Hoje, temos a oportunidade de reimaginar e redesenhar nosso futuro. 
                                </h2>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}