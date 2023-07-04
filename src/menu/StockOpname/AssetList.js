import { useEffect, useState } from "react";
import Navigation from "../../Navigation";
import TableTemplate from "../TableTemplate";
import TitleMenuView from "../TitleMenuView";

const AssetList = ()=> {
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["Id", "Jenis Barang", "Merk", "Produk Seri", "Serial Number", "Peruntukan"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/barang/getAllBarangByLocation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify(
                {
                locationId: localStorage.getItem('lokasiGudangID')
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTableData(data);
            }
        })
        return () => {
            ignore = true;
        }
    },[])
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="LIST ASSET"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData} isPagingEnabled={true}/> : "loading"}
                </div>
            </div>
        </div>
    )
}

export default AssetList