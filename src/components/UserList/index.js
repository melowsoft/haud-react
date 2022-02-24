import  { useCallback, useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import UsersTable from "../UsersTable";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PageTitle, Wrapper } from "./style";

const UserList = () => {
  const { getUsers, deleteUser } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    getAllUsers();
  }, []);
    
   const getAllUsers = useCallback(() => getUsers(), [getUsers]);

  return (
      <Wrapper>
          <PageTitle>Users List</PageTitle>
          <UsersTable users={data} deleteUser={deleteUser} loading={loading}/>
    </Wrapper>
  );
};

export default UserList;
