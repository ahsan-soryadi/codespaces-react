import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';

const BappbTagList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["No", "Tanggal Penerimaan", "Nama Penerima", "Gudang Pengrim", "Gudang Penerima", "Jasa Pengiriman", "Qty", "No Do", "BAPPB"];
    
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
            <TitleMenuView titleMenu="LIST BAPPB TAG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}
                </div>
            </div>
        </div>
    )
}
export default BappbTagList;