import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header"
import "@testing-library/jest-dom"; // Required for `.toBeInTheDocument()`
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should test Header component with a login button",()=>{
    render( // As header uses provider from redux to provide the data accross all component, link from router dom helps in rounting due this it it also need here to wrap the header so that it can load
    <BrowserRouter>
    <Provider store ={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    const button = screen.getByRole("button");
    // const button = screen.getByRole("button",{name: "Login"}); This will check the specific button having button name as login


    expect(button).toBeInTheDocument();
});

test("should test Cart 0 on Header component with a login button",()=>{
    render( // As header uses provider from redux to provide the data accross all component, link from router dom helps in rounting due this it it also need here to wrap the header so that it can load
    <BrowserRouter>
    <Provider store ={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart 0");
    // const button = screen.getByRole("button",{name: "Login"}); This will check the specific button having button name as login


    expect(cartItems).toBeInTheDocument();
});

test("should test login button changed to logout when clicked on Header component with a login button",()=>{
    render( // As header uses provider from redux to provide the data accross all component, link from router dom helps in rounting due this it it also need here to wrap the header so that it can load
    <BrowserRouter>
    <Provider store ={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name: "Login"});
    
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name : "Logout"});

    expect(logoutButton).toBeInTheDocument();
});