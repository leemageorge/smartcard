import React, { useState } from 'react'

const UserPersonal = () => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName :"",
    lastName :"",
    email:"",
    pincode:"",
    city:"",
    district:"",
    state:"",
    address:""
  })

  const handleChange = (e=>{
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]:e.target.value})
  })
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(personalDetails)
  }
  return (
   <div className='w-full flex flex-col items-center overflow-y-scroll px-5 pt-20 pb-[30px] bg-gray-light'>
      <form onSubmit={handleSubmit} className='max-w-[350px] w-full space-y-3'>
        <h2 className='text-2xl font-semibold text-center text-gray-700 mb-6'>User Personal Details</h2>
        <input 
        type="text"
        name="firstName"
        placeholder='First Name' 
        value={personalDetails.firstName}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
         <input 
        type="text"
        placeholder='Last Name' 
        name='lastName'
        value={personalDetails.lastName}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
        <input 
        type="email"
        placeholder='Email' 
        name='email'
        value={personalDetails.email}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
         <input 
        type="text"
        placeholder='Pincode' 
        name='pincode'
        value={personalDetails.pincode}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
         <input 
        type="text"
        placeholder='City' 
        name='city'
        value={personalDetails.city}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
         <input 
        type="text"
        placeholder='District' 
        name='district'
        value={personalDetails.district}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
         <input 
        type="text"
        placeholder='State' 
        name='state'
        value={personalDetails.state}
        onChange={handleChange} 
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 '
        />
        <textarea
        placeholder='Address'
        name='address'
        value={personalDetails.address} 
        onChange={handleChange}
        rows="3"
        className='w-full px-5 py-1 border border-gray-300 focus:border-red focus:ring-1 focus:ring-red rounded outline-none transition duration-200 resize-none'/>

      </form>
    </div>
  )
}

export default UserPersonal