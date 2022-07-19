import { createContext, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

const Provider = ({ children }) => {
    const [user, setUser] = useState("");
    const [isAuth, setIsAuth] = useState(false)

    const logout = () => {
        setUser("")
        setIsAuth(false)
        localStorage.removeItem('user')
    }
    const login = (data) => {
        setUser(data)
        setIsAuth(true)
        localStorage.setItem("user", data)
    }

    useEffect(() => {
        let data = localStorage.getItem("user")

        if (data) {
            setUser(data)
            setIsAuth(true)
        }
    }, [])
    const AuthContextValue = {
        user: user,
        logout: logout,
        login: login,
        isAuth
    }

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}

        </AuthContext.Provider>
    )
}

export default Provider;