import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=> {
    const navigate = useNavigate()
    const handleLogout = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/user/logout', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                if(data.result === false){
                    document.cookie = 'token=none; max-age=2';
                    localStorage.clear()
                    navigate('/login')
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <>
           <li style={{color:"#a30d0d"}} onClick={handleLogout}><h5>LOGOUT</h5></li>
        </>
    )
}

export default Logout;