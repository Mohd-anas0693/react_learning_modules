import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {

    const { user } = useContext(UserContext)
    return (
        <div>
            <h1>Username : {user?.username}</h1>
            <h1>password : {user?.password}</h1>
        </div>
    )
}
