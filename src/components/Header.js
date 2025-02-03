//Header

import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () =>{
        let [btnNameReact,setBtnNameReact] = useState("login");
        const onlineStatus = useOnlineStatus(); // custom hooks used here to check the online status of the user
        
         
    return (
         <div className = "header">
            <div className="logo-container">
                    <img className="logo" src={LOGO_URL}></img>
                    <h2>CuisineCruise</h2>
           </div>
         <div className="nav-items">
                    <ul>
                             <li>{onlineStatus ? "🟢" : "🔴"}   </li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/grocery">Grocery</Link></li>
                            <li>Cart</li>
                            <button className="login" onClick={() =>
                                 {btnNameReact === "login" ?  setBtnNameReact("logout") : setBtnNameReact("login")} }>
                                        {btnNameReact}</button>
                    </ul>
            </div>
         </div>
    )
}

export default Header;