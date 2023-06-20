import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=> {
    // const [result, setResult] = useState()
    // fetch('http://localhost:3001/user/logout', {
    //     method: 'GET'
    // })
    // .then(response => response.json())
    // .then(data => data.result)
    // .catch(error => console.log(error))
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
            <li onClick={handleLogout}>LOGOUT</li>
        </>
    )
}

export default Logout;