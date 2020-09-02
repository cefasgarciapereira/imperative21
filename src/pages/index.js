import React from "react"
import Hero from '../sections/hero'
import {default as Section1} from '../sections/hero/ContentSection'
import TheFacts from '../sections/TheFacts'
import {default as Section2} from '../sections/TheFacts/ContentSection'
import {default as Section3} from '../sections/TheFacts/SimpleStat'
import MoneyStack from '../sections/TheFacts/MoneyStack'
import Footer from '../sections/Footer'
import styles from './index.module.css'

export default function Home() {

  return(
    <div className={styles}>
      <Hero/>    
      <Section1/>
      <TheFacts/>
      <Section2/>
      <Section3/>
      <MoneyStack/>
      <Footer/>
    </div>
  )
}
