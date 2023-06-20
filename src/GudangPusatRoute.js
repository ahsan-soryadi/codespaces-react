import { Navigate } from "react-router-dom"

const GudangPusatRoute = ({children}) => {
    let isGudangPusat = false
    if(localStorage.getItem('role') === "gudang_pusat"){
        isGudangPusat = true
    }
    return isGudangPusat ? children : <Navigate to={'/accessDenied'}/>
}

export default GudangPusatRoute