import React from 'react'
import Button from '../../components/Button'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/131ab1e3-046c-4dc3-a345-f8353de3e4b6_3.JPG?auto=compress,format'

export default function TheVision(){
    return(
        <div className={styles.the_vision}>
            <img src={bg} className={styles.the_vision_image_container}/>
            <h2>Shareholder Primacy Failed Us</h2>
            <div className={styles.button_container}>
                <Button label='The Moment'/>
                <Button label='The Facts' />
                <Button label='The Vision' active activeColor='#ff8d39'/>
            </div>
        </div>
    )
}