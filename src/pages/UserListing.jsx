import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { getUsers } from '../service/userService'
import { useNavigate } from 'react-router-dom'
import ArrowRight from "../assets/arrowRight.svg"
import UserListingPopup from '../components/UserListingPopup'
import ManageForm from '../components/ManageForm'

const UserListing = () => {
  const [users,setUsers ] = useState([])
  const [search,setSearch] = useState("")
  const [showManage,setShowManage] = useState(false)
  const [selectedUser,setSelectedUser] = useState(null)
  const navigate = useNavigate()

    const filteredUsers = users.filter((user)=>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.number.includes(search))

  useEffect(()=>{
    getUsers().then((data)=>{
      setUsers(data)
    })
  },[])

  const renderRightIcon = (user) => (
    <button onClick={() => setSelectedUser(user)}>
      <img src={ArrowRight} alt='Arrow icon'/>
    </button>
  )

  console.log(renderRightIcon)
  return (
    <>{!showManage &&
      <div className="w-full max-w-[430px] bg-red h-10 px-5 ">
      <div className="min-h-screen h-full flex flex-col  pt-16 "> 
        <div className='flex justify-start mb-6 px-5'>
        <button
        onClick={() => navigate(-1)}
        className="text-gray-400 " 
      >
        ← Back
      </button> 
        </div>
        <div className=' w-full max-w-[350px] bg-white max-h-[80vh] overflow-y-scroll rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] mx-auto px-5 pt-10 pb-6'>
         <input type='text' 
            placeholder='Search ' 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='w-full px-5 py-2 border-2
           border-gray-300 focus:border-red focus-ring-1
           focus:ring-red rounded outline-none 
            transition duration-200 '/>
                   
        <UserList users={filteredUsers} rightIcon={renderRightIcon}/>
      </div>
      </div>
    </div>
    
    }
   
    {!showManage && selectedUser && <UserListingPopup selectedUser={selectedUser}  setShowManage={setShowManage} onClose={() => setSelectedUser(null)} />}
    { showManage && 
     <ManageForm selectedUser={selectedUser} onClose={()=>setShowManage(false) } />}
    </>
      
   
  )
}

export default UserListing
                  