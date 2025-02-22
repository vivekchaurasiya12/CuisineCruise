import {LOGO_URL} from "../utils/constants";
import { useContext, useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{
        let [btnNameReact,setBtnNameReact] = useState("Login");
        const onlineStatus = useOnlineStatus(); // custom hooks used here to check the online status of the user
        const data = useContext(UserContext);
       // console.log(data);

       //Accessing the store using selector which is a hook provided by react-redux which helps to access the data present inside store;
       const cartItems = useSelector((store)=> store.cart.items);
       console.log(cartItems);
         
    return (
        <div className="flex justify-between items-center border-b-2 border-gray-200 shadow-md px-6 py-4">
        {/* Logo Section */}
      <Link to="/"><div className="flex items-center gap-1">
          <img className="w-20" src={LOGO_URL} alt="Logo" />
          <h2 className="text-3xl font-semibold font-serif text-gray-800 tracking-wide hover:text-blue-600 transition duration-300 hover:scale-105">
            CuisineCruise
          </h2>
        </div>
        </Link>
      
        {/* Navigation Section */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center gap-8 text-lg font-medium font-serif text-gray-700 md:flex">
            <li>{onlineStatus ? "🟢" : "🔴"}</li>
            <li className="hover:text-blue-600 transition duration-300 hover:scale-105">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600 transition duration-300 hover:scale-105">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-600 transition duration-300 hover:scale-105">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="hover:text-blue-600 transition duration-300 hover:scale-105">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="hover:text-blue-600 transition duration-300 cursor-pointer hover:scale-105 flex items-center gap-2">
            <Link to="/cart" className="flex items-center gap-2">
              <span className="material-icons">shopping_cart</span>
              <span className = "text-red-700">{cartItems.length}</span>
            </Link>
          </li>
            <button
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 font-serif"
              onClick={() => setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")}
            >
              {btnNameReact}
            </button>
            <li className="hover:text-blue-600 transition duration-300 cursor-pointer hover:scale-105">
              {data.loggedInUser}
            </li>
          </ul>
      
          {/* Mobile Menu (Hamburger Icon) */}
         
        </div>
      </div>
      

    )
}

export default Header;