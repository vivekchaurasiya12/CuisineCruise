import React from 'react';
import User from './User';
import {Link} from "react-router-dom"

class About extends React.Component {
    constructor(props){
        super(props);
      //  console.log("Parent Constructor Called");
    }
    componentDidMount(){
        //  console.log("Parent ComponentDidMount Called");
    }
    render(){
        // console.log("Parent Render Called");
        return(
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-4">About Us</h2>
                <p className="text-gray-700 text-lg mb-6">
    Welcome to our food delivery service! We bring you the <strong className="font-semibold">freshest, most delicious meals</strong> from top restaurants, delivered right to your doorstep.  
    Whether you're craving fast food, healthy eats, or gourmet cuisine, we’ve got you covered.  
    Order with ease and enjoy restaurant-quality food <strong className="font-semibold">anytime, anywhere</strong>.
</p>


                <div className="bg-blue-50 p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">Meet Our Founder</h3>
                    <User 
                        name="Vivek Kumar Chaurasiya" 
                        location="Noida" 
                        contact="63352515" 
                        number="first" 
                    />
                </div>

                <div className="mt-6">
    <h3 className="text-xl font-semibold text-gray-800">Why Order With Us?</h3>
    <ul className="text-gray-600 text-lg mt-2">
        <li>🍽️ <span className="font-semibold">Wide Variety</span> – Choose from hundreds of restaurants and cuisines.</li>
        <li>🚀 <span className="font-semibold">Fast Delivery</span> – Get your food hot and fresh, delivered in minutes.</li>
        <li>💳 <span className="font-semibold">Easy Payments</span> – Multiple payment options for a hassle-free experience.</li>
        <li>⭐ <span className="font-semibold">Customer Satisfaction</span> – Trusted by thousands of happy food lovers.</li>
    </ul>
</div>


              <Link to="/contact"> <button 
                    className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                    Contact Us
                </button>
                </Link> 
            </div>
        </div>
        )
    }
}

export default About;
// Here I tried to explain Lifecycle of react
/* 
Lifecycle Execution Order
Parent Constructor (About component) is called.
Parent Render is called.
First Child (User component - "first") Constructor is called.
First Child Render is called.
Second Child (User component - "second") Constructor is called.
Second Child Render is called.
First Child componentDidMount is called.
Second Child componentDidMount is called.
Parent componentDidMount is called.
*/