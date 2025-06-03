import { Route, Routes } from "react-router-dom"
import { AuthLogin } from "../Pages/AuthPages/AuthLogin"
import { SetPasswordPage } from "../Pages/AuthPages/AuthConfirm"
import { useEffect, useState } from "react";
import { Login } from "../Pages/AuthPages/Login";

export const AppRoutes = () => {

    const [ hasPassword, setHasPassword ] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("hasPassword");
        setHasPassword(stored);
    },[])

    return (
        <>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/set_password' element={<SetPasswordPage />} />
                <Route path="/*" element={hasPassword ? <AuthLogin /> : <Login />} />
            </Routes>
        </>
    )
}