// import Style from "./modal.module.css";
import { useContext } from "react"
import Styles from "./model.module.css"
import  ReactDOM  from "react-dom"
import { ModalContextApi } from "../../context/ModalContext"

const Modal = ({children}) => {
    let {toggle, handleToggle} = useContext(ModalContextApi)
  return ReactDOM.createPortal(
    <>
        <section className={Styles.modalContainer}>
            <>
                <button onClick={handleToggle}>{toggle ? "X" : "open"}</button>
            </>
            {toggle ? children :""}
        </section>,
    </>,
    document.getElementById('modal')
    )
  
}

export default Modal