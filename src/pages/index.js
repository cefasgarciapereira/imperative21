import React from "react"
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Hero from '../sections/hero'
import {default as Section1} from '../sections/hero/ContentSection'
import TheFacts from '../sections/TheFacts'
import {default as Section2} from '../sections/TheFacts/ContentSection'
import SimpleStat from '../sections/TheFacts/SimpleStat'
import MoneyStack from '../sections/TheFacts/MoneyStack'
import BannerStat from '../sections/TheFacts/BannerStat'
import StatisticPeople from '../sections/TheFacts/StatisticPeople'
import Callout from '../sections/TheFacts/Callout'
import TheVision from '../sections/TheVision'
import {default as TheVisionContentSection} from '../sections/TheVision/ContentSection'
import {default as TheVisionCallout} from '../sections/TheVision/Callout'
import FullWidthTitle from '../sections/TheVision/FullWidthTitle'
//import TwitterShare from '../sections/TheVision/TwitterShare'
import NewsletterPrompt from '../sections/TheVision/NewsletterPrompt'
import {default as TheVisionContentSection2} from '../sections/TheVision/ContentSection2'
import LogoGrid from '../sections/TheVision/LogoGrid'
import LogoGridBR from '../sections/TheVision/LogoGridBR'
import StatGrid from '../sections/TheVision/StatGrid'
import Footer from '../sections/Footer'
import { Helmet } from "react-helmet"
import styles from './index.module.css'

export default function Home() {

  return(
      <div className={styles}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Imperative 21</title>
          <link rel="canonical" href="http://imperative21.com.br" />
        </Helmet>       
        <Header/>
        <Navbar/>
        <Hero/>    
        <Section1/>
        <TheFacts/>
        <Section2/>
        <SimpleStat
        prefix="26 indivíduos concentram"
        firstLine="metade da riqueza"
        secondLine="de toda a humanidade"
        credit="Oxfam 2019"
        />
        <MoneyStack/>
        <SimpleStat
        prefix="O rendimento dos homens (R$ 2.555)"
        firstLine="é 28,7% maior que o"
        secondLine="das mulheres (R$ 1.985)"
        credit="IBGE"
        />
        <BannerStat/>
        <StatisticPeople/>
        <Callout/>
        <TheVision/>
        <TheVisionContentSection/>
        <TheVisionContentSection2/>
        <FullWidthTitle/>
        <NewsletterPrompt/>
        <TheVisionCallout/>
        {/*<TwitterShare/>*/}
        <LogoGrid/>
        <LogoGridBR/>
        <StatGrid/>
        <Footer/>
      </div>
  )
}
