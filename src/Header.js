import Logout from "./Logout"
const Header = () => {
    return (
        <>
        <div className="header">
                    <div className="header-content">
                        <div className="left">
                            <h3 style={{color: "#a30d0d"}}>WTM</h3>
                        </div>
                        <div className="right">
                            <Logout/>
                        </div>
                    </div>  
                </div>
        </>
    )
}
export default Header