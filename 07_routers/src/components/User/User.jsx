import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const { userid } = useParams()
  return (
    <div className='flex justify-center bg-gray-800 text-4xl text-orange-400 p-7'>
      User: {userid}
    </div>
  )
}

export default User
