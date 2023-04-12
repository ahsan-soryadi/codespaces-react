import { useEffect, useState } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const ProductCategoryList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["ID Jenis Barang", "Nama", "Flagging", "Status Disable", "Is Penerimaan Unit", "Jenis Aset", "Is Generate SN", "Is Distribusi"]
    
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
            <TitleMenuView titleMenu="PRODUCT CATEGORY LIST"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                  {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}  
                </div>
            </div>
            
        </div>
    )
}
export default ProductCategoryList;