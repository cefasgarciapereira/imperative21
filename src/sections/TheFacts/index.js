import React from 'react'
import Button from '../../components/Button'
import ActiveButton from '../../components/ActiveButton'
import Fade from 'react-reveal/Fade'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/ae9d3667-df2d-4258-af08-e9f6914bfd0a_2.JPG?auto=compress,format'

export default function TheFacts(){
    return(
        <Fade bottom cascade>
            <div className={styles.the_facts} id="the_facts">
                <Fade clear duration={2000}>
                    <img src={bg} className={styles.the_facts_image_container} alt="Os Fatos"/>
                </Fade>
                
                <h2>Precisamos gerar valor para todos os stakeholders, não apenas aos acionistas.</h2>
                <div className={styles.button_container}>
                    <AnchorLink href='#the_moment'>
                    <Button label='O Momento' hoverColor='#545c5e'/>
                    </AnchorLink>
                    <ActiveButton label="Os fatos" color='#545c5e'/>
                    <AnchorLink href='#the_vision'>
                        <Button label='A Visão' hoverColor='#545c5e'/>
                    </AnchorLink>
                </div>
            </div>
        </Fade>

    )
}