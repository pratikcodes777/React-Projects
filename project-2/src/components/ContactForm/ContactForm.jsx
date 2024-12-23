import styles from './Contact.module.css'
import Buttons from '../Buttons/Buttons';


const ContactForm = () => {
    return ( 
        <section className={styles.container}>
        
        <div className={styles.contact_form}>
        <Buttons/>
        </div>
        <div className={styles.contact_image}></div>

        </section>
        
     );
}
 
export default ContactForm;