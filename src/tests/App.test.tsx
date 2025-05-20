import { render, fireEvent, screen } from "@testing-library/react";

import App from "../App";
import "@testing-library/jest-dom";

describe("App Component", () => {
    test("renders Vite + React heading", () => {
        render(<App />);
        const headingElement = screen.getByText(/Vite \+ React/i);
        expect(headingElement).toBeInTheDocument();
    });

    test("increments count when button is clicked", () => {
        render(<App />);
        const buttonElement = screen.getByRole("button", { name: /count is 0/i });
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveTextContent("count is 1");
    });
});
