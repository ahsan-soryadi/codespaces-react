import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const ListSO = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Id Stock Opname", "Nama Gudang", "Created By", "Tgl Stock Opname", "Detail"];
    
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
            <TitleMenuView titleMenu="LIST SO"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData} isPagingEnabled={true}/> : "loading"}
                </div>
            </div>
        </div>
    )
}
export default ListSO;