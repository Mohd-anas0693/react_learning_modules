import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); setUser({ username, password }); }}>
                <ul>
                    <li>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
                    </li>
                    <li>
                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </li>
                    <button type="submit" > submit </button>
                </ul>
            </form>
        </div >
    )
}
