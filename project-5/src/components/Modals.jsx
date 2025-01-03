const Modals = ({isOpen , onClose, children}) => {
    return (  
        <>{
            isOpen && <div>Models</div>
        }
        </>
    );
}
 
export default Modals;