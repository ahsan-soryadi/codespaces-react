import { useState } from "react"
import { useNavigate} from "react-router-dom"

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials:"same-origin",
            body: JSON.stringify({userName: userName, password: password})
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            if(data.message === 'ok'){
                document.cookie = `token=${data.token}; Secure`;
                // console.log("inside ok");
                localStorage.setItem("userName", data.user.USERNAME)
                localStorage.setItem("usernameID", data.user.ID)
                localStorage.setItem("role", data.user.ROLE)
                navigate('/home')
            } else {
                // console.log("outside ok")
                setMessage('Login error: ' + data.error)
            }
            
        })
        .catch(error => {
            setMessage('Login error: code 500')
            console.log(error)
        })

    }
    
    return (
        <div className="login">
            <div className="logo">
                <h1>WTM</h1>
            </div>
            <div className="form-control login">
            <form onSubmit={handleLogin}>
                {/* <label htmlFor="userName">User Name</label> */}
                <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Username"/>
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="message">
                <p>{message}</p>
            </div>
        </div>
        </div>
        
    )
}
export default Login;