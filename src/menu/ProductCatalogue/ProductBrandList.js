import { useEffect, useState } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const ProductBrandList = () => {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Merk", "Jenis Product"]
    
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
    const handleButtonClick = () => {
        alert("button clicked!")
    }
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="PRODUCT BRAND LIST"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                  {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData}/> : "loading"}  
                </div>
            </div>
        </div>
    )
}
export default ProductBrandList;