import React from 'react'
import Fade from 'react-reveal/Fade';
import styles from './styles.module.css'
const logo_capitalismo_consciente = require('../../../../static/coalisao_brasil/capitalismo_consciente.svg')
const logo_ethos = require('../../../../static/coalisao_brasil/ethos.svg')
const logo_paco_global = require('../../../../static/coalisao_brasil/paco_global.svg')
const logo_sistema_b = require('../../../../static/coalisao_brasil/sistema_b.svg')
const logo_bbb = require('../../../../static/coalisao_brasil/bbb.svg')
const logo_akatu = require('../../../../static/coalisao_brasil/akatu.png')
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
const logo_gerdau = require ('../../../../static/coalisao_brasil/gerdau.png')
const logo_movida = require ('../../../../static/coalisao_brasil/movida.png')

export default function LogoGridBR(){
    return(
        <div className={styles.logo_grid}>
            <Fade bottom cascade>
                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Coalizão Brasil</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a href="https://bcorporation.net/"><img src={logo_sistema_b} style={{width: '75%'}} alt="Logo Sistema B"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.ccbrasil.cc/?gclid=CjwKCAjwwab7BRBAEiwAapqpTBtx_SDTIgHjs9_zJF9nqqZU29eqMjvy3qJAWURlIBOg63bWe_OYYxoCXooQAvD_BwE"><img src={logo_capitalismo_consciente} alt="Logo Capitalismo Consciente"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.akatu.org.br/"><img src={logo_akatu} alt="Logo Instituo Akatu"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.ethos.org.br/"><img src={logo_ethos}  alt="Logo Brasil Bolsa Balcão"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.unglobalcompact.org/engage-locally/latin-america/brazil"><img src={logo_paco_global} style={{width: '90%'}} alt="Logo Pacto Global"/></a></li>
                        </ul>
                    </Fade>
                </div>

                <div className={styles.logo_grid_inner}>
                    <h3 className={styles.heading}>Apoio Institucional</h3>
                    <Fade bottom cascade>
                        <ul className={styles.logo_grid_list}>
                            <li className={styles.logo_grid_item}><a href="http://www.allsetcomunicacao.com.br/"><img src={logo_all_set} alt="Logo All Set"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.avante.com.vc/"><img src={logo_avante} alt="Logo Avante"/></a></li>
                            <li className={styles.logo_grid_item}><a href="http://azquest.com.br/"><img src={logo_az_quest} alt="Logo AZ Quest"/></a></li>
                            <li className={styles.logo_grid_item}><a href="http://www.b3.com.br/pt_br/"><img src={logo_bbb} alt="Logo Brasil Bolsa Balcão"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.bresco.com.br/"><img src={logo_bresco} style={{marginLeft: '3rem', width: '80%'}} alt="Logo Bresco"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://br.clear.sale/"><img src={logo_clearsale} alt="Logo Clearsale"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://dengo.com/"><img src={logo_dengo} style={{width: '60%'}} alt="Logo Dengo"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.famainvestimentos.com.br/"><img src={logo_fama} alt="Logo Fama"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www2.gerdau.com.br/"><img src={logo_gerdau} alt="Logo Gerdau"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://grupogaia.com.br/"><img src={logo_grupo_gaia} style={{width: '70%'}} alt="Logo Grupo Gaia"/></a></li>
                            <li className={styles.logo_grid_item}><a href="https://www.movida.com.br/"><img src={logo_movida} alt="Logo Movida"/></a></li>
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