import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState({});

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Mohd-anas0693').then((res) => res.json()).then((data) => { console.log(data); setData(data) })

    // }, []);
    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers: {data?.followers}
            <img src={data?.avatar_url} alt='Github Pic' width={300} /></div>
    )
}

const loadGithub = async () => {
    const response = await fetch('https://api.github.com/users/Mohd-anas0693')
    return response.then((res) => res.json())
    .then((data) => { console.log(data); setData(data) })
}
export { Github, loadGithub };