import Logout from "./Logout"
const Header = () => {
    return (
        <>
        <div className="header">
                    <div className="header-content">
                        <div className="left">
                            LOGO
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