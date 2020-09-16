import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo1 = require('../../../../static/coalisao_brasil/capitalismo_consciente.svg')
const logo2 = require('../../../../static/coalisao_brasil/ethos.svg')
const logo3 = require('../../../../static/coalisao_brasil/paco_global.svg')
const logo4 = require('../../../../static/coalisao_brasil/sistema_b.svg')

export default function LogoGridBR(){
    return(
        <div className={styles.logo_grid}>
            <Fade bottom cascade>
                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Coalisão Brasil</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a><img src={logo1} alt="Logo Capitalismo Consciente"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo2} style={{width: '80%'}} alt="Logo Ethos"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo3} alt="Logo Paco Global"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo4} alt="Logo Sistema B"/></a></li>
                        </ul>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}