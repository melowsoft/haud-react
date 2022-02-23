import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import UserForm from ".."

test("User should be able to type into The First name input", () => { 
    render(<UserForm onSubmit={async () => console.log("Submitted!")} />)

    //Retrieve First Name Input
    const firstNameInput = screen.getByTestId("first_name")
    //check that it is rendered
    expect(firstNameInput).toBeInTheDocument()

    //check if user can type into the input field
    userEvent.type(firstNameInput, "John");
    expect(firstNameInput).toHaveValue("John")
})