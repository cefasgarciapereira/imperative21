import React, {useState} from 'react'
import styles from './styles.module.css'

export default function Button(props){
    const [isHovering, setIsHovering] = useState(false)

    return (
        <button 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={styles.button}
        style={isHovering ? {color: props.hoverColor} : {}}
        >
            {props.label}
        </button>
    )
}