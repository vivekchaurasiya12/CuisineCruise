import React, { lazy, Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import Shimmer from "./components/Shimmer";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";

//import Grocery from "./components/Grocery";



const Grocery = lazy(()=>import("./components/Grocery")) // lazy loading of the grocery component
// lazy loading is a technique in which we load the component only when it is required and not at the start of the application which will help in reducing the load time of the application

const About = lazy(()=>import("./components/about")) // lazy loading of the about component

const AppLayout = () => {

        const [userName,setUserName] = useState();

        useEffect (()=>{
//API CALL AND RETRIVE INFO OF LOGIN USER
       const data = {
        name : "Vivek",
       }
       setUserName(data.name);
        },[])
     
        return (
                <UserContext.Provider value = {{loggedInUser : userName,setUserName}} >
                <div className = "app overflow-x-hidden">
                {/* <UserContext.Provider value = {{loggedInUser : "Shubham"}}> */}
                <Header/>
                {/* </UserContext.Provider> */}
                <Outlet/>
                {/* this outlet is component provide by react router and it will be replace by component according to the path provide in the url 
                Example : if we place in url / then outlet will be replaced by children is body and if we place /about then outlet will be replaced by about component*/}
                <Footer/>
                </div>
                </UserContext.Provider>
        )
}
const appRouter = createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                
                children : [
                        {
                                path:"/",
                                element:<Body/>
                        },
                        {
                                path:"/About",
                                element:<Suspense fallback={<div>Loading...</div>}><About/></Suspense>
                        },
                        {
                                path:"/Contact",
                                element:<Contact/>
                        },
                        {
                                path:"/Grocery",
                                element:<Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>
                        },
                        {
                                path:"/resturant/:resId",
                                element:<ResturantMenu/>
                                
                        }
                ],
                errorElement: <Error/>
        }
      
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
//l