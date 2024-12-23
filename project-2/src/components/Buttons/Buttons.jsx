import styles from './Buttons.module.css'
import { MdMessage } from "react-icons/md";

const Buttons = () => {
    return ( 
    <div className={styles.primary_button}>
        <MdMessage />
        VIA SUPPORT CHAT
    </div> 
);
}
 
export default Buttons;