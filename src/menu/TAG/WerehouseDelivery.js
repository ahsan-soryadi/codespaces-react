import { useState } from 'react';
import TitleMenuView from '../TitleMenuView';
const WerehouseDelivery = () => {
    const [from, setFrom] = useState('');
    return (
        <div>
            <TitleMenuView titleMenu="PENGIRIMAN ANTAR GUDANG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    {/* <h1>test</h1> */}
                    <div className='form-control'>
                        <form>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Nama Pengirim:</label>
                                <input
                                    type="text"
                                    required
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WerehouseDelivery;