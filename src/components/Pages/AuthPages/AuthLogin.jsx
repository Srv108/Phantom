import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react';
import Icon from "../../../assets/Phantom-Icon_Transparent_Purple.svg"

export const AuthLogin = () => {

    const [ showPassword, setShowPassword ] = useState();

    const handleSubmit  = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="flex w-full h-screen justify-center items-center bg-gray-100">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* phantom icon image */}
                    <div className="flex items-center justify-center h-75">
                        <img
                            src={Icon}
                            alt="Phantom Logo"
                            className="w-40 h-40 animate-bounce"
                        />
                    </div>

                    <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "Password"}
                                    placeholder="Enter password"
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

                            {/* forgot password */}
                            <div className="text-center text-sm">
                                <button
                                    type="button"
                                    className="text-[#AB9FF2] hover:underline cursor-pointer text-lg"
                                    onClick={() => alert('Redirect to recovery page or show modal')}
                                >
                                    Forgot password?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="bg-[#AB9FF2] text-white py-2 rounded-lg hover:bg-green-600 transition duration-200"
                            >
                                Unlock
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}