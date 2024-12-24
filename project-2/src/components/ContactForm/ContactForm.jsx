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
           
            </form>
        </div>

       
        <div className={styles.contact_image}>
            <img src="../public/images/customer.svg" alt="../public/images/customer.svg" />
        </div>

        </section>
        
     );
}
 
export default ContactForm;