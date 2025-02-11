//FOOD ORDERING APP
//Header
//  -LOGO
//  -Nav items
//Body
//  -search
//  -resturant coontainer
//  -resturant cards
//        -image
//        -Name of restura,rating,cousine,delivery time
//Footer
//   -copyright
//  -link
//   -contact
//   -address


two types of import/export

1. default import/export

export default component;
import component from "path";

2. Named import/export

export const component/url_variable
import {component /url_variable} from "path"'


# Setup of testing 
 - install react testing library
 - install jest
 - install babel depedencies if project have babel
 - cofigure babel
 - configure parcel config file to disable default the babel transpilation
 - jest configuration by npx jest --init
 - install jsdom library
 - Install @babel/preset-react by npm i -D @babel/preset-react
 - configure the babel.cofig.js by including @babel/preset-react in array
 - install jest-dom by npm install --save-dev @testing-library/jest-dom to 
   use the function .toBeInTheDocument(), .toHaveTextContent()


