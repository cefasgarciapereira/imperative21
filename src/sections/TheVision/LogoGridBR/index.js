import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo_capitalismo_consciente = require('../../../../static/coalisao_brasil/capitalismo_consciente.svg')
const logo_ethos = require('../../../../static/coalisao_brasil/ethos.svg')
const logo_paco_global = require('../../../../static/coalisao_brasil/paco_global.svg')
const logo_sistema_b = require('../../../../static/coalisao_brasil/sistema_b.svg')
const logo_bbb = require('../../../../static/coalisao_brasil/bbb.svg')

export default function LogoGridBR(){
    return(
        <div className={styles.logo_grid}>
            <Fade bottom cascade>
                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Realização</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a><img src={logo_sistema_b} style={{alignSelf: 'left'}} alt="Logo Sistema B"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_capitalismo_consciente} alt="Logo Capitalismo Consciente"/></a></li>
                        </ul>
                    </Fade>
                </div>

                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Apoio Institucional</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a><img src={logo_bbb} alt="Logo Brasil Bolsa Balcão"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_ethos}  alt="Logo Brasil Bolsa Balcão"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_paco_global} alt="Logo Paco Global"/></a></li>
                        </ul>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}