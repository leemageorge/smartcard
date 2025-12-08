import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [ userPhoneNumber, setUserPhoneNumber ] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userPhoneNumber)
    navigate('/user-verify-otp')
  }
  return (
      <div className="w-full max-w-[430px] bg-red h-10 px-5 ">
      <div className="w-full max-w-[430px] h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-[350px]  bg-gray-100 rounded-2xl shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-8 space-y-6 flex flex-col items-center justify-center px-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          User Login
        </h2>
        <input
            type="tel"
            placeholder="Enter mobile number"
            value={userPhoneNumber}
            onChange={(e)=>setUserPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded-xl outline-none transition duration-200"/>
        <button type='submit'
          className="w-full bg-red hover:bg-red-700 text-white py-2 rounded-xl font-medium transition duration-200 shadow-[0_3px_10px_rgba(0,0,0,0.2)] cursor-pointer">
          Send OTP
        </button>
          </form> 
        </div>
        </div>
     


  )
}

export default UserLogin