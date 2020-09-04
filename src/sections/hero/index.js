import React from 'react'
import Button from '../../components/Button'
import ActiveButton from '../../components/ActiveButton'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/9d4cf8f3-1083-499b-828d-997bd3ee044e_1.JPG?auto=compress,format'

export default function Hero(){
    return(
        <div className={styles.hero} id='the_moment'>
            <Fade clear>
                <img src={bg} className={styles.hero_image_container} alt="The Moment Image"/>
            </Fade>
            <Slide bottom>
                <span>Our Economic System is Broken.</span>
            </Slide>
            <Fade bottom>
                <h1>It’s Time To Reset Capitalism.</h1>
                <div className={styles.button_container}>
                    <ActiveButton label="The Moment" color='#0058e0'/>
                    <AnchorLink href='#the_facts'>
                        <Button label='The Facts' hoverColor='#0058e0'/>
                    </AnchorLink>
                    <AnchorLink href='#the_vision'>
                        <Button label='The Vision' hoverColor='#0058e0'/>
                    </AnchorLink>
                </div>
            </Fade>
        </div>
    )
}