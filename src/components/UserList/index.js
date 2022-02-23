import React, { useCallback, useEffect } from "react";
import { useActions } from "../../hooks/useAction";
import UsersTable from "../UsersTable";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const UserList = () => {
  const { getUsers, deleteUser } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.users);

  useEffect(() => {
    getAllUsers();
  }, []);
    
   const getAllUsers = useCallback(() => getUsers(), [getUsers]);

  return (
    <>
          <UsersTable users={data} deleteUser={deleteUser} loading={loading}/>
    </>
  );
};

export default UserList;
