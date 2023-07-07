import { useEffect, useState } from "react";

const Authenticate = (children)=>{
    const [isLogin, setIsLogin] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/user/auth', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {'Content-type': 'application/json', 'authorization': `Bearer ${document.cookie}`}
        }).then(response => response.json())
        .then(data => {
            setIsLogin(data.result);
        })
        .catch(error => console.log(error));
    },[children])
    
        
    // console.log(isLogin)
    return isLogin
}

export default Authenticate;