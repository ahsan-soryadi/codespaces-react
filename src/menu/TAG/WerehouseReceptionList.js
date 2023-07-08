import { useState, useEffect } from 'react';
import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
import Navigation from '../../Navigation';
import ModalReceptionValidation from './ModalReceptionValidation';
import ModalDeliveryDetails from './ModalDeliveryDetails';

const WerehouseReceptionList = () => {
    const [detailId, setDetailId] = useState(0)
    const [modal, setModal] = useState(false)
    const [detailData, setDetailData] = useState([])
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [detailBarang, setDetailBarang] =  useState([])
    const [detailPenerimaan, setDetailPenerimaan] = useState([])
    const [modalDetailPenerimaan, setModalDetailPenerimaan] = useState(false)
    const tableHeaders = ["No", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Tgl Pengiriman", "Jenis Pengiriman", "Ekspedisi", "No Resi", "Status", "Detail", "Action"];
    
    useEffect(()=> {
        let ignore = false;
        fetch('http://localhost:3001/tag/getAllPenerimaanAg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify({locationId: localStorage.getItem('lokasiGudangID')})
        })
        .then(response => response.json())
        .then(data => {
            if(!ignore){
                setTableData(data.map(item => {
                    let isDisabled = '';
                    if(item.jasaPengiriman === null) {
                        item.jasaPengiriman = ' '
                    }
                    if(item.tanggalPenerimaan === null){
                        item.tanggalPenerimaan = ' '
                        isDisabled = ''
                    } else {
                        item.tanggalPenerimaan = <strong>Diterima</strong>
                        isDisabled = 'disabled'
                    }
                    item.detail = "<button type=\"button\" class=\"btn btn-sm btn-primary\" title=\"action-"+item.id+"\">Cek</button>"
                    item.action = "<button type=\"button\" class=\"btn btn-sm btn-primary\" "+isDisabled+" title=\"validate-"+item.id+"\">Validasi</button>"
                    return item
                }))
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
        setDetailData(data)
    }

    const getPengirimanDetails = async (detailId = 0) => {
        const response = await fetch('http://localhost:3001/tag/getDetailPengirimanAgById', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            credentials: "same-origin",
                            body: JSON.stringify({pengirimanAgId: detailId})
                        })
        const data = await response.json()

        setDetailPenerimaan((data.map((item, idx) => {
            let no = idx + 1
            return {no, ...item}
        })))

        setDetailBarang(data.map(item => {
            return item.serialNumber
        }))
    }

    const setCekButton = (id) =>{
        setDetailId(id)
        setModalDetailPenerimaan(true)
    }

    const setValidateButton = (id) => {
        setDetailId(id)
        setModal(true)
    }

    useEffect(() => {
        console.log("detail id = ", detailId)
        getDetails(detailId)
        getPengirimanDetails(detailId)

    }, [detailId, modal])
    return (
        <div>
            <Navigation/>
            <TitleMenuView titleMenu="LIST PENERIMAAN ANTAR GUDANG"/>
            {
              (detailData !== undefined && detailData.length > 0 ) && 
              <ModalReceptionValidation modal={modal} setModal={setModal} modalData={detailData[0]} barang={detailBarang} />
            }
            {
              (detailPenerimaan !== undefined && detailPenerimaan.length > 0) && 
              (detailData !== undefined && detailData.length > 0) &&
              <ModalDeliveryDetails modal={modalDetailPenerimaan} setModal={setModalDetailPenerimaan} modalData={detailData[0]} barang={detailPenerimaan}/>
            }
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    {isLoading && <p style={{color:"black"}}>Loading Data... </p>}
                    {tableData.length > 0 ? <TableTemplate tableHeaders={tableHeaders} tableData={tableData} setCekButton={setCekButton} setValidateButton={setValidateButton}/> : <p style={{color:"black"}}>No Data</p>}
                </div>
            </div>
        </div>
    )
}
export default WerehouseReceptionList;