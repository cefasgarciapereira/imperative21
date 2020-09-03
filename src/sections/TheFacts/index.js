import React from 'react'
import Button from '../../components/Button'
import ActiveButton from '../../components/ActiveButton'
import styles from './styles.module.css'

const bg = 'https://images.prismic.io/imperative-21/ae9d3667-df2d-4258-af08-e9f6914bfd0a_2.JPG?auto=compress,format'

export default function TheFacts(){
    return(
        <div className={styles.the_facts}>
            <img src={bg} className={styles.the_facts_image_container}/>
            <h2>Shareholder Primacy Failed Us</h2>
            <div className={styles.button_container}>
                <Button label='The Moment' hoverColor='#545c5e'/>
                <ActiveButton label="The Facts" color='#545c5e'/>
                <Button label='The Vision' hoverColor='#545c5e'/>
            </div>
        </div>
    )
}