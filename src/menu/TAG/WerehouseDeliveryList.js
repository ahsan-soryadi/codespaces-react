import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
// import dataDummy from '../dataDummy/wereHouseDeliveryList.json'

const WerehouseDeliveryList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["No", "Tanggal Pengiriman", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Jasa Pengirim", "Qty Blm Diterima", "Detail", "Penerima"];
    //const tableDataResponse = await fetch("../dataDummy/wereHouseDeliveryList.json");
    //const tableData = await tableDataResponse.json();
    useEffect(()=> {
        let ignore = false;
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
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