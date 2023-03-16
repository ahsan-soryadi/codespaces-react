import TableTemplate from '../TableTemplate';
import TitleMenuView from '../TitleMenuView'
const ProductList = () => {
    const tableHeaders = ["Produk Series", "Nama Produk", "Nama", "Spesifikasi", "Jenis Aset"]
    return (
        <div>
            <TitleMenuView titleMenu="PRODUCT LIST"/>
            <div className='main-content-wrapper'>
                <div className='main-content'>
                    <TableTemplate tableHeaders={tableHeaders} tableData={""}/>
                </div>
            </div>
            
        </div>
    )
}
export default ProductList;