import styles from './Contact.module.css'
import Buttons from '../Buttons/Buttons';
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";


const ContactForm = () => {
    return ( 
        <section className={styles.container}>
        
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Buttons text='VIA SUPPORT CHAT' icon={<MdMessage/>}/>
                <Buttons text='VIA CALL' icon={<MdCall/>}/>
            </div>
            <Buttons 
            isOutline = {true}
            text='VIA EMAIL FORM' 
            icon={<MdOutlineMessage/>}
            />

        
        </div>
        <div className={styles.contact_image}></div>

        </section>
        
     );
}
 
export default ContactForm;