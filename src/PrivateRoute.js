import { Navigate } from "react-router-dom";
import Authenticate from "./Authenticate";

const PrivateRoute = ({children}) => {
    const isLogin = Authenticate();
    // const isLogin = true;
    console.log(isLogin);
    // const navigate = useNavigate();
    if(isLogin!= undefined){
        return isLogin ? children : <Navigate to={'/login'}/>
    }
    
}

export default PrivateRoute;