import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'

export default function ContentSection(){
    const [counter, setCounter] = useState(0)

    const animateValue = (start, end, duration) => {
        var range = end - start;
        var current = start;
        var increment = 800000;
        var stepTime = Math.abs(Math.floor(duration / range));
        var timer = setInterval(function() {
            if(current < end){
                current += increment;
            }else{
                current = end;
            }
            setCounter(current);
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div>
            <Fade 
            bottom 
            cascade
            onReveal={() => animateValue(0,305000000,5000)}>
                <div className={styles.content_section}>
                    <div className={styles.content_section_inner}>
                        <h2>
                            O fato é que nossa economia nunca estará funcionando 
                            em seu pleno potencial de geração de valor para as pessoas 
                            e para o planeta em um sistema em que os incentivos e a cultura 
                            vigente não estão alinhados a uma visão mais sustentável.
                        </h2>
                    </div>
                </div>
                <div className={styles.number_counter}>
                    <div className={styles.number_counter_inner}>
                        <div style={{display: 'felx', justifyContent: 'space-around'}}>
                            <span className={styles.number_counter_number}>{numberWithCommas(counter)}</span>
                            <br/>
                            <span className={styles.number_counter_support}>desempregados</span>
                        </div>
                        <div className={styles.number_counter_group}>
                            <p className={styles.number_counter_body}>Estima-se que mais 305 milhões de trabalhadores em 
                            tempo integral estarão desempregados no segundo trimestre de 2020.</p>
                            <p className={styles.number_counter_credit}>Organização Internacional Do Trabalho <br/> 17 de maio de 2020</p>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}