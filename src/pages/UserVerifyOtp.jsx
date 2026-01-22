import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserVerifyOtp = () => {
    const[userVerificationCode,setUserVerificationCode] = useState("")
    const navigate = useNavigate();
    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(userVerificationCode)
         navigate('/admindashboard')
    }
  return (
   <div className="w-full max-w-[430px] bg-red h-10 px-5 ">
      <div className="w-full max-w-[430px] min-h-screen h-full flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-[350px]  bg-gray-100 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-8 space-y-6 flex flex-col items-center justify-center px-6">
        <h2 className="text-xl font-semibold text-center text-gray-700">Enter the verification code</h2>
        <input 
         type="text"
         value={userVerificationCode}
         placeholder='verification code'
         className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded-xl outline-none transition duration-200"
         onChange={(e)=>setUserVerificationCode(e.target.value)} />
         <button type='submit'
          className="w-full bg-red hover:bg-red-700 text-white py-2 rounded-xl font-medium transition duration-200 shadow-[0_3px_10px_rgba(0,0,0,0.2)] cursor-pointer">
          Verify and Login
        </button>
         </form>
    </div>
    </div>
  
  )
}

export default UserVerifyOtp