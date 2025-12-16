import React from 'react'

const UserListingPopup = ({onClose, selectedUser }) => {
  return (
  <div className='flex flex-col justify-between gap-4 w-full max-w-[350px] bg-white p-5 mx-auto  shadow-lg'>
    <button onClick={()=>window.location.href=`tel:${selectedUser.number}`} className='w-full bg-green-600 text-white py-2 px-5 rounded-lg cursor-pointer'>call</button>
    <button className='w-full bg-yellow-400 text-white py-2 px-5 rounded-lg cursor-pointer'>manage</button>
    <button onClick={onClose} className='w-full bg-red text-white py-2 px-5 rounded-lg cursor-pointer'>close</button>

  </div>
  )
}

export default UserListingPopup