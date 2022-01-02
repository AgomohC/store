import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUp from "../SignUp";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../Redux/store";
// TODO: 3 CHECK IF BUTTON CLICKS CORRECTLY 5 CHECK IF LINK INTERACTS CORRECTLY 6 TEST ONCHANGE FOR INPUT FIELDS

const MockSignUp = () => {
   return (
      <Provider store={store}>
         <Router>
            <SignUp />
         </Router>
      </Provider>
   );
};

describe("Login component renders properly", () => {
   it("renders form", () => {
      render(<MockSignUp />);
      const form = screen.getByTestId("form");
      expect(form).toBeInTheDocument();
   });
   it("renders the lock icon", () => {
      render(<MockSignUp />);
      const iconElement = screen.getByTestId("icon");
      expect(iconElement).toBeInTheDocument();
   });
   it("renders the lastName input field", () => {
      render(<MockSignUp />);
      const lastNameEl = screen.getByTestId("lastName");
      expect(lastNameEl).toBeInTheDocument();
   });
   it("renders the firstName input field", () => {
      render(<MockSignUp />);
      const firstNameEl = screen.getByTestId("firstName");
      expect(firstNameEl).toBeInTheDocument();
   });
   it("renders the username input field", () => {
      render(<MockSignUp />);
      const usernameElement = screen.getByTestId("username");
      expect(usernameElement).toBeInTheDocument();
   });
   it("renders the email input field", () => {
      render(<MockSignUp />);
      const emailEl = screen.getByTestId("email");
      expect(emailEl).toBeInTheDocument();
   });
   it("renders the password input field", () => {
      render(<MockSignUp />);
      const passwordElement = screen.getByTestId("password");
      expect(passwordElement).toBeInTheDocument();
   });
   it("renders the confirm password input field", () => {
      render(<MockSignUp />);
      const passwordConfirmEl = screen.getByTestId("confirmPassword");
      expect(passwordConfirmEl).toBeInTheDocument();
   });
   it("renders the button", () => {
      render(<MockSignUp />);
      const buttonElement = screen.getByTestId("submit-btn");
      expect(buttonElement).toBeInTheDocument();
   });
   it("renders the login link", () => {
      render(<MockSignUp />);
      const linkElement = screen.getByTestId("login-link");
      expect(linkElement).toBeInTheDocument();
   });
});

describe("Buttons and Links interact correctly", () => {
   it("redirects to sign up page", () => {
      render(<MockSignUp />);

      const linkElement = screen.getByTestId("login-link");
      fireEvent.click(linkElement);
      // expect(linkElement).toBeInTheDocument();
   });
});
