import { render, fireEvent, screen, within } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Form } from "@/components/Form";
import type { Graph } from "@/types";
import { GraphContext } from "@/context/GraphContext";

import * as graph from "./graph.json";

const mockGraph = graph as unknown as Graph;

jest.mock("../env.ts", () => ({
    apiUrl: "http://localhost:3000",
}));

// describe("App Component", () => {
//     test("renders Vite + React heading", () => {
//         render(<App />);
//         const headingElement = screen.getByText(/Vite \+ React/i);
//         expect(headingElement).toBeInTheDocument();
//     });

//     test("increments count when button is clicked", () => {
//         render(<App />);
//         const buttonElement = screen.getByRole("button", { name: /count is 0/i });
//         fireEvent.click(buttonElement);
//         expect(buttonElement).toHaveTextContent("count is 1");
//     });
// });

describe("Form Component", () => {
    test("prefill checkbox", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[0]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).toHaveAttribute("aria-checked", "false");
        fireEvent.click(checkbox);
        expect(checkbox).toHaveAttribute("aria-checked", "true");
        const label = screen.getByText("Prefill fields for this form");
        expect(label).toBeInTheDocument();
        expect(label).toHaveAttribute("for", "prefill-swtich");
    });
    test("renders AvantosField component", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[0]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("email");
        expect(field).toBeInTheDocument();
    });

    // Form A should have no collapsibles, except the global
    test("Form A", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[2]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeNull();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeNull();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeNull();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeNull();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeNull();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });

    // Form B should have Form A as a collapsibles
    test("Form B", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[4]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeInTheDocument();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeNull();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeNull();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeNull();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeNull();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });
    // Form C should have Form A as a collapsibles
    test("Form C", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[3]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeInTheDocument();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeNull();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeNull();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeNull();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeNull();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });
    // Form D should have Form B and Form A as collapsibles
    test("Form D", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[1]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeInTheDocument();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeInTheDocument();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeNull();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeNull();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeNull();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });
    // Form E should have form C and Form A as collapsibles
    test("Form E", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[5]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeInTheDocument();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeNull();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeInTheDocument();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeNull();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeNull();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });
    // Form F should have all forms as collapsibles
    test("Form F", () => {
        render(
            <GraphContext.Provider value={mockGraph}>
                <Form node={mockGraph.nodes[0]} />
            </GraphContext.Provider>
        );
        const checkbox = screen.getByRole("switch");
        fireEvent.click(checkbox);
        const field = screen.getByText("dynamic_checkbox_group");
        fireEvent.click(field);
        // wait for the dialog to appear
        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();

        const clientId = screen.getByText("Action Properties");
        expect(clientId).toBeInTheDocument();
        const actionID = screen.getByText("Client Organisation Properties");
        expect(actionID).toBeInTheDocument();
        const formA = within(dialog).queryByText("Form A");
        expect(formA).toBeInTheDocument();
        const formB = within(dialog).queryByText("Form B");
        expect(formB).toBeInTheDocument();
        const formC = within(dialog).queryByText("Form C");
        expect(formC).toBeInTheDocument();
        const formD = within(dialog).queryByText("Form D");
        expect(formD).toBeInTheDocument();
        const formE = within(dialog).queryByText("Form E");
        expect(formE).toBeInTheDocument();
        const formF = within(dialog).queryByText("Form F");
        expect(formF).toBeNull();
    });
});
