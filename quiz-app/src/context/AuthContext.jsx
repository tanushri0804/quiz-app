import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) =>{
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = async (username, password) => {
        try{
            const res = await axios.post("https://zealous-terrific-mall.glitch.me/api/login", { username, password });
            setUser(res.data.user);
            navigate("/quiz");
        } catch (error) {
            alert("Login failed. Check your credentials.");
        }
    };
return (
    <AuthContext.Provider value={{ user, login }}>
        {children}
    </AuthContext.Provider>
);
};