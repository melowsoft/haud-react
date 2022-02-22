import { useCallback } from "react";
import AddUserForm, { AddUserFormValues } from "../AddUserForm";

const AddUser = () => {

  const onAddNewUser = useCallback(
    async (values: AddUserFormValues) => {
      console.log(values);
    },
    []
  )

  return (
    <>
      <div>New user details</div>
      <br/>
      <AddUserForm onSubmit={onAddNewUser}/>
    </>
  );
};

export default AddUser;
