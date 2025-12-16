import React from 'react'

const UserCard = ({user, rightIcon}) => {
  return (
    <div className='flex items-center justify-between mb-4 '>
        <div className='text-gray-400 flex flex-col gap-2'>
            <h3>{user.name}</h3>
            <p>{user.number}</p>
        </div>
        {rightIcon}
    </div>
  )
}

export default UserCard