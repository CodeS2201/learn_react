import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/CodeS2201')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])

  return (

    <div className='m-4 bg-gray-600 text-white p-4 text-3xl
    flex flex-col items-center'>
      <h1>Github Link: <a className='hover:cursor-pointer hover:text-blue-700 text-blue-500' target='_blank' href={data.html_url}>{data.html_url}</a></h1>
      <img src={data.avatar_url} alt="github picture" height={200} width={200} className='pt-5 hover:cursor-pointer'/>
    </div>
  )
}

export const githubInfoLoader = async() => {
  const response = fetch('https://api.github.com/users/CodeS2201')
  return response
}

export default Github