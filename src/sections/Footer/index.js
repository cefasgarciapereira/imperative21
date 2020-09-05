import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer(){
    return(
        <div className={styles.footer}>
            <Fade clear cascade>
                <div className={styles.footer_inner}>
                    <p className={styles.footer_message}>
                    A mudança de sistema requer todos nós. Vamos ao trabalho. Juntos.
                    </p>
                    <div className={styles.footer_section}>
                        <h2 className={styles.footer_logo}>IMPERATIVE 21</h2>

                        <ul className={styles.footer_list}>
                            <AnchorLink href='#the_moment' style={{textDecoration: 'none'}}>
                                <li className={styles.footer_item}><button className={styles.footer_link}>O Momento</button></li>
                            </AnchorLink>
                            <AnchorLink href='#the_facts' style={{textDecoration: 'none'}}>
                                <li className={styles.footer_item}><button className={styles.footer_link}>Os Fatos</button></li>
                            </AnchorLink>
                            <AnchorLink href='#the_vision' style={{textDecoration: 'none'}}>
                                <li className={styles.footer_item}><button className={styles.footer_link}>A Visão</button></li>
                            </AnchorLink>
                        </ul>
                    </div>

                    <em className={styles.footer_thanks}>Nossos agradecimentos à Fundação Ford e à Fundação Skoll por seu apoio catalisador.</em>
                    
                    <div className={styles.footer_copyright}>
                        <p>©2020</p> <span>Privacidade</span>
                    </div>
                </div>
            </Fade>
        </div>
    )
}