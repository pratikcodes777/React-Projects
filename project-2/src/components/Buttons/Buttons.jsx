import styles from './Buttons.module.css'
import { MdMessage } from "react-icons/md";

const Buttons = (props) => {
    return ( 
    <button className={styles.primary_button}>
        {props.icon}
        {props.text}
    </button> 
);
}
 
export default Buttons;