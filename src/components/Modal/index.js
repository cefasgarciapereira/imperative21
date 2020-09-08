import React, {useState}from 'react'
import ReactModal from 'react-modal'
import styles from './styles.module.css'
import { IoMdClose } from "react-icons/io";
import modalStyles from './styles'

export default function Modal(props){
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () =>{
        setShowModal(!showModal)
    }
    
    return (
        <div className={styles.modal_container}>
            <button 
            className={styles.button} 
            onClick={() => toggleModal()}>
                {props.label}
            </button>
            <ReactModal 
                isOpen={showModal}
                contentLabel="Minimal Modal Example"
                className={styles.modal}
                overlayClassName={styles.modal_overlay}>
                    <div className={styles.modal_header}>
                    <span>{props.title}</span>
                        <IoMdClose size={24} className={styles.close} onClick={() => toggleModal()}/>
                    </div>
                    <h2>{props.call}</h2>
                    <p>{props.message}</p>
                <form
                action="https://formspree.io/moqkgngk"
                method='POST'>
                    <input className={styles.form_control} style={{gridArea: 'a'}} type="text" name="first-name" placeholder="First Name *" required/>
                    <input className={styles.form_control} style={{gridArea: 'b'}} type="text" name="last-name" placeholder="Last Name *" required/>
                    <input className={styles.form_control} style={{gridArea: 'c'}} type="text" name="email" placeholder="Email Address *" required/>
                    <input className={styles.form_control} style={{gridArea: 'd'}} type="text" name="company" placeholder="Company *" required/>
                    <input className={styles.form_control} style={{gridArea: 'e'}} type="text" name="title" placeholder="Title *" required/>
                    <textarea type="text" name="message" style={{gridArea: 'f'}} placeholder="Message *" required></textarea>
                    <input className={styles.button} type="submit" value="Enviar"/>
                </form>
            </ReactModal>
        </div>
    );
}  