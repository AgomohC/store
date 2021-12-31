import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../Redux/store";
// TODO: 1 CHECK IF FORM IS RENDERED CORRECTLY, 2 CHECK IF TITLE IS RENDERED CORRECTLY, 3 CHECK IF BUTTON CLICKS CORRECTLY 4 CHECK IF BOTTOM TYPOGRAPHY AND LINK ARE RENDERED CORRECTLY 5 CHECK IF LINK INTERACTS CORRECTLY

const MockLogin = () => {
   return (
      <Provider store={store}>
         <Router>
            <Login />
         </Router>
      </Provider>
   );
};

describe("Login component renders properly", () => {
   it("renders form", () => {
      render(<MockLogin />);
      const form = screen.getByTestId("form");
      expect(form).toBeInTheDocument();
   });
   it("renders the lock icon", () => {
      render(<MockLogin />);
      const iconElement = screen.getByTestId("icon");
      expect(iconElement).toBeInTheDocument();
   });
   it("renders the username input field", () => {
      render(<MockLogin />);
      const usernameElement = screen.getByTestId("username");
      expect(usernameElement).toBeInTheDocument();
   });
   it("renders the password input field", () => {
      render(<MockLogin />);
      const passwordElement = screen.getByTestId("password");
      expect(passwordElement).toBeInTheDocument();
   });
   it("renders the button", () => {
      render(<MockLogin />);
      const buttonElement = screen.getByTestId("submit-btn");
      expect(buttonElement).toBeInTheDocument();
   });
   it("renders the register link", () => {
      render(<MockLogin />);
      const buttonElement = screen.getByTestId("register-link");
      expect(buttonElement).toBeInTheDocument();
   });
});
