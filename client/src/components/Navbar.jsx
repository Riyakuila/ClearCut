import React from "react";
import { assets } from "../assets/assets";
import {Link} from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () =>{

    const {openSignIn} = useClerk()
    const {isSignedIn, user} = useUser()

    return(
        <div class ="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <Link to='/' className="flex items-center gap-2">
            <img className="w-12 sm:w-10" src={assets.ClearCutLogo} />
            <span className="ml-2 text-2xl font-bold " >ClearCut</span>
            </Link>

            {
                isSignedIn ? <div>
                    <UserButton/>
                </div>
                :<button onClick={() => openSignIn({})} className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full">
                Get started <img className="w-3 sm:w-4" src={assets.arrow_icon} />
            </button>
            }
            
            
            
        </div>
        
    )
}

export default Navbar;