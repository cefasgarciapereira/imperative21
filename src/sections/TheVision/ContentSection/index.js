import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function ContentSection(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <div className={styles.text_section}>
                    <Fade bottom cascade>
                        <div>
                            <p>
                                Para construir um futuro onde todas as pessoas possam trabalhar com 
                                dignidade e cuidar de si mesmas e de seus entes queridos, onde o nosso 
                                planeta esteja saudável e a nossa economia prospere, precisamos reimaginar 
                                e redesenhar nosso sistema econômico para que ele funcione para todos nós, 
                                tanto hoje como no futuro.
                            </p>
                            
                            <h3>
                                Nós visualizamos um futuro onde nossa sociedade, nossos líderes e nossas 
                                políticas públicas trabalham em conjunto para criar prosperidade compartilhada.
                            </h3>
                        </div>
                    </Fade>

                    <Fade bottom cascade>
                        <div>
                            <h2>Sociedade do Futuro</h2>
                            <p>
                                Nós vislumbramos uma cultura que valoriza nossa ligação uns com os outros, 
                                com nossas comunidades e com o planeta. Como resultado, as empresas e os investidores mais 
                                celebrados e recompensados se esforçam para gerar valor para todas as partes interessadas o tempo todo.
                            </p>
                        </div>
                    </Fade>

                    <Fade bottom cascade>
                        <div>
                            <h2>Líderes do Futuro</h2>
                            <p>
                                Nós vislumbramos uma economia em que líderes empresariais e 
                                investidores criam valor no longo prazo para todas as partes interessadas 
                                com base em padrões, estruturas e normas comuns confiáveis, que alinhem os 
                                interesses das empresas, das pessoas e da sociedade.
                            </p>
                        </div>
                    </Fade>

                    <Fade bottom cascade>
                        <div>
                            <h2>Política do Futuro </h2>
                            <p>
                                Nós vislumbramos políticas públicas que privilegiem um maior 
                                impacto positivo para as partes interessadas e criam condições 
                                de concorrência equitativas elevadas, nas quais todas as empresas e 
                                instituições financeiras são responsáveis por seu impacto não só sobre 
                                rendimento financeiro, mas também para todas as partes interessadas e os 
                                sistemas naturais e sociais dos quais dependem mercados saudáveis e toda a vida.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
