import { useEffect, useState } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';

const ProductList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Produk Series", "Nama Produk", "Nama", "Spesifikasi", "Jenis Aset"]
    // const responseData = await fetch('./dataDummy/wereHouseDeliveryList.json');
    // const data = await responseData.json();
    
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
            <TitleMenuView titleMenu="PRODUCT LIST"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                        {/* {tableData!== null ? <li>{tableData.id}</li> : "loading"} */}
                  {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}  
                </div>
            </div>
            
        </div>
    )
}
export default ProductList;