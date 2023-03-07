import { Link } from "react-router-dom";

const Navigation = () => {
    
    const handleHidden = (e) =>{
        const sideNavSub = document.getElementsByClassName('show');
        let target = e.target;
        if(e.target.className.includes("bi bi-caret-down-fill")){
            target = e.target.parentElement
            e.target.classList.toggle('active')
        } else {
            target.children[0].classList.toggle('active')
        }
            if(sideNavSub.length > 0){
                 for(let i = 0; i < sideNavSub.length; i++){    
                     if(target.nextSibling.innerHTML !== sideNavSub[i].innerHTML){
                        sideNavSub[i].classList.remove('show');
                     }
             }
            }
            
            target.nextSibling.classList.toggle('show')     
        }
        return (
            <div>
                <div className="header">
                    <div className="header-content">
                        <div className="left">
                            LOGO
                        </div>
                        <div className="right">
                            LOGOUT
                        </div>
                    </div>  
                </div>
                <div className="sidenav">
                    <div className="profile">
    
                    </div>
                    <div className="menu">
                        <li href="/" title='Home'>HOME</li>
                        <li onClick={handleHidden}>CREATE STOC <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link href="#" >CREATE STOCK PO</Link>
                            <Link href="#" >CREATE STOCK IF</Link>
                        </div>
                        
                        <li onClick={handleHidden}>KATALOG PRODUK <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link href="#" >PRODUCT LIST</Link>
                            <Link href="#" >LIST JENIS PRODUCT</Link>
                            <Link href="#" >LIST MERK PRODUCT</Link>
                        </div> 
                        <li onClick={handleHidden}>EDIT <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link href="#" >EDIT PERUNTUKAN BARANG</Link>
                        </div> 
                        <li onClick={handleHidden}>PEMAKAIAN <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link href="#" >LIST REQUEST ASET</Link>
                            <Link href="#" >LIST PERGANTIAN PEMAKAIAN</Link>
                        </div> 
                        <li onClick={handleHidden}>STOCK OPNAME <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link href="#" >LIST SO</Link>
                        </div>   
                        <li onClick={handleHidden}>TAG <i className="bi bi-caret-down-fill"></i></li>
                        <div className="sidenav-sub">
                            <Link to="/werehouseDelivery">PENGIRIMAN AG</Link>
                            <Link href="#" >LIST PENGIRIMAN AG</Link>
                            <Link href="#" >LIST BAPPB TAG</Link>
                            <Link to="/werehouseDelivery">PENGIRIMAN AG</Link>
                            <Link href="#" >LIST PENGIRIMAN AG</Link>
                            <Link href="#" >LIST BAPPB TAG</Link>
                            <Link to="/werehouseDelivery">PENGIRIMAN AG</Link>
                            <Link href="#" >LIST PENGIRIMAN AG</Link>
                            <Link href="#" >LIST BAPPB TAG</Link>
                            <Link to="/werehouseDelivery">PENGIRIMAN AG</Link>
                            <Link href="#" >LIST PENGIRIMAN AG</Link>
                            <Link href="#" >LIST BAPPB TAG</Link>
                        </div> 
                    </div>    
                </div>
    
                
            </div>
        )
}
export default Navigation;