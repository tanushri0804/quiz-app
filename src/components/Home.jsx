import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <div>
            <h1>Welcome to the Quiz App</h1>
            <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Home;