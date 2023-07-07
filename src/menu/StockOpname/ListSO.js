import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import ModalStockOpnameDetails from './ModalStockOpnameDetail';

const ListSO = () => {
    const [tableData, setTableData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [detailId, setDetailId] = useState(0)
    const [detailData, setDetailData] = useState([])
    const [barangCatalogue, setBarangCatalogue] = useState([])
    const [modal, setModal] = useState(false)
    const tableHeaders = ["Id Stock Opname", "Nama Gudang", "Created By", "Tgl Stock Opname", "Detail"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/stockOpname/getAllStockOpname', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: "same-origin",
            body: JSON.stringify({
                lokasiGudangId: parseInt(localStorage.getItem("lokasiGudangID"))
                }
            )
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                if(data.length > 0 ){
                   const newData =  data.map(item => [item.id, item.lokasiGudang, item.createdBy, item.tanggal_so, "<button type=\"button\" class=\"btn btn-sm btn-primary\" title=\"action-"+item.id+"\">Cek</button>"])
                    setTableData(newData)
                }
                setIsLoading(false)
                
            }
        })
        return () => {
            ignore = true;
        }
    },[])

    const getDetails = async (detailId = 0) => {
        const response  =  await fetch('http://localhost:3001/stockOpname/getAllStockOpnameDetails', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                credentials: "same-origin",
                                body: JSON.stringify({stockOpnameId: detailId})
                            })
        const data = await response.json()
        const newData = data.map((item, idx) => {
            let no = idx + 1
            return {no, ...item}   
        })
        setDetailData(newData)
    }

    const getBarangCatalogue = async () =>  {
        const response = await fetch('http://localhost:3001/barang/getAllBarangCatalogue', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: "same-origin",
                })
        const data = await response.json()
        setBarangCatalogue(data)
    }

    const setCekButton = (id) =>{
        setDetailId(id)
        setModal(true)
    }

    useEffect(()=> {
        getDetails(detailId)
        getBarangCatalogue()
    }, [detailId])
    
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="LIST SO"/>
            {detailData.length > 0 && <ModalStockOpnameDetails modal={modal} setModal={setModal} modalData={detailData} barang={barangCatalogue}></ModalStockOpnameDetails>}
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {isLoading &&<p style={{color:"black"}}>Loading Data... </p>}
                {(tableData !== null && !isLoading) ? 
                    <TableTemplate tableHeaders={tableHeaders} tableData={tableData} isPagingEnabled={true} setCekButton={setCekButton}/> 
                    : <p style={{color:"black"}}>No Data </p>
                }
                </div>
            </div>
        </div>
    )
}
export default ListSO;