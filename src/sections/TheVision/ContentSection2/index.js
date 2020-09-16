import React from 'react'
import styles from './styles.module.css'
import Fade from 'react-reveal/Fade'

export default function ContentSection2(){
    return(
        <div className={styles.content_section}>
            <div className={styles.content_section_inner}>
                <Fade bottom cascade>
                    <div className={styles.text_section}>
                        <h2>Este é o Imperativo do nosso tempo.</h2>
                        <h3>A Imperative 21 é uma rede de coalizões liderada por empresas que 
                            estão impulsionando a mudança do sistema econômico.</h3>
                        <p>Estamos unidos pela nossa visão e missão compartilhada de equipar os 
                            líderes para conduzir de forma consistente com os princípios de liderança do 
                            século 21; para mudar a narrativa cultural sobre o papel dos negócios e finanças na 
                            sociedade; e para realinhar os incentivos em um ambiente de impacto estimulado por 
                            boas políticas públicas. </p>

                        <p>Juntos, e com outros, vamos apoiar líderes nos negócios e nas finanças, influenciadores 
                            e formuladores de políticas públicas que estejam prontos para enfrentar este momento com uma 
                            ação ousada e significativa. Nossa rede é fluida, permitindo que coalizões se formem e se dissolvam 
                            em torno de diferentes trabalhos, e que aliados se aproximem e se afastem com base em suas capacidades 
                            e interesses.</p>

                        
                        <p>
                            O objetivo de qualquer campanha é impulsionar a ação. A Redefina o Capitalismo irá conectar líderes empresariais
                            inspirados ou interessados que ainda perguntam: “O que eu faço agora?”. Para isso, aqui estão as melhores
                            ferramentas e recursos, oferecidos por cada uma das organizações da rede Imperative 21, com o objetivo
                            de apoiar a criação de ações significativas.
                        </p>

                        <h3>Crie com interdependência</h3>

                        <p>
                            Um sistema econômico mais saudável que reconhece a interdependência entre pessoas, o planeta e as economias; 
                            equilibra as relações entre o setor privado, o governo e a sociedade civil; garante que todos tenham acesso 
                            a oportunidades seguras e justas no mercado.
                        </p>

                        <h3>Invista em mudanças estruturais</h3>

                        <p>
                            Um sistema econômico que elimina a desigualdade estrutural; garante que os cargos de liderança e as empresas 
                            sejam mais inclusivas e que o investimento em negócios de impacto seja mais acessível; usa a tecnologia para 
                            promover ideais democráticos e a favor dos direitos humanos; e amplifica a voz, empodera e cria oportunidade 
                            para aqueles atualmente marginalizados.
                        </p>

                        <ul>
                            <li>Torne-se um líder responsável por justiça, equidade, diversidade e inclusão ao lado da comunidade de Empresas B: 
                                Comprometa-se a ser uma empresa antirracista</li>
                            <li>Leia o guia do B Lab de ação empresarial por justiça, equidade, diversidade e inclusão durante a COVID-19</li>
                        </ul>

                        <h3>Considere todas as partes interessadas</h3>

                        <p>
                            Um sistema econômico que mede o sucesso com base em métricas comuns e credíveis de criação de valor sustentável 
                            para todos os stakeholders; criar incentivos que recompensem negócios e investimentos criando valor social e ambiental; 
                            e aprimorar os padrões do dever fiduciário.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}