import { useState } from 'react';
import { useAuth } from '../AuthContext';

function AuthForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true); // toggle between login and register
    const { login, register } = useAuth();

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                await login(email, password);
                alert("Welcome back!");
            } else {
                await register(email, password);
                alert("Account created successfully!");
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleAuth} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">
                    {isLogin ? "Login" : "Register"}
                </button>
            </form>

            <button 
                onClick={() => setIsLogin(!isLogin)} 
                style={{ marginTop: "15px", background: "none", border: "none", color: "blue", cursor: "pointer", textDecoration: "underline" }}
            >
                {isLogin ? "Don't have an account? Register here" : "Already have an account? Login here"}
            </button>
        </div>
    );
}

export default AuthForm;