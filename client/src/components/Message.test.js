import { render, screen } from "@testing-library/react";
import Message from "./Message";

test('first test',() => {})
test('render contents from back end and display', ()=> {
    render(<Message enquiryInfo={
        {client_name: "test",
        contact_id: "1",
        email: "test@gamil.com",
        enquiry: "test",
        portfolio_id: "9"}
    }
    />)
    const clientName = screen.getByTestId('clientName');
    
    expect(clientName.textContent).toEqual('From: test');
})
