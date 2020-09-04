import React from 'react'
import Button from '../../components/Button'
import ActiveButton from '../../components/ActiveButton'
import Fade from 'react-reveal/Fade'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/131ab1e3-046c-4dc3-a345-f8353de3e4b6_3.JPG?auto=compress,format'

export default function TheVision(){
    return(
        <div className={styles.the_vision}>
            <Fade clear>
                <img src={bg} className={styles.the_vision_image_container}/>
            </Fade>
            <Fade cascade bottom>
                <div>
                    <h2>Shareholder Primacy Failed Us</h2>
                    <div className={styles.button_container}>
                        <Button label='The Moment' hoverColor='#ff8d39'/>
                        <Button label='The Facts' hoverColor='#ff8d39'/>
                        <ActiveButton label="The Vision" color='#ff8d39'/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}