import { useEffect, useState } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';

const ProductList = () => {
    // TO DO tampil jenis barang saja
    const [tableData, setTableData] = useState(null);
    const tableHeaders = ["No", "Jenis Barang", "Produk Seri", "Merk Barang", ]
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/barang/getAllBarangCatalogue', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            
        })
        .then(response => response.json())
        .then(data => {
            if (!ignore) {
                setTableData(data.map((item, idx) => {
                    const jenisBarang = item.jenis_barang.charAt(0).toUpperCase() + item.jenis_barang.slice(1)
                    const merkBarang = item.merk_barang.charAt(0).toUpperCase() + item.merk_barang.slice(1)
                    const produkSeri = item.produk_seri
                    return{
                        'no': idx+1,
                        'jenisBarang': jenisBarang,
                        'produkSeri': produkSeri,
                        'merkBarang': merkBarang
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
            <TitleMenuView titleMenu="KATALLOG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                  {tableData !== null ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData} isPagingEnabled={true}/> : "loading"}  
                </div>
            </div>
            
        </div>
    )
}
export default ProductList;