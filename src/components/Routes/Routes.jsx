import { Route, Routes } from "react-router-dom"
import { AuthLogin } from "../Pages/AuthPages/AuthLogin"
import { SetPasswordPage } from "../Pages/AuthPages/AuthConfirm"
import { useEffect, useState } from "react";
import { Login } from "../Pages/AuthPages/Login";
import { CreateSeedPhrasePage } from "../Pages/SeedPhrase/Seed";
import { ImportSeedPhrasePage } from "../Pages/SeedPhrase/ImportSeedPage";

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
                <Route path="/create_wallet" element={<CreateSeedPhrasePage />} />
                <Route path="/import_wallet" element={<ImportSeedPhrasePage />} />
            </Routes>
        </>
    )
}