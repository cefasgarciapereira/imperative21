import React from 'react'
import styles from './styles.module.css'

export default function Button(props){
    return <button className={props.active ? styles.active_button : styles.button}>{props.label}</button>
}