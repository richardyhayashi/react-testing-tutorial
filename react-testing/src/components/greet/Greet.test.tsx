/**
 * Greet should render the text hello and if a name is passed into the component
 * it should render thello followed by the name.
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
    test("Renders correctly", () => {
        render(<Greet />);
        const textElement = screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
    });

    // describe("Nested", () => {
    //     it("Renders with name", () => {
    //         render(<Greet name="John"/>);
    //         const textElement = screen.getByText('Hello John');
    //         expect(textElement).toBeInTheDocument();
    //     });
    // });
});