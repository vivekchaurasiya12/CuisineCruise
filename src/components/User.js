import React from "react";
import { GITHUB_USER_URL } from "../utils/constants";

class User extends React.Component{
         constructor(props){//constructor is used to initialize the state of the component and to pass the props to the parent constructor
            super(props);//super is used to pass the props to the parent constructor
            this.state = {
                userInfo : {
                    name : "Shubham",
                    location : "India"
                }
            
            }
         //   console.log(this.props.number + "child constructor called");
         }

     async componentDidMount(){//componentDidMount is used to perform the side effects like fetching the data from the server
           // console.log( this.props.number + "child componentDidMount called");
           //  API CALL
           const data = await fetch(GITHUB_USER_URL);
           const json = await data.json();
         //  console.log(json);
         this.setState({
            userInfo : json,
         });
        

         }
            componentDidUpdate(){
              console.log("child componentDidUpdate called");
            }
            componentWillUnmount(){
              console.log("child componentWillUnmount called");
            }

    render(){
     //   console.log(this.props.number + "child render called");
        const {name,location,avatar_url,bio} = this.state.userInfo;//destructuring the props object
       
        return(
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                <img 
                    src={avatar_url} 
                    alt="User Avatar" 
                    className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                />
                <h2 className="text-2xl font-bold text-gray-800 mt-4">{name}</h2>
                <h3 className="text-lg text-gray-600">{location}</h3>
                <p className="text-gray-700 mt-2">{bio}</p>
        
                <a href="https://vivekchaurasiya12.github.io/Portfolio/"  target="_blank"  rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">View Profile</a>

            </div>
        </div>
        
        )
    }
}
export default User; 

//Syntax: of class component
// class componentName extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             //state properties
//         }
//     }
//     render(){
//         return(
//             //JSX
//         )
//     }
// }
// export default componentName;