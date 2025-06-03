import { useNavigate } from "react-router-dom";
import Icon from "../../../assets/Phantom-Icon_Transparent_Purple.svg";

export const Login = () => {

    const navigate = useNavigate();

    return (
        <div className="flex w-full h-screen justify-center items-center bg-gradient-to-br from-purple-100 to-indigo-200">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-8">
            
            {/* Icon */}
            <div className="flex items-center justify-center">
            <img
                src={Icon}
                alt="Phantom Logo"
                className="w-28 h-28 drop-shadow-xl"
            />
            </div>

            {/* Heading */}
            <h2 
                className="text-center text-muted text-2xl font-semibold text-gray-500"
            >
                Welcome to Phantom Wallet
            </h2>

            {/* Buttons */}
            <div className="space-y-4">
            <button
                onClick={() => navigate('/set_password')}
                className="w-full py-3 bg-purple-500 text-white font-semibold rounded-xl cursor-pointer shadow-md hover:bg-purple-600 transition duration-300"
            >
                Create a New Wallet
            </button>
            <button
                className="w-full py-3 border border-purple-600 text-purple-600 font-semibold cursor-pointer rounded-xl hover:bg-purple-100 transition duration-300"
            >
                Import Existing Wallet
            </button>
            </div>
        </div>
        </div>
    );
};
