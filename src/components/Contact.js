import User from "./User";

const Contact = () =>{
    return (
        <div className="bg-red-400 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-extrabold text-red-700 mb-4 text-center">Contact Us</h1>
            
            <p className="text-lg text-gray-700 mb-6 text-center">
                We're here to assist you! Feel free to reach out to us anytime.
            </p>    
            <div className="flex flex-col space-y-4">
                <div>
                    <label className="block text-gray-700 font-semibold">Your Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
    
                <div>
                    <label className="block text-gray-700 font-semibold">Your Email</label>
                    <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>
    
                <div>
                    <label className="block text-gray-700 font-semibold">Message</label>
                    <textarea 
                        placeholder="Write your message here"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                </div>
    
                <button 
                    className="w-full bg-red-700 text-white py-2 px-4 rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300">
                    Submit
                </button>
            </div>
        </div>
    </div>
    
    )
}
export default Contact;
