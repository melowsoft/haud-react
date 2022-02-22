import { useCallback } from "react";
import AddUserForm, { AddUserFormValues } from "../AddUserForm";
import { Container, FormTitle, Wrapper } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useActions } from "../../hooks/useAction";
import {useHistory} from  "react-router-dom"

const AddUser = () => {
  const { addUser } = useActions()
  const history = useHistory()
  const onAddNewUser = useCallback(async (values: AddUserFormValues) => {
    const newUser = { ...values, id: uuidv4() };
    try {
      addUser(newUser);
    } finally {
      history.replace("/");
    }
  }, [addUser]);

  return (
    <Wrapper>
      <FormTitle>New User Details</FormTitle>
      <Container>
        <AddUserForm onSubmit={onAddNewUser} />
      </Container>
    </Wrapper>
  );
};

export default AddUser;
