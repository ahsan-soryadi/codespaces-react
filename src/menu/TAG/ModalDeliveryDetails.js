import ModalTitleView from "../ModalTitleView";
import TableTemplate from "../TableTemplate";
const ModalDeliveryDetails = ({modal, setModal, modalData, barang}) => {
    const toggleModal = (e) => {
        e.preventDefault()
        setModal(!modal);
      };
    //   console.log(modalData)
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return (
        <>
        {modal &&
                <div className="modal-wrapper">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content lg">
                    <ModalTitleView titleMenu="DETAIL PENGIRIMAN"/>
                        <div className="row" style={{marginTop:"60px"}}>
                                    <div className="col-4">
                                        <p><strong>Gudang Pengirim</strong></p>
                                    </div>
                                    <div className="col-8">
                                        <p>{modalData.gudangPengirim}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>Gudang Penerima</strong></p>
                                    </div>
                                    <div className="col-8">
                                        <p>{modalData.gudangPenerima}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>Nama Pengirim</strong></p>
                                    </div>
                                    <div className="col-8">
                                        <p>{modalData.username}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>Tgl Pengiriman</strong></p>
                                    </div>
                                    <div className="col-8">
                                        <p>{modalData.tanggalPengiriman}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><strong>No Resi</strong></p>
                                    </div>
                                    <div className="col-8">
                                        <p>{modalData.no_resi}</p>
                                    </div>
                        </div>
                        
                        {
                            barang.length > 0 && 
                                // const jenisBarang = item.jenisBarang.charAt(0).toUpperCase() + item.jenis_barang.slice(1)
                                    <div className="rows justify-content-md-center" style={{marginBottom:"90px"}}>
                                        <TableTemplate tableData={barang.map(item => {
                                            if(item.tanggalDiterima === null){
                                                item.tanggalDiterima = ' '
                                            }
                                            item.jenisBarang = item.jenisBarang.charAt(0).toUpperCase() + item.jenisBarang.slice(1)
                                            return item
                                        })} 
                                        tableHeaders={["No", "Serial Number", "Produk Seri", "Jenis Barang", "Tgl Penerimaan"]}></TableTemplate>
                                    </div>
                            
                        }
                        <button className="close-modal" onClick={toggleModal}>
                            X
                        </button>
                    </div>                    
                </div>
       }
        </>
    )
}

export default ModalDeliveryDetails