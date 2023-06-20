import { useState } from 'react';
import '../App.css';
import Navigation from '../Navigation';

const Home = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'))
    const [role, setRole] = useState(localStorage.getItem('role'))
    
    // console.log("data login : ",user)

   return (
    <>
    <Navigation/>
    <div className="main">
                    <h2>WELCOME TO WTM ONLINE {userName.toUpperCase()}</h2>
                    <p>ini ceritanya gambar</p>
    </div>
    </>
    
   )
}
export default Home;