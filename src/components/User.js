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
            <div className="user-card">
                <img src={avatar_url}/>
                 <h2>Name : {name}</h2>  
                <h3>Location : {location}</h3>
                <p>{bio}</p>
             
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