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

        <form>
           <div className={styles.form_control}>
           <label htmlFor="name">Name</label>
           <input type="text" name='name'/>
           </div>
        </form>
        </div>

       
        <div className={styles.contact_image}></div>

        </section>
        
     );
}
 
export default ContactForm;