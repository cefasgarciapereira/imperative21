import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'

export default function ContentSection(){
    const [counter, setCounter] = useState(0)

    const animateValue = (start, end, duration) => {
        var range = end - start;
        var current = start;
        var increment = 1000000;
        var stepTime = Math.abs(Math.floor(duration / range));
        var timer = setInterval(function() {
            current += increment;
            setCounter(current);
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    useEffect(() => animateValue(0,305000000,2000),[])

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div>
            <Fade bottom cascade>
                <div className={styles.content_section}>
                    <div className={styles.content_section_inner}>
                        <h2>
                            The fact is our economy will never live up to its full
                            potential for people and the planet in a system with 
                            misaligned incentives and a culture with contrary norms.
                        </h2>
                    </div>
                </div>
                <div className={styles.number_counter}>
                    <div className={styles.number_counter_inner}>
                        <div>
                            <span className={styles.number_counter_number}>{numberWithCommas(counter)}</span>
                            <br/>
                            <span className={styles.number_counter_support}>unemployed</span>
                        </div>
                        <div className={styles.number_counter_group}>
                            <p className={styles.number_counter_body}>An estimated 305 million more full time workers will be out of work in the 2nd quarter of 2020.</p>
                            <p className={styles.number_counter_credit}>International Labour <br/> Organization <br/> May 17, 2020</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}