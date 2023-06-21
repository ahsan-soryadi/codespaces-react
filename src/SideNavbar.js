import { useState } from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
    const [userName, setUsername] = useState(localStorage.getItem('userName'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    // console.log("user data : ", user)
    
    const handleHidden = (e) =>{
        const sideNavSub = document.getElementsByClassName('show');
        const caretDown = document.getElementsByClassName('active');
        let target = e.target;

        if (e.target.className.includes("bi bi-caret-down-fill")) {
            target = e.target.parentElement
            e.target.classList.toggle('active')
        } else {
            target.children[0].classList.toggle('active')
        }

        if (sideNavSub.length > 0) {
            for (let i = 0; i < sideNavSub.length; i++) {
                if (target.nextSibling.innerHTML !== sideNavSub[i].innerHTML) {
                    sideNavSub[i].classList.remove('show');
                }
            }
        }
        if (caretDown.length > 0) {
            for (let i = 0; i < caretDown.length; i++) {
                if (!caretDown[i].parentElement.innerText.includes(target.innerText)) {
                    caretDown[i].classList.remove('active');
                }

            }
        }

        target.nextSibling.classList.toggle('show')
   
    }   
    return (
        <div className="sidenav">
                        <div className="profile">
        
                        </div>
                        <div className="menu">
                            <Link to="/home" title='Home' id="home">HOME</Link>
                            {role && role === "gudang_pusat" ? 
                            <>
                                <li onClick={handleHidden}>CREATE STOCK <i className="bi bi-caret-down-fill"></i></li>
                                <div className="sidenav-sub">
                                    <Link to="/createStockPO">CREATE STOCK PO</Link>
                                    <Link to="/createStockIF">CREATE STOCK READY</Link>
                                </div>
                             </> : <></> 
                            } 
                            
                            
                            <li onClick={handleHidden}>KATALOG PRODUK <i className="bi bi-caret-down-fill"></i></li>
                            <div className="sidenav-sub">
                                <Link to="/productList" >PRODUCT LIST</Link>
                                <Link to="/productCategoryList" >LIST JENIS PRODUCT</Link>
                                <Link to="/productBrandList" >LIST MERK PRODUCT</Link>
                            </div> 
                            {role && role === 'gudang_pusat' ? 
                            <>
                                <li onClick={handleHidden}>EDIT <i className="bi bi-caret-down-fill"></i></li>
                                <div className="sidenav-sub">
                                    <Link to="/editItemAllocation" >EDIT PERUNTUKAN BARANG</Link>
                                </div> 
                            </> : <></>}
                            
                            <li onClick={handleHidden}>PEMAKAIAN <i className="bi bi-caret-down-fill"></i></li>
                            <div className="sidenav-sub">
                                <Link to="/assetRequestList" >LIST REQUEST ASET</Link>
                                <Link to="/changeOfUseList" >LIST PERGANTIAN PEMAKAIAN</Link>
                            </div> 
                            <li onClick={handleHidden}>STOCK OPNAME <i className="bi bi-caret-down-fill"></i></li>
                            <div className="sidenav-sub">
                                <Link to="/listSO" >LIST SO</Link>
                            </div>   
                            <li onClick={handleHidden}>TAG <i className="bi bi-caret-down-fill"></i></li>
                            <div className="sidenav-sub">
                                <Link to="/werehouseDelivery">PENGIRIMAN AG</Link>
                                <Link to="/werehouseReceptionList" >LIST PENERIMAAN AG</Link>
                                <Link to="/bappbTagList" >LIST BAPPB TAG</Link>
                            </div> 
                        </div>    
                    </div>
    )
}
export default SideNavbar