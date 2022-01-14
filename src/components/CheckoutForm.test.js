import React from "react";
import MutationObserver from 'mutationobserver-shim';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    
    const fNameInput = screen.getByLabelText(/first name:/i);
    const lNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const checkoutBtn = screen.getByTestId(/checkout/i);

    userEvent.type(fNameInput, 'Warren');
    userEvent.type(lNameInput, 'Longmire');
    userEvent.type(addressInput, 'Bloomtech');
    userEvent.type(cityInput, 'Philly');
    userEvent.type(stateInput, 'PA');
    userEvent.type(zipInput, '267215');
    userEvent.click(checkoutBtn);

    await waitFor(() => {
        const fNameDisplay = screen.getByText(/warren/i);
        const lNameDisplay = screen.getByText(/longmire/i);
        const addressDisplay = screen.getByText(/bloomtech/i);
        const cityDisplay = screen.getByText(/philly/i);
        const stateDisplay = screen.getByText(/PA/i);
        const zipDisplay = screen.getByText(/267215/i);

        const successMessage = screen.getByTestId(/successMessage/i);
        expect(successMessage).toBeInTheDocument();
    })
    
});
