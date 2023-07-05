import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const WerehouseReceptionList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["No", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Tgl Pengiriman", "Jenis Pengiriman", "Ekspedisi", "No Resi", "Detail"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/tag/getAllPenerimaanAg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({locationId: localStorage.getItem('lokasiGudangID')})
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTableData(data.map(item => {
                    if(item.jasaPengiriman == null) {
                        item.jasaPengiriman = ' '
                    }
                    item.action = "<button type=\"button\" class=\"btn btn-sm btn-primary\" title=\"action-"+item.id+"\">Cek</button>"
                    return item
                }));
            }
        })
        return () => {
            ignore = true;
        }
    },[])
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="LIST PENERIMAAN ANTAR GUDANG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}
                </div>
            </div>
        </div>
    )
}
export default WerehouseReceptionList;