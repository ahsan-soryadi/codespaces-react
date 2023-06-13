import { useState } from "react";

const Logout = ()=> {
    const [result, setResult] = useState()
    return fetch('http://localhost:3001/user/logout', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => data.result)
    .catch(error => console.log(error))
    // return result;
}

export default Logout;