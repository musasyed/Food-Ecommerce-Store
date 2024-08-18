import { render,screen } from "@testing-library/react";
import Contact from "../Pages/Contact";
import "@testing-library/jest-dom";

test("Should Load Contact Us Component",()=>{


    // First Render the component using render method of react testing library
    render(<Contact />);

    // Using Screen and get by role
    const heading=screen.getByRole("heading");

    // Write Assertion
            expect(heading).toBeInTheDocument()
});