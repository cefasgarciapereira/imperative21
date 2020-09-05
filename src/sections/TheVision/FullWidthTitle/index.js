import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade';

export default function FullWidthTitle(){
    return(
        <Fade bottom>
            <div className={styles.content_section}>
                <div className={styles.content_section_inner}>
                    <div className={styles.text_section}>
                        <h2>O momento de agir é agora!</h2>
                    </div>
                </div>
            </div>
        </Fade>
    )
}