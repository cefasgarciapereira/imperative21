import React from 'react'
import styles from './styles.module.css'
import people from '../../../../public/people.svg'
import Fade from 'react-reveal/Fade'

export default function StatisticPeople(){
    return(
            <div className={styles.statistic_people}>
                <div className={styles.statistic_inner}>
                    <Fade cascade bottom>
                        <div className={styles.statistic_group}>
                            <p className={styles.statistic_support}>
                                "COVID really lays out the limits of thinking of people as solely 
                                interchangeable units and not as human beings, treating them with 
                                dignity and respect as an integral part of the production enterprise"
                            </p>
                            <img src={people}></img>
                            <p className={styles.statistic_credit}>
                                Rebecca Henderson, Harvard Business School professor
                                <br/>
                                and author of “Reimagining Capitalism in a World on Fire”
                            </p>
                        </div>
                </Fade>
                </div>
            </div>
    )
}