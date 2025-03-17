import React, { useContext, useState } from 'react'
import './LoginPage.css'
import { StoreContext } from '../context/userContext.js';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const {url,setToken,showLogin, setShowLogin} = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const navigate = useNavigate();
    const onChangeHandler =(event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data,[name]:value}));
    }

    const onLogin = async(event) =>{
      event.preventDefault();
      let newUrl = url;
      if(currState==="Login"){
        newUrl+="/api/user/login";
      }
      else{
        newUrl +="/api/user/register";
      }
      const response = await axios.post(newUrl,data);

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
        if(currState=="Login"){
        toast.success("Login Success")
        }
        else {
        toast.success("Registered Successfully")
        }
        navigate("/")
      }
      else{
        console.log(response.data.message)
        toast.error(response.data.message)
      }
    }

  return (
   
    <div className="h-screen flex items-center justify-center ">
      <form onSubmit={onLogin} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{currState}</h2>
          <button type="button" onClick={() => setShowLogin(false)} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>
        <div className="space-y-4">
          {currState === "Login" ? null : (
            <input
              name="name"
              type="text"
              onChange={onChangeHandler}
              value={data.name}
              placeholder="Your name"
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full mt-6 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-start mt-4 space-x-2">
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm text-gray-600">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p className="mt-4 text-sm text-gray-600">
            Create a new account? <span onClick={() => setCurrState("Sign Up")} className="text-blue-500 cursor-pointer">Click here</span>
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-600">
            Already have an account? <span onClick={() => setCurrState("Login")} className="text-blue-500 cursor-pointer">Login here</span>
          </p>
        )}
      </form>
    </div>
    
  )
}

export default LoginPage;

