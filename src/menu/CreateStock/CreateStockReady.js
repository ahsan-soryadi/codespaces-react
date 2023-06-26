import TitleMenuView from "../TitleMenuView";
import Navigation from "../../Navigation";
import { useState } from "react";
import Modal from "../../Modal";
import {InvalidInputMessage, useCheckNumber, useCheckNoPO } from "../../Utils";
import { json } from "react-router-dom";
const CreateStockReady = () => {
    const [noPO, setNoPO] = useState('')
    const [jenisBarang, setJenisBarang] = useState('')
    const [produkSeri, setProdukSeri] = useState('')
    const [merkBarang, setMerkBarang] = useState('')
    const [peruntukan, setPeruntukan] = useState('')
    const [serialNumber, setSerialNumber] = useState('')
    const [serialNumberInput, setSerialNumberInput] = useState([])
    const usernameID = localStorage.getItem("usernameID")
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')
    let isNoPOExist = useCheckNoPO(noPO)

    const isDisabled = () => {
        if(noPO.length > 0 &&
            noPO > 0 &&
            jenisBarang.length > 0 &&
            produkSeri.length > 0 &&
            merkBarang.length > 0 &&
            peruntukan.length > 0 &&
            serialNumber.length > 0 &&
            isNoPOExist) {
                return false
            } else {
                return true
            }
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(serialNumber)
    }

    const checkStockQty = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/stock/checkQtyPO', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({noPO: noPO})
        })
        .then(response => response.json())
        .then(data => {
            let snInput = []
            if(data.qtyPO > 0) {
                for(let i = 0; i < data.qtyPO; i++){
                    snInput.push(<>
                    <div className="col-3">
                    <label key={"label" + i+1}>Serial Number {i+1}</label>
                </div>
                <div className="col-9">
                        <input key={i} type="text"
                            value={serialNumber}
                            required
                            onChange={(e) => setSerialNumber([...e.target.value])}
                            maxLength="5">
                        </input>
                </div>
                    </>)
                }
                setSerialNumberInput([...snInput])
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
                                            setSerialNumberInput([])
                                        }}
                                        maxLength="5">
                                    </input>
                                    <span><button disabled={!isNoPOExist} className="btn btn-primary" onClick={checkStockQty}>Check No. PO</button></span>
                                    {!isNoPOExist && <InvalidInputMessage message={"No. PO Tidak Ada"} />}
                            </div>
                            {/* <div className="col-1">
                                
                            </div> */}
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
                                <select required value={jenisBarang} onChange={(e) => setJenisBarang(e.target.value)}>
                                    <option>--Pilih Jenis Barang--</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="tangga">Tangga</option>
                                    <option value="kabelFO">Kabel FO</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Produk Seri</label>
                            </div>
                            <div className="col-9">
                                <select required value={produkSeri} onChange={(e) => setProdukSeri(e.target.value)}>
                                    <option>--Pilih Produk Seri--</option>
                                    <option value="X45J">X450J</option>
                                    <option value="ASXWD">ASXWD</option>
                                    <option value="FO-123C">FO-123C</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Merk Barang</label>
                            </div>
                            <div className="col-9">
                                <select required value={merkBarang} onChange={(e) => setMerkBarang(e.target.value)}>
                                    <option>--Pilih Merk Barang</option>
                                    <option value="asus">Asus</option>
                                    <option value="krisbow">Krisbow</option>
                                    <option value="jembo">Jembo</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Peruntukan</label>
                            </div>
                            <div className="col-9">
                                <select required value={peruntukan} onChange={(e) => setPeruntukan(e.target.value)}>
                                    <option>--Pilih Peruntukan Barang</option>
                                    <option value="HCM">HCM</option>
                                    <option value="Operational">Operational</option>
                                    <option value="Commerce">Commerce</option>
                                    <option value="Finance">Finance</option>
                                </select>
                            </div>
                            {serialNumberInput}
                            {/* <div className="col-2">
                                <label>Serial Number</label>
                            </div>
                            <div className="col-9">
                                    <input type="text"
                                        value={serialNumber}
                                        required
                                        onChange={(e) => setSerialNumber([...e.target.value])}
                                        maxLength="5">
                                    </input>
                            </div> */}
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