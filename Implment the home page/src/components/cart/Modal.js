import React,{Fragment} from "react";
import { ReactDOM } from "react";
import classes from './Modal.classes.css';

const Modal = props => {
    
    const Backdrop = props => {

return <div className={classes.backdrop} onClick={props.onClose} />
    }

    const ModalOverlay =props =>{
        return <div classes={classes.modal}>
            <div className={classes.content}>{props.children}</div>

        </div>
    }

    const protalElement = document.getElementById('overlays')


    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,protalElement)}
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>,protalElement)}
    </Fragment>
         
    }
    export default Modal;
