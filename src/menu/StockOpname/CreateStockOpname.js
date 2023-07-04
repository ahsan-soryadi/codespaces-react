import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import Modal from '../../Modal';

const CreateStockOpname = () => {
    const [tableData, setTableData] = useState(null);
    const [serialNumber, setSerialNumber] = useState([])
    const [isSetuju, setIsSetuju] = useState(false)
    const tableHeaders = ["No", "Nama Produk", "Produk series", "Qty"];
    const [barangData, setBarangData] = useState([])
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)
    const username = localStorage.getItem('userName')
    const lokasiGudang = localStorage.getItem('lokasiGudang')
    const tanggalStockOpname = `${new Date().getDate()}-${new Date().getUTCMonth()}-${new Date().getUTCFullYear()}`;

    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/barang/getAllBarangCatalogue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify(
                {
                locationId: localStorage.getItem('lokasiGudangID')
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                
                setTableData(data.map((item, idx) => {
                    const jenisBarang = item.jenis_barang.charAt(0).toUpperCase() + item.jenis_barang.slice(1)
                    const produkSeri = item.produk_seri
                    return{
                        'no': idx+1,
                        'jenisBarang': jenisBarang,
                        'produkSeri': produkSeri,
                        'Qty': item.qty
                    }
                }))
            }
        })
        return () => {
            ignore = true;
        }
    },[])

    const isDisabled = () =>{
        if(barangData.length > 0 && isSetuju){
            return false
        } else {
            return true
        }
    }

    const checkSerialNumber = (e, jenisBarang, idx) => {
        e.preventDefault()
        fetch('http://localhost:3001/barang/checkSerialNumberByJenis', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify(
                {
                serialNumber: serialNumber[idx],
                locationId: localStorage.getItem('lokasiGudangID'),
                jenisBarang: jenisBarang
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            data.no = idx
            let matchString = 'Not Match'
            if(data.isSerialNumberExist === 'true'){
                matchString = 'Match'
            }
            
            let newBarangData = {no: data.no+1, serialNumber: data.serialNumber, match: matchString, jenisBarang: jenisBarang }
            setBarangData([...barangData, newBarangData])
            // console.log('barangData = ', barangData)
        })
        .catch(error => console.log(error))
    }

    const handleSetSerialNumber = (e, index) => {
        let temp = serialNumber.map(sn=>sn)
        temp[index] = e.target.value
        setSerialNumber(temp)
    }

    const resetBarangData = (e, index, jenisBarang) => {
        // console.log(serialNumber)
        // let newSerialNumber = serialNumber.filter((item, idx) => idx !== index)
        // setSerialNumber(newSerialNumber)
        let newBarangData = barangData.filter((item) => item.jenisBarang !== jenisBarang)
        setBarangData(newBarangData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/stockOpname/addStockOpname', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({
                barang: barangData,
                usernameId:parseInt(localStorage.getItem("usernameID")),
                tanggalSo: tanggalStockOpname,
                lokasiGudangId: parseInt(localStorage.getItem("lokasiGudangID"))
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            if(data.message === 'ok'){
                setMessage('Success')
                setBarangData([])
                setSerialNumber([])
                setIsSetuju(false)
                setModal(true)
            } else {
                setModal(true)
                setMessage('Error')
            }
        })
        .catch(error => console.log(error))
        console.log("barangData = ", barangData)
    }
    return (
        <div>
            <Navigation />
            <TitleMenuView titleMenu="LIST SO" />
            <Modal message={message} setModal={setModal} modal={modal}/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <div className="form-control">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className='col-2'>
                                    <label>Nama Gudang</label>
                                </div>
                                <div className='col-9'>
                                    <label>{lokasiGudang}</label>
                                </div>
                                <div className='col-2'>
                                    <label>Petugas Gudang</label>
                                </div>
                                <div className='col-9'>
                                    <label>{username}</label>
                                </div>
                                <div className='col-2'>
                                    <label>Tgl Stock Opname</label>
                                </div>
                                <div className='col-9'>
                                    <label>{tanggalStockOpname}</label>
                                </div>
                            </div>
                            <div className='row row-cols-4 justify-content-md-center'>
                                {tableData && tableData.map((item, idx) => {
                                    return (
                                        <>
                                            <div className='col-5'>
                                                {tableData !== null ? <TableTemplate tableData={item} tableHeaders={tableHeaders}></TableTemplate> : "Loading"}
                                            </div>

                                            <div className="col-3">
                                                <input type="text"
                                                    value={serialNumber[idx]}
                                                    onChange={(e) => handleSetSerialNumber(e, idx)}
                                                    maxLength="10"
                                                    placeholder={"Serial Number Barang"}>
                                                </input>
                                            </div>
                                            <div className='col-2'>
                                                <button type="button" value="check Serial Number" className="btn btn-primary" onClick={(e) => checkSerialNumber(e, item.jenisBarang, idx)}>Check SN</button>
                                            </div>
                                            <div className='col-2'>
                                                <button type="button" value="check Serial Number" className="btn btn-primary blue" onClick={(e) => resetBarangData(e, idx, item.jenisBarang)}>Reset</button>
                                            </div>
                                            <div className='col-8' style={{ marginTop: "50px", marginBottom: "250px" }}>

                                                <table className='table table-striped'>
                                                    <thead>
                                                        <tr>
                                                            {/* <td>No</td> */}
                                                            <td>Serial Number</td>
                                                            <td>Match / Not Match</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            barangData &&
                                                            barangData.map((barang, i) => {
                                                                if (barang.no - 1 === idx) {
                                                                    return (
                                                                        <tr key={'tr' + i}>
                                                                            {/* <td key={'td'+i}>{i}</td> */}
                                                                            <td key={'td' + barang.serialNumber}>{barang.serialNumber}</td>
                                                                            <td key={'td' + barang.match}>{barang.match}</td>
                                                                        </tr>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <label>
                                        <input type='checkbox' value={isSetuju} onChange={() => setIsSetuju(current => !current)} />
                                        Data yang saya masukkan adalah benar
                                    </label>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "20px" }}>
                                <div className="col-2">
                                    <button type="submit" disabled={isDisabled()}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateStockOpname;