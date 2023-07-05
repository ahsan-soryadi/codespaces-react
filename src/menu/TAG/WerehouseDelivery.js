import { useEffect, useState } from 'react';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import { InvalidInputMessage, useCheckSerialNumber } from '../../Utils';
import Modal from '../../Modal';

const WerehouseDelivery = () => {
    const userName =localStorage.getItem('userName')
    const gudangPengirim = localStorage.getItem('lokasiGudang')
    const [tanggalPengiriman, setTanggalPengiriman] = useState('') 
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gudangList, setGudangList] = useState([])
    const [gudangPenerima, setGudangPenerima] = useState('')
    const [jenisPengiriman, setJenisPengiriman] = useState('')
    const [qty, setqty] = useState('')
    const [noResi, setNoResi] = useState('')
    const [jasaEkspedisi, setJasaEkspedisi] = useState('')
    const [serialNumber, setSerialNumber] = useState([])
    const [serialNumberInput, setSerialNumberInput] = useState([])
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)
    const isSerialNumberExist = useCheckSerialNumber(serialNumber)

    useEffect(() => {
        fetch('http://localhost:3001/gudang/getAllGudang')
        .then(response => response.json())
        .then(data => setGudangList(data))
        .catch(error => console.log(error))
    },[])

    const isDisabled = () => {
        if(phoneNumber.length > 0 &&
            gudangPenerima.length > 0 &&
            jenisPengiriman.length > 0 &&
            qty.length > 0 &&
            serialNumber.length > 0 ) {
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

    useEffect(() => {
        if(qty > 0){
            const snInput = []
            for(let i=0; i < qty;i++){
                snInput.push(i)
            }
            setSerialNumberInput(snInput)
        } else {
            setSerialNumberInput([])
        }
    }, [qty])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("gudang penerima = ", gudangPenerima)
        if(isSerialNumberExist !== undefined && isSerialNumberExist.every(sn => sn === 'true')){
            fetch('http://localhost:3001/tag/addPengirimanAg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify(
                    { 
                        usernameId: localStorage.getItem('usernameID'),
                        lokasiGudangId: localStorage.getItem('lokasiGudangID'),
                        tanggalPengiriman: tanggalPengiriman,
                        jenisPengiriman: jenisPengiriman,
                        jasaEkspedisi: jasaEkspedisi,
                        noResi: noResi,
                        phoneNumber: phoneNumber,
                        qty: qty,
                        serialNumber: serialNumber,
                        gudangPenerima: gudangPenerima

                    })
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === 'ok'){
                    setModal(true)
                    setMessage('Success')
                    setTanggalPengiriman('')
                    setGudangPenerima('')
                    setJasaEkspedisi('')
                    setJenisPengiriman('')
                    setNoResi('')
                    setqty('')
                    setSerialNumber('')
                } else {
                    setModal(true)
                    setMessage('Error')
                }

            })
            .catch(error => console.log(error))
        }
       
    }
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="PENGIRIMAN ANTAR GUDANG"/>
            <Modal message={message} setModal={setModal} modal={modal}/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    {/* <h1>test</h1> */}
                    <div className='form-control'>
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-2'>
                                    <label>Nama Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                            disabled
                                            type="text"
                                            value={userName}
                                        />
                                </div>
                                <div className='col-2'>
                                    <label>No Telp Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        maxLength="12"
                                        placeholder='081xxxxxxxxx'
                                        value={phoneNumber}
                                        required
                                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/, ''))}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Tgl Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="date"
                                        required
                                        value={tanggalPengiriman}
                                        onChange={(e) => setTanggalPengiriman(e.target.value)}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Gudang Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input type='text' disabled value={gudangPengirim}></input>
                                </div>
                                <div className='col-2'>
                                    <label>Gudang Penerima</label>
                                </div>
                                <div className='col-9'>
                                    <select
                                        type="text"
                                        required
                                        value={gudangPenerima}
                                        onChange={(e) => {
                                            setGudangPenerima(e.target.value.substring(0,1))
                                            // setGudangPenerima(e.target.value)
                                        }}
                                    >
                                        <option key={0} defaultChecked={true}>--Pilih Gudang Penerima--</option>
                                        {
                                            gudangList.length > 0 && gudangList.map(item => {
                                                return(
                                                    <>
                                                        <option key={item.id} id={item.id}>{item.id +' - '+item.namaGudang}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className='col-2'>
                                    <label>Pilih Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <select
                                        type="text"
                                        required
                                        value={jenisPengiriman}
                                        onChange={(e) => setJenisPengiriman(e.target.value)}
                                    >
                                        <option defaultChecked={true}>--Pilih Pengiriman--</option>
                                        <option name="Ekspedisi">Ekspedisi</option>
                                        <option name="Tanpa Ekspedisi">Tanpa Ekspedisi</option>
                                    </select>
                                </div>
                                { jenisPengiriman === 'Ekspedisi' &&
                                    <>
                                        <div className='col-2'>
                                            <label>Jasa Pengiriman</label>
                                        </div>
                                        <div className='col-9'>
                                            <input
                                                type="text"
                                                placeholder='Tiki/ JNE atau yang lainnya'
                                                required
                                                value={jasaEkspedisi}
                                                onChange={(e) => setJasaEkspedisi(e.target.value)}
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
                                        value={noResi}
                                        onChange={(e) => setNoResi(e.target.value)}
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
                                        value={qty}
                                        onChange={(e) => setqty(e.target.value.replace(/\D/, ''))}
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
                                                {isSerialNumberExist[i] === 'false' && <InvalidInputMessage message={"Serial Tidak Ditemukan"} />}

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
                </div>
            </div>
        </div>
    )
}
export default WerehouseDelivery;