import { Provider } from "react-redux"
import Header from "../Components/Header"
import {fireEvent, render,screen} from "@testing-library/react"
import appStore from "../Components/utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"



// Check Cart in the Header
it("It should match whether the cart is present in header or not",()=>{


    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    // Using Screen and get by role
    const cart=screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument()
})


// Button Checking

it("It should check the login and logout button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        </Provider>
        </BrowserRouter>
    )

    // Using Screen and get by role
    const loginButton=screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);

    const logoutButton=screen.getByRole("button",{name:"logout"});
    
    expect(logoutButton).toBeInTheDocument();


    expect(logoutButton).toBeInTheDocument()
})