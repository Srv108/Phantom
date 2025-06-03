import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';
import Icon from "../../../assets/Phantom-Icon_Transparent_Purple.svg"


export const SetPasswordPage = () => {

    const [ showPassword, setShowPassword ] = useState(false);

    const [ password, setPassword ] = useState({
        first: "",
        second: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        if(password.first.trim() == password.second.trim()){

            localStorage.setItem('hasPassword', "true");

            setPassword({
                first: "",
                second: ""
            });
        } else {
            alert("please enter the same password");
        }

    }

    return (
        <>
            <div className="flex w-full h-screen justify-center items-center bg-gradient-to-br from-purple-100 to-indigo-200">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">
                    
                    {/* Card Header */}
                    <div className="bg-[#AB9FF2] text-white text-center py-3 text-lg font-semibold">
                        Set Password
                    </div>

                    {/* icon */}
                    <div className="flex items-center justify-center h-75">
                        <img
                            src={Icon}
                            alt="Phantom Logo"
                            className="w-40 h-40"
                        />
                    </div>

                    {/* Form Body */}
                    <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "Password"}
                                    placeholder="Enter password"
                                    value={password.first}
                                    onChange={(e) => setPassword({...password, first: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <div className="absolute right-3 inset-y-0 flex items-center cursor-pointer">
                                    {
                                        showPassword ? 
                                        <EyeOff 
                                            className='w-5 h-5 text-gray-500' 
                                            onClick={() => setShowPassword(prev => !prev)}
                                        /> : 
                                        <Eye 
                                            className='w-5 h-5 text-gray-500' 
                                            onClick={() => setShowPassword(prev => !prev)}
                                        />
                                    }
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "Password"}
                                    placeholder="Enter password"
                                    value={password.second}
                                    onChange={(e) => setPassword({...password, second: e.target.value})}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                />
                                <div className="absolute right-3 inset-y-0 flex items-center cursor-pointer">
                                    {
                                        showPassword ? 
                                        <EyeOff 
                                            className='w-5 h-5 text-gray-500' 
                                            onClick={() => setShowPassword(false)}
                                        /> : 
                                        <Eye 
                                            className='w-5 h-5 text-gray-500' 
                                            onClick={() => setShowPassword(true)}
                                        />
                                    }
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#AB9FF2] text-white py-2 rounded-lg hover:bg-[#584e8e] transition duration-200"
                            >
                                Continue
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </>
    )
}