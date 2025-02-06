import { useRouteError } from "react-router-dom"
const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-lg w-96">
            <h3 className="text-4xl font-extrabold text-red-600 mb-4">OOPS!!!!!!</h3>
            <h3 className="text-2xl text-gray-700 mb-4">Something Went Wrong !!!!!!</h3>
            <h3 className="text-xl text-red-500">{err.status}: {err.statusText}</h3>
            <button 
                onClick={() => window.history.back()}
                className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
                Go Back
            </button>
        </div>
    </div>
    
    
    
    )
};
export default Error; 