import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import ModalDeliveryDetails from './ModalDeliveryDetails';

const WerehouseDeliveryList = () => {
    const [tableData, setTableData] = useState(null);
    const [detailId, setDetailId] = useState(0)
    const [modal, setModal] = useState(false)
    const [detailData, setDetailData] = useState([])
    const [detailBarang, setDetailBarang] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const tableHeaders = ["No", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Tgl Pengiriman", "Jenis Pengiriman", "Ekspedisi", "Qty" ,"No Resi", "Detail"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/tag/getAllPengirimanAg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({locationId: localStorage.getItem('lokasiGudangID')})
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTableData(data.map(item => {
                    if(item.jasaPengiriman == null) {
                        item.jasaPengiriman = ' '
                    }
                    item.action = "<button type=\"button\" class=\"btn btn-sm btn-primary\" title=\"action-"+item.id+"\">Cek</button>"
                    return item
                }));
                setIsLoading(false)
            }
        })
        return () => {
            ignore = true;
        }
    },[])

    const getDetails = async (detailId = 0) => {
        const response  =  await fetch('http://localhost:3001/tag/getPengirimanAgById', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                credentials: "same-origin",
                                body: JSON.stringify({pengirimanAgId: detailId})
                            })
        const data = await response.json()
        setDetailData(data[0])
    }

    const getPengirimanDetails = async (detailId = 0) => {
        const response = await fetch('http://localhost:3001/tag/getDetailPengirimanAgById', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: "same-origin",
                            body: JSON.stringify({pengirimanAgId: detailId})
                        })
        const data = await response.json()
        setDetailBarang(data.map((item, idx) => {
            let no = idx + 1
            return {no, ...item}
        }))
    }

    const setCekButton = (id) =>{
        setDetailId(id)
        setModal(true)
    }

    useEffect(() => {
        // console.log("detail id = ", detailId)
        getDetails(detailId)
        getPengirimanDetails(detailId)
    }, [detailId])
    
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="LIST PENGIRIMAN GUDANG"/>
            {
                (detailData !== undefined  && detailBarang !== undefined) && 
                <ModalDeliveryDetails modal={modal} setModal={setModal} modalData={detailData} barang={detailBarang}/>
            } 
            <div className='main-content-wrapper'>
                <div className='main-content'>
                {isLoading && <p style={{color:"black"}}>Loading Data... </p>}
                {
                tableData !== null && tableData.length > 0 ? 
                <TableTemplate tableHeaders={tableHeaders} tableData={tableData} setCekButton={setCekButton}/>  : 
                <p style={{color:"black"}}>No Data</p>
                }
                </div>
            </div>
        </div>
    )
}
export default WerehouseDeliveryList;