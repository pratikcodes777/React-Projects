import styles from './Contact.module.css'
import Buttons from '../Buttons/Buttons';
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { useState } from 'react';


const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const onClickCall = () =>{
        console.log("Calling.....")
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log("Name :" , e.target[0].value)
        console.log("Email :" , e.target[1].value)
        console.log("Text :" , e.target[2].value)
        setName(e.target[0].value)
        setEmail(e.target[1].value)
        setText(e.target[2].value)
    }


    return ( 
        <section className={styles.container}>
        
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Buttons text='VIA SUPPORT CHAT' icon={<MdMessage/>}/>
                <Buttons onClick={onClickCall} text='VIA CALL' icon={<MdCall/>} />
            </div>
            <Buttons 
            isOutline = {true}
            text='VIA EMAIL FORM' 
            icon={<MdOutlineMessage/>}
            /> 

            <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name'/>
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name='email'/>
            </div>

            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name='text' rows={8}/>
            </div>

            <div style={{
                display:"flex",
                justifyContent:"flex-end"
                }}>
                 <Buttons 
            text='SUBMIT' 
            /> 
            </div>

            <div className={styles.output}>
                {name+ " " + email +" " + text}
            </div>
           
            </form>
        </div>

       
        <div className={styles.contact_image}>
            <img src="/images/customer.svg" alt="../public/images/customer.svg" />
        </div>

        </section>
        
     );
}
 
export default ContactForm;