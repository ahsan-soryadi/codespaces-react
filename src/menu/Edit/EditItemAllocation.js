import TitleMenuView from "../TitleMenuView";
import Navigation from "../../Navigation";
import { useState } from "react";
import Modal from "../../Modal"
import TableTemplate from "../TableTemplate";
import { InvalidInputMessage, useCheckSerialNumber, useGetBarangBySerialNumber } from "../../Utils";

const EditItemAllocation = () => {
    const [serialNumber, setSerialNumber] = useState('')
    // const [isSerialNumberExist, setIsSerialNumberExist] = useState('false')
    const [peruntukan, setPeruntukan] = useState('')
    const [alasan, setAlasan] = useState('')
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')
    const [checkStatus, setCheckStatus] = useState(false)
    const tableHeaders = ['No', 'Serial Number', 'Jenis', 'Merk', 'Peruntukan']
    const barangData = useGetBarangBySerialNumber(serialNumber, checkStatus)
    let isSerialNumberExist = useCheckSerialNumber(serialNumber)

    //perbaiki update table munculnya detail serial number 
    
    const isDisabled = () => {
        if(peruntukan.length > 0 &&
            isSerialNumberExist[0]=== 'true' &&
            serialNumber.length > 0
            ){
                return false
            } else {
                return true
            }
    }

    const checkSerialNumber = () => {
        setCheckStatus(currentStatus => setCheckStatus(!currentStatus))
    }

    const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3001/barang/editPeruntukanBarang' ,{
        method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify(
                {
                serialNumber: serialNumber,
                peruntukan: peruntukan,
                alasan: alasan
                }
            )
    })
    .then(response => response.json())
    .then(data => {
        if(data.message === 'ok'){
            setModal(true)
            setMessage('Success')
            setSerialNumber('')
            setAlasan('')
            setPeruntukan('')
        } else {
            setModal(true)
            setMessage('Error')
        }
    })
    .catch(error => console.log(error))
   } 
    return (
        <div>
            <Navigation />
            <TitleMenuView titleMenu="EDIT PERUNTUKAN BARANG" />
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <div className="form-control">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-2">
                                    <label >Serial Number</label>
                                </div>
                                <div className="col-9">
                                    <div className="col-9">
                                        <input type="text"
                                            value={serialNumber}
                                            required
                                            onChange={(e) => setSerialNumber(e.target.value)}
                                            maxLength="10"
                                            placeholder={"Serial Number Barang"}>
                                        </input>
                                    </div>
                                    <span><button type="button"  value="check Serial Number" className="btn btn-primary" onClick={checkSerialNumber}>Check SN</button></span>
                                    <div className='col-9'>
                                        {
                                            (isSerialNumberExist[0] === 'true' && barangData.data ) &&
                                            <TableTemplate tableData={barangData.data} tableHeaders={tableHeaders} isPadingEnabled={false}></TableTemplate>
                                        }
                                        {
                                            (isSerialNumberExist[0] === 'false' && serialNumber.length > 0) && <InvalidInputMessage message={'Serial Number Tidak Ditemukan'}/>
                                        }
                                    </div>
                                </div>
                                <div className="col-2">
                                    <label>Peruntukan Baru</label>
                                </div>
                                <div className="col-9">
                                    <select required value={peruntukan} onChange={(e) => setPeruntukan(e.target.value)}>
                                        <option defaultChecked={true}>--Pilih Peruntukan Barang</option>
                                        <option value="HCM">HCM</option>
                                        <option value="Operational">Operational</option>
                                        <option value="Commerce">Commerce</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label>Keterangan /Alasan digantinya Peruntukan</label>
                                </div>
                                <div className="col-9">
                                    <textarea cols={30} value={alasan} onChange={(e) => setAlasan(e.target.value)} placeholder="Alasan"></textarea>
                                </div>
                                <div className="col-2">
                                    <button type="submit" disabled={isDisabled()}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Modal message={message} setModal={setModal} modal={modal} />
                </div>
            </div>
        </div>
    )
}
export default EditItemAllocation;