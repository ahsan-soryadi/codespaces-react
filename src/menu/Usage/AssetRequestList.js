import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const AssetrequestList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Id Permintaan", "Tanggal Permintaan", "Tanggal Rencana Pengambilan", "Requester", "Gudang asal", "Status Permintaan", "Detail", "Aksi", "Upload/ Download Evident", "Reuplolad Evident", "Cancel Request"];
    
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
            <Navigation/>
            <TitleMenuView titleMenu="LIST REQUEST ASET"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}
                </div>
            </div>
        </div>
    )
}
export default AssetrequestList;