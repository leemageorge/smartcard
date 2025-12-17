import React from 'react'

const UserCard = ({user, rightIcon}) => {
  console.log(user)
  return (
    <div className='flex items-center justify-between mb-4  '>
        <div className='text-gray-400 flex flex-col gap-2'>
            <h3>{user.name}</h3>
            <p>{user.number}</p>
        </div>
         {typeof rightIcon === 'function' ? rightIcon(user) : rightIcon}
    </div>
  )
}

export default UserCard