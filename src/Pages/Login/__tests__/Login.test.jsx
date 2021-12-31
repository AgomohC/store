import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

describe("Login test block", () => {
   it("renders the username input field", () => {
      render(<Login />);
      const usernameElement = screen.getAllByLabelText(/username/i);
      expect(usernameElement).toBeInTheDocument();
   });
   it("renders the password input field", () => {
      render(<Login />);
      const passwordElement = screen.getAllByLabelText(/password/i);
      expect(passwordElement).toBeInTheDocument();
   });
});
