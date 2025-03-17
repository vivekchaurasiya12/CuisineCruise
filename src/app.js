
import React, { lazy, Suspense, useEffect,useState ,useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter,RouterProvider,Outlet,Navigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
//import About from "./components/about";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import Shimmer from "./components/Shimmer";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; // Provider is provided by react-redux && Provides integration between Redux and React.
import appStore,{persistor} from "./utils/appStore";
import Cart from "./components/Cart";
import CheckoutForm from './components/CheckoutForm';
import PaymentSuccess from './components/PaymentSuccess';
import PaymentFailure from './components/PaymentFailure';
import StoreContextProvider, { StoreContext } from './context/userContext.js'
import LoginPage from "./components/LoginPage.js";
import {ToastContainer } from 'react-toastify';

//import Grocery from "./components/Grocery";
// const Grocery = lazy(()=>import("./components/Grocery")) 
// lazy loading of the grocery component
// lazy loading is a technique in which we load the component only when it is required and not at the start of the application which will help in reducing the load time of the application
const About = lazy(()=>import("./components/about")) // lazy loading of the about component

const AppLayout = () => {
        const { token, setToken,showLogin } = useContext(StoreContext);
        const [userName,setUserName] = useState();
        const [loading, setLoading] = useState(true); // Add loading state

        useEffect(() => {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
            setLoading(false); // Set loading to false after checking token
        }, [setToken]);
    
        useEffect(() => {
            const data = { name: "Vivek" };
            setUserName(data.name);
        }, []);
    
        const isLoginPage = window.location.pathname === "/loginpage";
    
        if (loading) return <div>Loading...</div>; // Prevent redirect until token is checked
    
        return (
               
                <Provider store = {appStore} > 
                      <PersistGate loading={null} persistor={persistor}>  
                {/* We wrapped all our app inside Provider &&  The <Provider> component makes the Redux store available throughout the app. */}
                <UserContext.Provider value = {{loggedInUser : userName,setUserName}} >
                <div className = "app overflow-x-hidden">
                <ToastContainer />
                {/* <UserContext.Provider value = {{loggedInUser : "Shubham"}}> */}
                {!isLoginPage && token && <Header />}
                {/* </UserContext.Provider> */}
                <Outlet /> 
                {/* this outlet is component provide by react router and it will be replace by component according to the path provide in the url 
                Example : if we place in url / then outlet will be replaced by children is body and if we place /about then outlet will be replaced by about component*/}
                {token && <Footer />}
                </div>
                </UserContext.Provider>
                </PersistGate>
                </Provider>
              
        );
};
const ProtectedRoute = ({ element }) => {
    const { token } = useContext(StoreContext);
    return token ? element : <Navigate to="/loginpage" />;
};
const appRouter = createBrowserRouter([
        {
                path:"/",
                element:(
                <StoreContextProvider>
                <AppLayout />
                </StoreContextProvider>
                    )
                ,
                
                children : [
                        {
                                path:"/",
                                element:<ProtectedRoute element={<Body />} />
                        },
                        {
                                path:"/About",
                                element:<ProtectedRoute element={<Suspense fallback={<div>Loading...</div>}><About /></Suspense>} />
                        },
                        {
                                path:"/Contact",
                                element:<ProtectedRoute element={<Contact />} />
                        },
                        {
                                path: "/resturant/:resId",
                                element: <ProtectedRoute element={<ResturantMenu />} />
                        },
                        {
                                path: "/cart",
                                element: <ProtectedRoute element={<Cart />} />
                        },
                        {
                                path: "/checkout",
                                element: <ProtectedRoute element={<CheckoutForm />} />,
                        },
                        {
                                path: "/payment-success",
                                element: <ProtectedRoute element={<PaymentSuccess />} />,
                        },
                        {
                                path: "/payment-failure",
                                element: <ProtectedRoute element={<PaymentFailure />} />,
                        },
                        {
                                path: "/loginpage",
                            element: <LoginPage />,
                        },
                        
                ],
                errorElement: <Error/>
        }
      
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
//l
