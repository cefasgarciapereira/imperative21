import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo1 = 'https://images.prismic.io/imperative-21/d5b48824-336d-46a3-8f24-2084badc43f2_bLab.svg?auto=compress,format'
const logo2 = 'https://images.prismic.io/imperative-21/8fdfe1d3-30ea-42ab-bc8d-ff717ed5d0d3_bteam.svg?auto=compress,format'
const logo3 = 'https://images.prismic.io/imperative-21/9c3688ca-a23e-4d55-bc77-0170e364dbed_cecp.svg?auto=compress,format'
const logo4 = 'https://images.prismic.io/imperative-21/5b2d5a17-c5a1-419c-9898-bf5e4e51a431_conscious-capitalism.svg?auto=compress,format'
const logo5 = 'https://images.prismic.io/imperative-21/51a08f93-fb79-43f3-a2f4-a4549a4ca2f7_inclusive-capitalism.svg?auto=compress,format'
const logo6 = 'https://images.prismic.io/imperative-21/bd507e9a-a951-49f7-9746-7585b4d27b7d_just-capital.svg?auto=compress,format'

export default function LogoGrid(){
    return(
        <div className={styles.logo_grid}>
            <Fade bottom cascade>
                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Entidades Organizadoras</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a href="https://bcorporation.net/about-b-lab"><img src={logo1} alt="Logo B Lab"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://bcorporation.net/about-b-lab"><img src={logo2} alt="Logo The B Team"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://cecp.co/"><img src={logo3} alt="Logo CECP"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.consciouscapitalism.org/"><img src={logo4} alt="Logo Conscious Capitalism"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.inc-cap.com/"><img src={logo5} alt="Logo Inclusive Capitalism"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://justcapital.com/"><img src={logo6} alt="Logo Just Capital"/></a></li>
                        </ul>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}