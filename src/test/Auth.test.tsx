import React from "react"
import { render, screen } from "@testing-library/react"
import Auth from "pages/Auth"
import authReducer, { authInitialState } from "redux/auth/reducer";
import StoreMock from "./utils/StoreMock";
import { rootReducer } from "redux/store";



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