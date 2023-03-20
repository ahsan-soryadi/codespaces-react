import { useEffect, useState } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';

const ProductList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Produk Series", "Nama Produk", "Nama", "Spesifikasi", "Jenis Aset"]
    
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
            <TitleMenuView titleMenu="PRODUCT LIST"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                  {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}  
                </div>
            </div>
            
        </div>
    )
}
export default ProductList;