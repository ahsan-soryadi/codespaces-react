import { Navigate } from "react-router-dom";
import Authenticate from "./Authenticate";

const PrivateRoute = ({children}) => {
    const isLogin = Authenticate(children);
    
    // const isLogin = true;
    // console.log("islogin = ", isLogin);
    if(isLogin !== null){
        return isLogin ? children : <Navigate to={'/login'}/>
    }
}

export default PrivateRoute;