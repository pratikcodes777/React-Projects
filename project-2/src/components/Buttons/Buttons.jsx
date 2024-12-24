import styles from './Buttons.module.css'


const Buttons = (props) => {
    const {isOutline, text, icon, ...rest} = props;  //object destructuring

    return ( 
    <button {...rest} className={isOutline ? styles.outline_button : styles.primary_button}>
        {icon}
        {text}
    </button> 
);
}
 
export default Buttons;