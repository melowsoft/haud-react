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

    //Ensure that the input field is required

})

test("User should be able to type into The Last name input", () => { 
    render(<UserForm onSubmit={async () => console.log("Submitted!")} />)

    //Retrieve Last Name Input
    const lastNameInput = screen.getByTestId("last_name")
    //check that it is rendered
    expect(lastNameInput).toBeInTheDocument()

    //check if user can type into the input field
    userEvent.type(lastNameInput, "Doe");
    expect(lastNameInput).toHaveValue("Doe")

})
test("User should be able to type into The Address 1 input", () => { 
    render(<UserForm onSubmit={async () => console.log("Submitted!")} />)

    //Retrieve Last Name Input
    const addressInput = screen.getByTestId("address_1")
    //check that it is rendered
    expect(addressInput).toBeInTheDocument()

    //check if user can type into the input field
    userEvent.type(addressInput, "123 main st");
    expect(addressInput).toHaveValue("123 main st")

})

