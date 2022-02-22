import React, {useEffect} from 'react'
import { useActions } from "../../hooks/useAction"
import UsersTable from '../UsersTable';
import { useTypedSelector } from '../../hooks/useTypedSelector' 

export const UserList = () => {
    const { getUsers, addUser } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.users)


  useEffect(() => {
      getUsers()

  }, [])

    return (
        <>
            <UsersTable users={data}/>
            <button onClick={() => addUser()}> add user</button>
        </>
    )
}