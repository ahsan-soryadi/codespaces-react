import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView';
// import dataDummy from '../dataDummy/wereHouseDeliveryList.json'

const WerehouseDeliveryList = () => {
    const tableHeaders = ["No", "Tanggal Pengiriman", "Nama Pengirim", "Gudang Pengrim", "Gudang Penerima", "Jasa Pengirim", "Qty Blm Diterima", "Detail", "Penerima"];
    //const tableDataResponse = await fetch("../dataDummy/wereHouseDeliveryList.json");
    //const tableData = await tableDataResponse.json();
    return (
        <div>
            <TitleMenuView titleMenu="LIST PENGIRIMAN AG"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <TableTemplate tableHeaders={tableHeaders}/>
                </div>
            </div>
        </div>
    )
}
export default WerehouseDeliveryList;