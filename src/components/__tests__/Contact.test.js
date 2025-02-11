import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; // Required for `.toBeInTheDocument()`
test("Should load the contact us component",()=>{
    render(<Contact/>)  
    // <Contact/> is jsx but it need to install @babel/preset-react as it will convert the jsx to html to load so install and import
    const heading  = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();  // toBeInTheDocument function is provided by the @testing-library/jest-dom install and import
})
test("Should load the button on contact us component",()=>{
    render(<Contact/>)  // Renders the component in the test DOM
   
    const button  = screen.getByRole("button");// Finds the button in the rendered DOM
 //   const button  = screen.getByText("button"); this is also works same as above
 
    expect(button).toBeInTheDocument();  // Assertion to check if the button exists
})

test("Should load the button on contact us component",()=>{
    render(<Contact/>)  // Renders the component in the test DOM
   
    const inputName  = screen.getByPlaceholderText("Enter your name");// Finds the input in the rendered DOM
 
 
    expect(inputName).toBeInTheDocument();  // Assertion to check if the button exists
})

test("Should load 2 input boxes on Contact Us component", () => {
    render(<Contact />);  // Renders the component in the test DOM
   
    const inputBoxes = screen.getAllByRole("textbox"); // Finds all input boxes in the rendered DOM
    //console.log(inputBoxes);// this will gies the HTML element ie object
    console.log(inputBoxes.length);//this will gies the total length
    expect(inputBoxes.length).toBe(3);  //  check if there are exactly 2 input boxes
});

// The function .toBeInTheDocument() is used to check whether an element is present in the document, but screen.getAllByRole("textbox") returns an array of elements, not a single element.
