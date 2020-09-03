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
                        <span>BUSINESS LEADERS</span>
                        <IoMdClose size={24} className={styles.close} onClick={() => toggleModal()}/>
                    </div>
                    <h2>Let's talk.</h2>
                    <p>Together we can work toward the new way of doing business.</p>
                <form
                action="https://formspree.io/FORM_ID"
                method='POST'>
                    <input className={styles.form_control} style={{gridArea: 'a'}} type="text" name="first-name" placeholder="First Name *" required/>
                    <input className={styles.form_control} style={{gridArea: 'b'}} type="text" name="last-name" placeholder="Last Name *" required/>
                    <input className={styles.form_control} style={{gridArea: 'c'}} type="text" name="email" placeholder="Email Address *" required/>
                    <input className={styles.form_control} style={{gridArea: 'd'}} type="text" name="company" placeholder="Company *" required/>
                    <input className={styles.form_control} style={{gridArea: 'e'}} type="text" name="title" placeholder="Title *" required/>
                    <textarea type="text" name="message" style={{gridArea: 'f'}} placeholder="Message *" required></textarea>
                    <input className={styles.button} type="submit" value="Submit"/>
                </form>
            </ReactModal>
        </div>
    );
}  