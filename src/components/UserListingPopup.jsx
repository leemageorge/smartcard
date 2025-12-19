


const UserListingPopup = ({onClose,selectedUser,setShowManage }) => {
  if (!selectedUser) return null;
  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2   gap-4 w-full mx-auto max-w-[350px] h-[30vh] bg-black/50 p-5 rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-center '>
    <a href={`tel:${selectedUser.number}`}  className='w-full bg-red text-white hover:bg-white hover:text-red py-2 px-5 rounded-lg cursor-pointer text-center'>Call</a>
    <button className='w-full bg-white text-red hover:text-white hover:bg-red py-2 px-5 rounded-lg cursor-pointer' onClick={()=>setShowManage(true)}>Manage</button>
    <div className="absolute top-2 right-5 text-xl">
    <button onClick={onClose} className=' text-white cursor-pointer'>X</button>
    </div>
  </div>
 
  )
}

export default UserListingPopup