import React from 'react'
import { useActions } from "../../hooks/useAction"

export const UserList = () => {
    const { addUser } = useActions();


    return (
        <button onClick={() => addUser()}> add user</button>
    )
}