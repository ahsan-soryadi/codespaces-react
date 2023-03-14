import { useState } from 'react';
import TitleMenuView from '../TitleMenuView';
const WerehouseDelivery = () => {
    const [from, setFrom] = useState('');
    const user = {
        "nik": "20961546",
        "name": "I GUSTI NGURAH PANDU WIBISANA ANTARA", 
    }

    const handleTelpNumber = (event) =>{
        if((event.keyCode >= 48 && event.keyCode <= 57)){
            console.log('number')
            return true;
        } else {
            return false;
        }
    }
    return (
        <div>
            <TitleMenuView titleMenu="PENGIRIMAN ANTAR GUDANG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    {/* <h1>test</h1> */}
                    <div className='form-control'>
                        <form>
                            <div className='row'>
                                <div className='col-3'>
                                    <label>NIK/Nama Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                            readOnly
                                            type="text"
                                            required
                                            value={user.nik + '/' + user.name}
                                            // onChange={(e) => setFrom(e.target.value)}
                                        />
                                </div>
                                <div className='col-3'>
                                    <label>No Telp Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        maxLength="12"
                                        onKeyDown={handleTelpNumber}
                                        // onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Tgl Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="date"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Gudang Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <select
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                        
                                    >
                                        <option>--Pilih Gudang Pengirim--</option>
                                        <option name="gudang1">Gudang 1</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>Gudang Penerima:</label>
                                </div>
                                <div className='col-9'>
                                    <select
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option>--Pilih Gudang Penerima--</option>
                                        <option name="gudang1">Gudang 1</option>
                                        <option name="gudang2">Gudang 2</option>
                                        <option name="gudang3">Gudang 3</option>
                                        <option name="gudang4">Gudang 4</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>Pilih Pengiriman:</label>
                                </div>
                                <div className='col-9'>
                                    <select
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option name="ekspedisi">Ekspedisi</option>
                                        <option name="tanpaEkspedisi">Tanpa Ekspedisi</option>
                                    </select>
                                </div>
                                <div className='col-3'>
                                    <label>NO DO:</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Qty Pengiriman:</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Jasa Pengiriman:</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        placeholder='Tiki/ JNE atau yang lainnya'
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-3'>
                                    <label>Serial Number:</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
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