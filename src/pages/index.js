import React from "react"
import Header from '../components/Header'
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
import TwitterShare from '../sections/TheVision/TwitterShare'
import NewsletterPrompt from '../sections/TheVision/NewsletterPrompt'
import {default as TheVisionContentSection2} from '../sections/TheVision/ContentSection2'
import LogoGrid from '../sections/TheVision/LogoGrid'
import StatGrid from '../sections/TheVision/StatGrid'
import Footer from '../sections/Footer'
import styles from './index.module.css'

export default function Home() {

  return(
    <div className={styles}>
      <Header/>
      <Hero/>    
      <Section1/>
      <TheFacts/>
      <Section2/>
      <SimpleStat
      prefix="26 individuals own"
      firstLine="more wealth than"
      secondLine="half of humanity"
      credit="Oxfam 2019"
      />
      <MoneyStack/>
      <SimpleStat
      prefix="The median family wealth
      for white people in the US is"
      firstLine="10x higher than it"
      secondLine="is for Black people"
      credit="United States Federal Reserve System, 2016"
      />
      <BannerStat/>
      <StatisticPeople/>
      <Callout/>
      <TheVision/>
      <TheVisionContentSection/>
      <TheVisionCallout/>
      <FullWidthTitle/>
      <TwitterShare/>
      <NewsletterPrompt/>
      <TheVisionContentSection2/>
      <LogoGrid/>
      <StatGrid/>
      <Footer/>
    </div>
  )
}
