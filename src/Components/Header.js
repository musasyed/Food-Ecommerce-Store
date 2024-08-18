import { useContext, useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";



const Header=()=>{

    const {loggedInUser}=useContext(UserContext);


    const[loginBtn,setLoginBtn]=useState("login");
    const onlineStatus=useOnlineStatus();
    
    // Reading Data from Store, subscribing to the store using selector
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems)

    return( <div className="flex justify-between px-10 items-center bg-slate-100 shadow-lg">
            <div className="logo-container">
              <img  className="w-60" src={LOGO_URL}/>
            </div>
            <div className="mr-[500px]">
                <ul className="flex p-4 m-4 gap-x-11 mr-11">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>

                <li>Online Status: {onlineStatus? "✅":"🔴"}</li>
                    <button className="btn-login" onClick={()=>{loginBtn==="login"? setLoginBtn("logout"): setLoginBtn("login")}}>{loginBtn}</button>
                    <li className="font-bold">User: {loggedInUser}</li>
                    <li className="font-bold text-lg"><Link to={'/cart'}>Shopping Cart ({cartItems.length})</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header;