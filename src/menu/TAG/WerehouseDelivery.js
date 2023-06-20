import { useState } from 'react';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import { useLocation } from 'react-router-dom';

const WerehouseDelivery = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [from, setFrom] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNumber = (event) =>{
        if(!((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode === 8 || event.keyCode === 9)){
            event.preventDefault();
        }
    }
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="PENGIRIMAN ANTAR GUDANG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    {/* <h1>test</h1> */}
                    <div className='form-control'>
                        <form>
                            <div className='row'>
                                <div className='col-2'>
                                    <label>NIK/Nama Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                            disabled
                                            type="text"
                                            required
                                            // value={user.nik + '/' + user.name}
                                            value={userName}
                                            // onChange={(e) => setFrom(e.target.value)}
                                        />
                                </div>
                                <div className='col-2'>
                                    <label>No Telp Pengirim</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        maxLength="12"
                                        // value={phoneNumber}
                                        onKeyDown={handleNumber}
                                        // onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-2'>
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
                                <div className='col-2'>
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
                                <div className='col-2'>
                                    <label>Gudang Penerima</label>
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
                                <div className='col-2'>
                                    <label>Pilih Pengiriman</label>
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
                                <div className='col-2'>
                                    <label>NO DO</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Qty Pengiriman</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        onKeyDown={handleNumber}
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-2'>
                                    <label>Jasa Pengiriman</label>
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
                                <div className='col-2'>
                                    <label>Serial Number</label>
                                </div>
                                <div className='col-9'>
                                    <input
                                        type="text"
                                        required
                                        // value={from}
                                        // onChange={(e) => setFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-2'>
                                    <button type='submit'>Submit</button>
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