import React from 'react'
import styles from './styles.module.css'

export default function ActiveButton(props){
    return (
        <button 
        className={styles.button}
        style={{color: props.color}}>
            {props.label}
        </button>
    )
}