const { render,screen} = require("@testing-library/react")
import RestCard from "../Components/RestrauntCard"
import Mock_Data from "../mocks/RestCardMocks.json"
import "@testing-library/jest-dom"



// For Name  KFC
it("It Should render Restraunt Card Component with props Data",()=>{
    render(<RestCard  data={Mock_Data}/>);
    const name=screen.getByText("KFC");
    expect(name).toBeInTheDocument();
});

// For Rating  KFC
it("It Should render Restraunt Card Component with props Data",()=>{
    render(<RestCard  data={Mock_Data}/>);
    const avgRating=screen.getByText("Rating:4.3");
    expect(avgRating).toBeInTheDocument();
});