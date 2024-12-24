import styles from './Contact.module.css'
import Buttons from '../Buttons/Buttons';
import { MdMessage } from "react-icons/md";




const ContactForm = () => {
    return ( 
        <section className={styles.container}>
        
        <div className={styles.contact_form}>
        <Buttons text='VIA SUPPORT CHAT' icon={<MdMessage/>}/>
        <Buttons text='VIA CALL' icon={<MdMessage/>}/>
        </div>
        <div className={styles.contact_image}></div>

        </section>
        
     );
}
 
export default ContactForm;