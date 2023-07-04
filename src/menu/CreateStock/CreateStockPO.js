import TitleMenuView from "../TitleMenuView";
import Navigation from "../../Navigation";
import { InvalidInputMessage, useCheckNoPO, useCheckNumber } from "../../Utils";
import { useState } from "react";
import Modal from "../../Modal";
const CreateStockPO = () => {
    const [noPO, setNoPO] = useState('')
    const [jenisBarang, setJenisBarang] = useState('')
    const [produkSeri, setProdukSeri] = useState('')
    const [merkBarang, setMerkBarang] = useState('')
    const [qtyPO, setQtyPO] = useState('')
    // const [isNoPOExist, setIsNoPOExist] = useState(false)
    const [modal, setModal] = useState(false)
    const [message, setMessage] = useState('')
    const usernameID = localStorage.getItem("usernameID")
    let isNoPOExist = useCheckNoPO(noPO)

    const isDisabled = () => {
        if(noPO.length > 0 &&
            noPO > 0 &&
            jenisBarang.length > 0 &&
            produkSeri.length > 0 &&
            merkBarang.length > 0 &&
            qtyPO.length > 0 && 
            qtyPO > 0 &&
            !isNoPOExist) {
                return false
            } else {
                return true
            }
    }
    
//    const handleInputNumber = (e) => {
//      useCheckNumber(e)
//    }

//    const handleCheckNoPO = (e) => {
      
//         setNoPO(e.target.value)
    //    if (e.target.value !== '') {
    //        fetch('http://localhost:3001/stock/checkNoPO', {
    //            method: 'POST',
    //            headers: { 'Content-Type': 'application/json' },
    //            credentials: "same-origin",
    //            body: JSON.stringify({ noPO: e.target.value })
    //        })
    //            .then(response => response.json())
    //            .then(data => {
    //                 setIsNoPOExist(data.isNoPOExist)
    //                if (!isNoPOExist) {
    //                    setNoPO(e.target.value)
    //                }
    //             //    console.log("no. po:", noPO)
    //            })
    //            .catch(error => console.log(error))
    //    }
    // }

   const handleSubmit = (e) => {
    e.preventDefault()
        fetch('http://localhost:3001/stock/createStockPO', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({
                noPO: noPO,
                jenisBarang: jenisBarang,
                produkSeri: produkSeri,
                merkBarang: merkBarang,
                qtyPO: qtyPO,
                usernameID: usernameID
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return "error"
                }
            })
            .then(data => {
                if (data.affectedRows > 0) {
                    setModal(true)
                    setMessage("Succes")
                    setNoPO('')
                    setProdukSeri('')
                    setJenisBarang('')
                    setMerkBarang('')
                    setQtyPO('')
                } else {
                    setModal(true)
                    setMessage("Error")
                }
            })
            .catch(error => console.log(error))
    
    }
    
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="CREATE STOCK PO"/>
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
                                        onChange={(e) => setNoPO(e.target.value.replace(/\D/, ''))}
                                        maxLength="5">
                                </input>
                                {isNoPOExist && <InvalidInputMessage message={"No. PO Sudah Ada"}/>}
                                {noPO <=0 && <InvalidInputMessage message={"No. PO Invalid"}/>}
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
                                <select required value={jenisBarang} onChange={(e) => setJenisBarang(e.target.value)}>
                                    <option>--Pilih Jenis Barang--</option>
                                    <option value="Laptop">Laptop</option>
                                    <option value="Tangga">Tangga</option>
                                    <option value="kabel FO">Kabel FO</option>
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
                                    <option value="Asus">Asus</option>
                                    <option value="Krisbow">Krisbow</option>
                                    <option value="Jembo">Jembo</option>
                                </select>
                            </div>
                            <div className="col-2">
                                <label>Qty. PO</label>
                            </div>
                            <div className="col-9">
                                    <input type="text"
                                        value={qtyPO}
                                        onChange={(e) => setQtyPO(e.target.value.replace(/\D/, ''))}
                                        maxLength={3}>
                                    </input>
                                    {qtyPO <= 0 && <InvalidInputMessage message={"Qty PO Minimal 1"} />}
                            </div>
                            <div className="col-2">
                                <button type="submit" disabled={isDisabled()}>Submit</button>
                            </div>
                        </div>
                    </form>
                    </div>
                    
                </div>
            </div>
            <Modal message={message} modal={modal} setModal={setModal}/>
        </div>
    )
}
export default CreateStockPO;