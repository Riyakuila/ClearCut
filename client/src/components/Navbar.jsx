import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import {Link, useNavigate} from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";


const Navbar = () =>{

    const {openSignIn} = useClerk();
    const {isSignedIn, user} = useUser();
    const {credit, loadCreditsData} = useContext(AppContext);

    const navigate = useNavigate()

    useEffect(() => {
        if (isSignedIn) {
            loadCreditsData()
        }
    },[isSignedIn])
    

    return(
        <div className ="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <Link to='/' className="flex items-center gap-2">
            <img className="w-12 sm:w-10" src={assets.ClearCutLogo} />
            <span className="ml-2 text-2xl font-bold " >ClearCut</span>
            </Link>

            {
                isSignedIn ? <div className="flex items-center gap-2 sm:gap-3">
                    <button onClick={() => navigate('/buy')} className="flex items-center gap-2 bg-purple-50 px-4 py-1.5 sm:py-2.5 rounded-full border border-purple-200 hover:scale-105 transition-all duration-700 hover:bg-purple-100 hover:border-purple-300">
                        <img className="h-5" src={assets.credit_icon} alt="" />
                        <p className="text-xs sm:text-sm font-medium text-gray-600">Credits : {credit}</p>
                    </button>
                    <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName} </p>
                    <UserButton/>
                </div> : <button onClick={() => openSignIn({})} className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full">
                Get started <img className="w-3 sm:w-4" src={assets.arrow_icon} />
            </button>
            }

            
                
            
            
            
        </div>
        
    )
}

export default Navbar;