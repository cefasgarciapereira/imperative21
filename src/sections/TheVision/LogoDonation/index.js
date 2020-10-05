import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo_all_set = require('../../../../static/coalisao_brasil/all_set.png')
const logo_avante = require('../../../../static/coalisao_brasil/avante.jpeg')
const logo_az_quest = require('../../../../static/coalisao_brasil/az_quest.jpg')
const logo_dengo = require('../../../../static/coalisao_brasil/dengo.png')
const logo_clearsale = require('../../../../static/coalisao_brasil/clearsale.png')
const logo_fama = require('../../../../static/coalisao_brasil/fama.jpg')
const logo_grupo_gaia = require('../../../../static/coalisao_brasil/grupo_gaia.png')
const logo_reserva = require('../../../../static/coalisao_brasil/reserva.png')
const logo_wright_capital = require('../../../../static/coalisao_brasil/wright_capital.png')
const logo_bresco = require('../../../../static/coalisao_brasil/bresco.svg')
const logo_sitawi = require ('../../../../static/coalisao_brasil/sitawi.png')


export default function LogoDonation(){
    return(
        <div className={styles.logo_grid}>
            <Fade bottom cascade>
                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Doadores</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a href="http://www.allsetcomunicacao.com.br/"><img src={logo_all_set} alt="Logo All Set"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.avante.com.vc/"><img src={logo_avante} alt="Logo Avante"/></a></li>
                            <li className={styles.logo_grid_item}><a href="http://azquest.com.br/"><img src={logo_az_quest} alt="Logo AZ Quest"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.bresco.com.br/"><img src={logo_bresco} style={{marginLeft: '3rem', width: '80%'}} alt="Logo Bresco"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://br.clear.sale/"><img src={logo_clearsale} alt="Logo Clearsale"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://dengo.com/"><img src={logo_dengo} style={{width: '60%'}} alt="Logo Dengo"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.famainvestimentos.com.br/"><img src={logo_fama} alt="Logo Fama"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://grupogaia.com.br/"><img src={logo_grupo_gaia} style={{width: '70%'}} alt="Logo Grupo Gaia"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.usereserva.com/"><img src={logo_reserva} alt="Logo Reserva"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.sitawi.net/?lang=pt"><img src={logo_sitawi} style={{width: '70%', marginLeft: '1.5rem'}} alt="Logo Sitawi"/></a></li>
                            <li className={styles.logo_grid_item}><a href="http://www.wright.capital/"><img src={logo_wright_capital} alt="Logo Wright Capital"/></a></li>
                        </ul>
                    </Fade>
                </div>
            </Fade>
        </div>
    )
}