import React from 'react'
import styles from './styles.module.css'

const twitter = "https://twitter.com/intent/tweet?text=Together%20we%20can%20redesign%20and%20reimagine%20our%20economic%20system%20to%20work%20for%20all%20of%20us%20today%20and%20for%20the%20long%20term.%20This%20is%20the%20imperative%20of%20our%20time.%20Let%E2%80%99s%20get%20to%20work.%20%23imperative21&url=https%3A%2F%2Fimperative21.co"

export default function TwitterShare(){

    const share = () =>{
        window.location.href = twitter
    }

    return(
        <div className={styles.share}>
            <div className={styles.share_inner}>
                <p className={styles.lead}>All of us</p>
                <h5 className={styles.heading}>Make your voice heard to strengthen the power of our collective calls for change.</h5>
                <button className={styles.button} onClick={() => share()}>Share the story</button>
            </div>
        </div>
    )
}