import { useEffect, useState } from "react";
const Modal = ({message= '', modal, setModal}) => {
    const [messageColor, setMessageColor] = useState('')
    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
      };
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
      useEffect(() => {
        if(message.includes("success")){
            setMessageColor("green")
          } else {
            setMessageColor("red")
          }
      }, [])
      
    return (
        <>
        {modal &&
            <div className="modal-wrapper">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  {
                    message !== '' && <p className={messageColor}>{message + ' !'}</p> 
                  }
                    <button className="close-modal" onClick={toggleModal}>
                        X
                    </button>
                </div>
            </div>
       }
        </>
    )
}

export default Modal