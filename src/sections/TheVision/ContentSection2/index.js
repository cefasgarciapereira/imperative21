import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function ContentSection2(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <Fade bottom cascade>
                    <div className={styles.text_section}>
                        <h2>Este é o Imperativo do nosso tempo.</h2>
                        <h3>A Imperative 21 é uma rede de coalizões liderada por empresas que 
                            estão impulsionando a mudança do sistema econômico.</h3>
                        <p>Estamos unidos pela nossa visão e missão compartilhada de equipar os 
                            líderes para conduzir de forma consistente com os princípios de liderança do 
                            século 21; para mudar a narrativa cultural sobre o papel dos negócios e finanças na 
                            sociedade; e para realinhar os incentivos em um ambiente de impacto estimulado por 
                            boas políticas públicas. </p>

                        <p>Juntos, e com outros, vamos apoiar líderes nos negócios e nas finanças, influenciadores 
                            e formuladores de políticas públicas que estejam prontos para enfrentar este momento com uma 
                            ação ousada e significativa. Nossa rede é fluida, permitindo que coalizões se formem e se dissolvam 
                            em torno de diferentes trabalhos, e que aliados se aproximem e se afastem com base em suas capacidades 
                            e interesses.</p>

                        <ul>
                            <li>Tal coalizão está aproveitando o poder da cultura para exigir um sistema econômico 
                                que ofereça bem-estar compartilhado em um planeta saudável.</li>
                            <li>Outra está transformando as finanças para gerenciar o risco sistêmico.</li>
                            <li>Uma terceira está administrando um processo global para co-criar um conjunto de 
                                "imperativos para a mudança do sistema econômico” que dão à nossa comunidade de aliados maior coerência e poder.</li>
                        </ul>

                    </div>
                </Fade>
            </div>
        </div>
    )
}