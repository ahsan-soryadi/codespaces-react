import { useEffect, useState } from "react";
import Navigation from "../../Navigation";
import TableTemplate from "../TableTemplate";
import TitleMenuView from "../TitleMenuView";

const AssetList = ()=> {
    const [tableData, setTableData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const tableHeaders = ["Id", "Jenis Barang", "Produk Seri", "Merk", "Serial Number", "Peruntukan"];
    
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
                setIsLoading(false)
                setTableData(data.map((item) => {
                    const jenisBarang = item.jenisBarang.charAt(0).toUpperCase() + item.jenisBarang.slice(1)
                    const merkBarang = item.merkBarang.charAt(0).toUpperCase() + item.merkBarang.slice(1)
                    const produkSeri = item.produkSeri
                    return{
                        'id': item.id,
                        'jenisBarang': jenisBarang,
                        'produkSeri': produkSeri,
                        'merkBarang': merkBarang,
                        'serialNumber': item.serialNumber,
                        'peruntukan': item.peruntukan
                    }
                }))
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
                {isLoading && <p style={{color:"black"}}>Loading Data... </p>}
                {tableData !== null && tableData.length > 0 ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData} isPagingEnabled={true}/> 
                : 
                <p style={{color:"black"}}>No Data </p>
                }
                </div>
            </div>
        </div>
    )
}

export default AssetList