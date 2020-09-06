import React from 'react'
import Hero from '../sections/Privacy/Hero'
import ContentSection from '../sections/Privacy/ContentSection'
import Footer from '../sections/Footer'
import styles from './index.module.css'

export default function Privacy(){
    return(
        <div className={styles}>
            <Hero/>
            <ContentSection/>
            <Footer backgroundColor="#fff001"/>
        </div>
    )
}