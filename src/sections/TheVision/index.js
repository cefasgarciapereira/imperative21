import React from 'react'
import Button from '../../components/Button'
import ActiveButton from '../../components/ActiveButton'
import Fade from 'react-reveal/Fade'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/131ab1e3-046c-4dc3-a345-f8353de3e4b6_3.JPG?auto=compress,format'

export default function TheVision(){
    return(
        <div className={styles.the_vision} id="the_vision">
            <Fade clear>
                <img src={bg} className={styles.the_vision_image_container} alt="A Visão"/>
            </Fade>
            <Fade cascade bottom>
                <div>
                    <h2>O futuro é para todos nós</h2>
                    <div className={styles.button_container}>
                        <AnchorLink href='#the_moment'>
                            <Button label='O Momento' hoverColor='#ff8d39'/>
                        </AnchorLink>
                        <AnchorLink href='#the_facts'>
                            <Button label='Os Fatos' hoverColor='#ff8d39'/>
                        </AnchorLink>
                        <ActiveButton label="A Visão" color='#ff8d39'/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}