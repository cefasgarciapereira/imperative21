import React from 'react'
import Modal from '../../../components/Modal'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function NewsletterPrompt(){
    return(
        <div className={styles.newsletter_prompt}>
            <div className={styles.newsletter_inner}>
                <Fade bottom cascade>
                    <div className={styles.left_group}>
                        <p className={styles.lead}>LÍDERES EMPRESARIAIS</p>
                        <h5 className={styles.heading}>Incorpore a nova forma de fazer negócios.</h5>
                        <Fade clear>
                            <ul>
                                <li>Lidere para o longo prazo</li>
                                <li>Mensure o que importa</li>
                                <li>Adote governança de stakeholders</li>
                            </ul>
                        </Fade>
                        <p className={styles.footer_text}>Entre em contato para saber mais sobre as 
                        ferramentas ou caso tenha interesse em fazer parcerias.</p>
                        <Modal label="PARTICIPE"/>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className={styles.right_group}>
                        <p className={styles.lead}>FORMULADORES DE POLÍTICAS</p>
                        <h5 className={styles.heading}>Construa as bases para uma economia com o humano em primeiro lugar</h5>
                        <Fade clear>
                            <p className={styles.footer_text}>Vamos co-criar as novas regras para o novo sistema juntos.</p>
                        </Fade>
                        <Modal label="PARTICIPE"/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}