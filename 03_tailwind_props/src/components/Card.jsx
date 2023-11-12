import React from 'react'

function Card({username="myName", description="myDescription", imgUrl="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"}) {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md mb-5">
  <img
    src={imgUrl}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      {description}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div>

  )
}

export default Card
