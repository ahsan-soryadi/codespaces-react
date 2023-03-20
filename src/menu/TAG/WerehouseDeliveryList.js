import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';

const WerehouseDeliveryList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["No", "Tanggal Pengiriman", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Jasa Pengirim", "Qty Blm Diterima", "Detail", "Penerima"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('./dataDummy/wereHouseDeliveryList.json')
        .then(response => response.json())
        .then(json => {
            if(!ignore){
                setTableData(json);
            }
        })
        return () => {
            ignore = true;
        }
    },[])
    return (
        <div>
            <TitleMenuView titleMenu="LIST PENGIRIMAN AG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}
                </div>
            </div>
        </div>
    )
}
export default WerehouseDeliveryList;