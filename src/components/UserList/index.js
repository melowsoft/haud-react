import React from 'react'
import { useActions } from "../../hooks/useAction"
import UsersTable from '../UsersTable';

export const UserList = () => {
    const { addUser } = useActions();


    return (
        <>
            <UsersTable />
            {/* <button onClick={() => addUser()}> add user</button> */}
        </>
    )
}