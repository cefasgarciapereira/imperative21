import React from 'react'
import Button from '../../components/Button'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/ae9d3667-df2d-4258-af08-e9f6914bfd0a_2.JPG?auto=compress,format'

export default function TheFacts(){
    return(
        <div className={styles.the_facts}>
            <img src={bg} className={styles.the_facts_image_container}/>
            <h2>Shareholder Primacy Failed Us</h2>
            <div className={styles.button_container}>
                <Button label='The Moment'/>
                <Button label='The Facts' active/>
                <Button label='The Vision' />
            </div>
        </div>
    )
}