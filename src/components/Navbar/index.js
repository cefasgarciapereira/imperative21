import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import styles from './styles.module.css'

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <AnchorLink href='#the_moment'>
                    <li>1</li>
                </AnchorLink>

                <AnchorLink href='#the_facts'>
                    <li>2</li>
                </AnchorLink>

                <AnchorLink href='#the_vision'>
                    <li>3</li>
                </AnchorLink>
            </ul>
        </div>
    )
}