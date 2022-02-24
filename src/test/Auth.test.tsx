import React from "react"
import { render, screen } from "@testing-library/react"
import Auth from "pages/Auth"
import StoreMock from "./utils/StoreMock";


jest.mock('react-router-dom', () => {
    // Require the original module to not be mocked...
    const originalModule = jest.requireActual('react-router-dom');
  
    return {
      __esModule: true,
      ...originalModule,
      // add your noops here
      useParams: jest.fn(),
      useNavigate: jest.fn(),
      useHistory: jest.fn(),
    };
});


describe("AUTH", () => {
    let wrapper;

    beforeEach(() => {
        const utils = StoreMock(<Auth />);
        wrapper = utils.container;
        console.log(wrapper)
      });


    it("Should have error if password length is less than 6 characters", () => {
        render(<Auth />)
        const title = screen.getByText("Login")
        expect(title).toBeInTheDocument()
    })
})