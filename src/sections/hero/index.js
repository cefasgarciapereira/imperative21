import React from 'react'
import Button from '../../components/Button'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/9d4cf8f3-1083-499b-828d-997bd3ee044e_1.JPG?auto=compress,format'

export default function Hero(){
    return(
        <div className={styles.hero}>
            <img src={bg} className={styles.hero_image_container}/>
            <span>Our Economic System is Broken.</span>
            <h1>It’s Time To Reset Capitalism.</h1>
            <div className={styles.button_container}>
                <Button label='The Moment' active activeColor="#0058e0"/>
                <Button label='The Facts' />
                <Button label='The Vision' />
            </div>
        </div>
    )
}