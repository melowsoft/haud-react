import React, {useEffect} from 'react'
import { useActions } from "../../hooks/useAction"
import UsersTable from '../UsersTable';
import { useTypedSelector } from '../../hooks/useTypedSelector' 

 const UserList = () => {
    const { getUsers } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.users)


  useEffect(() => {
      getUsers()
  }, [])

    return (
        <>
            <UsersTable users={data}/>
        </>
    )
}

export default UserList