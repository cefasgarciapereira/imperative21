import React from 'react'
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
            <div className={styles.logo_grid_inner}>
                <h3 className={styles.heading}>Fouding Partners</h3>

                <ul className={styles.logo_grid_list}>
                    <li className={styles.logo_grid_item}><a><img src={logo1} alt="logo1"/></a></li>
                    <li className={styles.logo_grid_item}><a><img src={logo2} alt="logo2"/></a></li>
                    <li className={styles.logo_grid_item}><a><img src={logo3} alt="logo3"/></a></li>
                    <li className={styles.logo_grid_item}><a><img src={logo4} alt="logo4"/></a></li>
                    <li className={styles.logo_grid_item}><a><img src={logo5} alt="logo5"/></a></li>
                    <li className={styles.logo_grid_item}><a><img src={logo6} alt="logo6"/></a></li>
                </ul>

            </div>
        </div>
    )
}