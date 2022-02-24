import { useCallback } from "react";
import UserForm, { UserFormValues } from "../UserForm";
import { Container, FormTitle, Wrapper } from "./style";
import { useActions } from "../../hooks/useAction";
import {  useHistory } from "react-router-dom"


const AddUser = () => {
  const { addUser } = useActions()
  const history = useHistory()

  const onAddNewUser = useCallback(async (values: UserFormValues) => {
    const newUser = { ...values };
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
        <UserForm onSubmit={onAddNewUser} />
      </Container>
    </Wrapper>
  );
};

export default AddUser;
