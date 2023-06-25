import TitleMenuView from "../TitleMenuView";
import Navigation from "../../Navigation";
import { useState } from "react";
import Modal from "../../Modal";
const CreateStockReady = () => {
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')
    return (
        <div>
            <Navigation /> 
            <TitleMenuView titleMenu="CREATE STOCK READY" />
            <div className='main-content-wrapper'>
                <div className='main-content'>
                <button onClick={() => setModal(true)} className="btn-modal">
        Open
      </button>
                    <Modal message={"success"} setModal={setModal} modal={modal}/>
                </div>
            </div>
        </div>
    )
}

export default CreateStockReady;