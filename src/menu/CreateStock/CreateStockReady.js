import TitleMenuView from "../TitleMenuView";
import Navigation from "../../Navigation";
import { useState } from "react";
import Modal from "../../Modal";
import {InvalidInputMessage, useCheckNoPO, useCheckSerialNumber } from "../../Utils";
const CreateStockReady = () => {
    const [noPO, setNoPO] = useState('')
    const [peruntukan, setPeruntukan] = useState('')
    const [dataPO, setDataPO] = useState({'jenisBarang': '', 'produkSeri': '', 'merkBarang':''})
    const [serialNumber, setSerialNumber] = useState([])
    const [serialNumberInput, setSerialNumberInput] = useState('')
    // const usernameID = localStorage.getItem('usernameID')
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')
    // const [checkStatus, setCheckStatus] = useState(false)
    let isNoPOExist = useCheckNoPO(noPO)
    const isSerialNumberExist = useCheckSerialNumber(serialNumber)

    const isDisabled = () => {
        if(noPO.length > 0 &&
            noPO > 0 &&
            peruntukan.length > 0 &&
            serialNumber.length > 0 &&
            isNoPOExist) {
                return false
            } else {
                return true
            }
    }

    const handleSetSerialNumber = (e, index) => {
        let temp = serialNumber.map(sn=>sn)
        temp[index] = e.target.value
        setSerialNumber(temp)
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        // setCheckStatus(currentStatus => {
        //     setCheckStatus(!currentStatus)
        //   })
        const data = []
        for(let i=0; i< serialNumber.length; i++){
            data.push({
                ...dataPO, peruntukan: peruntukan, serialNumber: serialNumber[i]
            })
        }
        // console.log(data)
        console.log("isSerialNumber from create Stock : ", isSerialNumberExist)
        //hanya submit kalau serial number tidak ada
        if(isSerialNumberExist.length !== 0 && isSerialNumberExist.every(item => item === 'false')){
            fetch('http://localhost:3001/stock/addStockReady', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({ data: data })
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message === 'ok') {
                        setModal(true)
                        setMessage("Success")
                        setNoPO('')
                        setPeruntukan('')
                        setSerialNumber([])
                        setDataPO({ 'jenisBarang': '', 'produkSeri': '', 'merkBarang': '' })
                        setSerialNumberInput('')
                    } else {
                        setModal(true)
                        setMessage("Error")
                    }
                })
                .catch(error => console.log(error))
        }
    }

    const getDataPO = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/stock/getDataPO', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({noPO: noPO})
        })
        .then(response => response.json())
        .then(data => {
            let snInput = []
            if(data.dataPO) {
                setDataPO(data.dataPO)
                for(let i = 0; i < data.dataPO.qtyPO; i++){
                    snInput.push(i)
                }
                setSerialNumberInput(snInput)
            }
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <Navigation /> 
            <TitleMenuView titleMenu="CREATE STOCK READY" />
            <div className='main-content-wrapper'>
                <div className='main-content'>
                <div className="form-control">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-2">
                                <label>Nomor PO</label>
                            </div>
                            <div className="col-9">
                                    <input type="text"
                                        value={noPO}
                                        required
                                        onChange={(e) => {
                                            setNoPO(e.target.value.replace(/\D/, ''))
                                        }}
                                        maxLength="5">
                                    </input>
                                    <span><button type="button" disabled={!isNoPOExist} value="check No. PO" className="btn btn-primary" onClick={getDataPO}>Check No. PO</button></span>
                                    {!isNoPOExist && <InvalidInputMessage message={"No. PO Tidak Ada"} />}
                            </div>
                            <div className="col-2">
                                <label>Tanggal</label>
                            </div>
                            <div className="col-9">
                                <input type="date" required></input>
                            </div>
                            <div className="col-2">
                                <label>Jenis Barang</label>
                            </div>
                            <div className="col-9">
                                <input type="text" disabled value={dataPO.jenisBarang}></input>
                            
                            </div>
                            <div className="col-2">
                                <label>Produk Seri</label>
                            </div>
                            <div className="col-9">
                            <input type="text" disabled value={dataPO.produkSeri}></input>
                                
                            </div>
                            <div className="col-2">
                                <label>Merk Barang</label>
                            </div>
                            <div className="col-9">
                            <input type="text" disabled value={dataPO.merkBarang}></input>
                               
                            </div>
                            <div className="col-2">
                                <label>Peruntukan</label>
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
                                <label >Serial Number</label>
                            </div>
                            <div className="col-9">
                            {serialNumberInput.length > 0 && serialNumberInput.map(i => {
                                return (
                            <div key={"col9"+i} className="col-9">
                                    <input key={"input"+i} type="text"
                                        value={serialNumber[i]}
                                        required
                                        onChange={(e) => handleSetSerialNumber(e, i)}
                                        maxLength="10"
                                        placeholder={"Serial Number Barang " + (i+1)}>
                                    </input>
                                    {isSerialNumberExist[i] === 'true' &&<InvalidInputMessage message={"Serial Number Sudah Ada"}/>}
                                    
                            </div>
                                )
                            })
                            }
                            </div>
                            <div className="col-2">
                                <button type="submit" disabled={isDisabled()}>Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                    <Modal message={message} setModal={setModal} modal={modal}/>
                </div>
            </div>
        </div>
    )
}

export default CreateStockReady;