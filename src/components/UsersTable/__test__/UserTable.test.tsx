import { render, screen } from "@testing-library/react";
import UsersTable from "..";
import { DocumentData } from "@firebase/firestore";

test("renders the infos on the table correctly", () => {
  // mock data  
  const users: DocumentData[] = [
    {
      id: "fdsfsafsafds",
      first_name: "John",
      last_name: "Doe",
      address_1: "123 Main St",
      address_2: "",
      town: "Town",
      region: "Region",
      country: "Spain",
      post_code: "12345",
      contact_number: "123456789",
    },
    {
      id: "fdsfsafsafdsfsags",
      first_name: "Jane",
      last_name: "smith",
      address_1: "123 ville St",
      address_2: "",
      town: "New Town",
      region: "New Region",
      country: "Canada",
      post_code: "123457",
      contact_number: "1234567343",
    },
  ];

  render(
    <UsersTable
      users={users}
      loading={false}
      deleteUser={async () => console.log("user deleted!!")}
    />
  );
    
    //retrieve all table rows
    const tableRowElements = screen.getAllByRole("row") 
    expect(tableRowElements[0]).toHaveTextContent(users[0].first_name)
    expect(tableRowElements[0]).toHaveTextContent(users[0].last_name)
    expect(tableRowElements[0]).toHaveTextContent(users[0].region)
});
