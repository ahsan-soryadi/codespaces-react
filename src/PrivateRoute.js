import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isLogin = false;
    // const navigate = useNavigate();
    return isLogin ? children : <Navigate to={'/login'}/>
}

export default PrivateRoute;