import React from 'react';
import User from './User';

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
            <div>
                <h3>This is About Us Page</h3>
                <User name ={"Vivek Kumar Chaurasiya"} location ={"Noida"} contact = {"63352515"} number = {"first"}/>
          
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