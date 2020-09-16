import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo_capitalismo_consciente = require('../../../../static/coalisao_brasil/capitalismo_consciente.svg')
const logo_ethos = require('../../../../static/coalisao_brasil/ethos.svg')
const logo_paco_global = require('../../../../static/coalisao_brasil/paco_global.svg')
const logo_sistema_b = require('../../../../static/coalisao_brasil/sistema_b.svg')
const logo_all_set = require('../../../../static/coalisao_brasil/all_set.png')
const logo_avante = require('../../../../static/coalisao_brasil/avante.jpeg')
const logo_az_quest = require('../../../../static/coalisao_brasil/az_quest.jpg')
const logo_dengo = require('../../../../static/coalisao_brasil/dengo.png')
const logo_fama = require('../../../../static/coalisao_brasil/fama.jpg')
const logo_grupo_gaia = require('../../../../static/coalisao_brasil/grupo_gaia.png')
const logo_reserva = require('../../../../static/coalisao_brasil/reserva.png')
const logo_wright_capital = require('../../../../static/coalisao_brasil/wright_capital.png')


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
                            <li className={styles.logo_grid_item}><a><img src={logo_ethos}  alt="Logo Ethos"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_paco_global} alt="Logo Paco Global"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_sistema_b} alt="Logo Sistema B"/></a></li>
                        </ul>
                    </Fade>
                </div>

                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Doadores</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a><img src={logo_ethos}  alt="Logo Ethos"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_all_set} alt="Logo All Set"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_avante} alt="Logo Avante"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_az_quest} alt="Logo AZ Quest"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_dengo} alt="Logo Dengo"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_fama} alt="Logo Fama"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_grupo_gaia} alt="Logo Grupo Gaia"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_reserva} alt="Logo Reserva"/></a></li>
                            <li className={styles.logo_grid_item}><a><img src={logo_wright_capital} alt="Logo Wright Capital"/></a></li>
                        </ul>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}