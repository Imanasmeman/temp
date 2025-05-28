import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if(username.trim()){
            localStorage.setItem('user', username.trim());
            navigate('/inbox');
        }
    };
    return (
    <div className="login-container">
        <h1>SyncSphere Login</h1>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <button type="submit">Login</button>

        </form>
    </div>
)
}
export default LoginPage