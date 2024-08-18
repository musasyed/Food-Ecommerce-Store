import { render } from "@testing-library/react"
import Body from "../Components/Body"
import MOCK_DATA from "../mocks/RestCardMocks.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"




global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("Should render the Body Component with Search",async()=>{
    await act(async() => {
        render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    );
      });
}) 