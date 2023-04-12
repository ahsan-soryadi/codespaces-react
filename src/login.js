import { useEffect, useState } from "react"
import { useNavigate} from "react-router-dom"

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({userName: userName, password: password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.ok){
                navigate('/home')
            }
            
        })
        .catch(error => console.log(error))

    }
    
    return (
        <div className="form-control">
            <form onSubmit={handleLogin}>
                <label htmlFor="userName">User Name</label>
                <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
export default Login;