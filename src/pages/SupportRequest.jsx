import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getUsers } from '../service/userService'
import UserList from '../components/UserList'
import ChatWindow from '../components/ChatWindow'

const SupportRequest = () => {
  const [users,setUsers ] = useState([])
  const[activeUser,setActiveUser] = useState(null)
  const navigate = useNavigate()

  useEffect(()=>{
    getUsers().then((data)=>{
      setUsers(data)
    })
  },[])

  const renderRightIcon =(user)=>(
    <button onClick={()=>setActiveUser(user)} className='text-sm text-gra-400 px-3 py-1 border border-gray-400 rounded-lg hover:border-red cursor-pointer text-gray-400 '>Respond</button>
  )
  if (activeUser) {
    return (
      <ChatWindow
        activeUser={activeUser}
        onClose={() => setActiveUser(null)}
      />
    )
  }
  return (

    <div className='w-full max-w-[430px] h-10 bg-red'>
      <div className='min-h-screen h-full flex flex-col pt-15'>
        <div className='mb-6 flex justify-start px-5'>
          <button className='text-gray-400 cursor-pointer' onClick={()=>navigate(-1)} >
            ← Back
          </button>
        </div>
    <div className='bg-white w-full max-w-[350px] max-h-[80vh] overflow-y-scroll rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] mx-auto px-5 pt-10 pb-6 '>
      <div className='w-full  px-5 py-2 border-2 border-gray-300 hover:border-red rounded-lg text-center mb-6 cursor-pointer '>
        <Link to="" className='text-gray-400 text-lg' >Support Request</Link>
      </div>
    
      <UserList users={users} rightIcon={renderRightIcon} />
    </div>
    </div>
    </div>
  

   
  )
}


export default SupportRequest