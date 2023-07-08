import { useState, useEffect } from "react";
import { InvalidInputMessage } from "../../Utils";
import ModalTitleView from "../ModalTitleView";
import Modal from "../../Modal";
const ModalReceptionValidation = ({modal, setModal, modalData, barang = []}) => {
    const [serialNumber, setSerialNumber] = useState([])
    const [serialNumberInput, setSerialNumberInput] = useState([])
    const [isSerialNumberExist, setIsSerialNumberExist] = useState([])
    const [modalConfirm, setModalConfirm] = useState(false)
    const [message, setMessage] = useState('')
    const tanggalPenerimaan = `${new Date().getDate()}-${new Date().getUTCMonth()}-${new Date().getUTCFullYear()}`;
    
    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
      };
    //   console.log(modalData)
    // console.log(barang)
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

      const isDisabled = () => {
        if(isSerialNumberExist.every(sn => sn === true) && serialNumber.length === modalData.Qty){
            return false
        } else {
            return true
        }
      }

      const handleSetSerialNumber = (e, index) =>{
        let temp = serialNumber.map(sn=>sn)
        temp[index] = e.target.value
        let checkResult = []
        if(barang.includes(temp[index])){
            checkResult[index] = true
            setIsSerialNumberExist(checkResult)
        } else {
            checkResult[index] = false
            setIsSerialNumberExist(checkResult)
        }
        setSerialNumber(temp)
      }

      useEffect(() => {
        if(modalData.Qty > 0){
            const snInput = []
            for(let i=0; i < modalData.Qty;i++){
                snInput.push(i)
            }
            setSerialNumberInput(snInput)
        } else {
            setSerialNumberInput([])
        }
    }, [modalData.Qty])

      const handleSubmit = (e)=>{
        e.preventDefault()
        fetch('http://localhost:3001/tag/addPenerimaanAg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({
                pengirimanAgId: modalData.id,
                tanggalPenerimaan: tanggalPenerimaan,
                gudangPenerima: modalData.gudangPenerima,
                serialNumber: serialNumber
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.message=== 'ok'){
                setModalConfirm(true)
                setMessage('Success')
                setSerialNumber([])
            } else {
                setModalConfirm(true)
                setMessage('Erroe')
                
            }
        })
        .catch(error => console.log(error))
      }

    return (
        <>
        {modal &&
                <div className="modal-wrapper">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content lg">
                    <Modal modal={modalConfirm} setModal={setModalConfirm} message={message}></Modal>
                    <ModalTitleView titleMenu="VALIDASI PENERIMAAN"/>
                    <div className='form-control' style={{marginTop:"60px"}}>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-2'>
                                    <label>Nama Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                            disabled
                                            type="text"
                                            value={modalData.username}
                                        />
                                </div>
                                <div className='col-2'>
                                    <label>No Telp Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        maxLength="12"
                                        value={modalData.nomor_telepon}
                                        disabled
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Tgl Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="date"
                                        required
                                        value={modalData.tanggalPengiriman}
                                        disabled
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Gudang Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input type='text' disabled value={modalData.gudangPengirim}></input>
                                </div>
                                <div className='col-2'>
                                    <label>Gudang Penerima</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        value={modalData.gudangPenerima}
                                        disabled
                                    >    
                                    </input>
                                </div>
                                <div className='col-2'>
                                    <label>Pilih Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        value={modalData.jenisPengiriman}
                                        disabled
                                    >
                                    </input>
                                </div>
                                { modalData.jenisPengiriman === 'Ekspedisi' &&
                                    <>
                                        <div className='col-2'>
                                            <label>Jasa Pengiriman</label>
                                        </div>
                                        <div className='col-9'>
                                            <input
                                                type="text"
                                                value={modalData.jasaPengiriman}
                                                disabled
                                            />
                                        </div>
                                    </>
                                }
                                
                                <div className='col-2'>
                                    <label>NO Resi</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        value={modalData.no_resi}
                                        disabled
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Qty Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        maxLength={3}
                                        value={modalData.Qty}
                                        disabled
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Serial Number</label>
                                </div>
                                <div className='col-9'>
                                    {serialNumberInput.length > 0 && serialNumberInput.map(i => {
                                        return (
                                            <div key={"col9" + i} className="col-9">
                                                <input key={"input" + i} type="text"
                                                    value={serialNumber[i]}
                                                    required
                                                    onChange={(e) => handleSetSerialNumber(e, i)}
                                                    maxLength="10"
                                                    placeholder={"Serial Number Barang " + (i + 1)}>
                                                </input>
                                                {isSerialNumberExist[i] === false && <InvalidInputMessage message={"Serial Number Tidak Ditemukan"} />}

                                            </div>
                                        )
                                    })
                                    }
                                    </div>
                                    <div className='col-2'>
                                    <button type='submit' disabled={isDisabled()}>Submit</button>
                                </div>
                            </div>   
                        </form>
                    </div>
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>                    
                </div>
       }
        </>
    )
}

export default ModalReceptionValidation