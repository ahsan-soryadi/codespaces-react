import { useState } from "react";

const Authenticate = ()=>{
    const [isLogin, setIsLogin] = useState();
        fetch('http://localhost:3001/user/auth', {
            method: 'GET',
            credentials: 'same-origin',
            headers: {'Content-type': 'application/json', 'authorization': `Bearer ${document.cookie}`}
        }).then(response => response.json())
        .then(data => {
            console.log("hasil authenticate = ", data)
            setIsLogin(data.result);
        })
        .catch(error => console.log(error));
    console.log(isLogin)
    return isLogin
}

export default Authenticate;