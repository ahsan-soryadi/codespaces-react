import ModalTitleView from "../ModalTitleView";
import TableTemplate from "../TableTemplate";
const ModalStockOpnameDetails = ({modal, setModal, modalData, barang}) => {
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
                    <ModalTitleView titleMenu={"DETAIL STOCK OPNAME"}/>
                        {
                            //jenis barang
                            barang.length > 0 && barang.map((item, idx) => {
                                const jenisBarang = item.jenis_barang.charAt(0).toUpperCase() + item.jenis_barang.slice(1)
                                const merkBarang = item.merk_barang.charAt(0).toUpperCase() + item.merk_barang.slice(1)
                                const matchStatusCount = {"match": 0, "notMatch": 0}
                                //list match dan no match
                                const newModalData = modalData.filter(item => item.jenisBarang === jenisBarang)
                                                    .map((item, idx) => {
                                                        if(item.matchStatus === 'Match'){
                                                            matchStatusCount.match +=1
                                                        } else {
                                                            matchStatusCount.notMatch += 1
                                                        }
                                                        return {"no": idx+1, "serialNumber": item.serialNumber, "match": item.matchStatus}
                                                    })
                                return(
                                    <>
                                    <div className="row rows-cols-5" style={{marginTop:"60px"}}>
                                    <div className="col">
                                        <label>Jenis Barang: <strong>{jenisBarang}</strong></label>
                                    </div>
                                    <div className="col">
                                        <label>Merk: <strong>{merkBarang}</strong></label>
                                    </div>
                                    <div className="col">
                                        <label>Seri: <strong>{item.produk_seri}</strong></label>
                                    </div>
                                    <div className="col">
                                        <label>Match: <strong>{matchStatusCount.match}</strong></label>
                                    </div>
                                    <div className="col">
                                        <label>Not Match: <strong>{matchStatusCount.notMatch}</strong></label>
                                    </div>
                                    </div>
                                    <div className="rows justify-content-md-center" style={{marginBottom:"90px"}}>
                                        <TableTemplate tableData={newModalData} tableHeaders={["No", "Serial Number", "Match / Not Match"]}></TableTemplate>
                                    </div>
                                </>
                                )
                            })
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

export default ModalStockOpnameDetails