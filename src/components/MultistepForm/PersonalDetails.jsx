import React from 'react'

const PersonalDetails = ({formData,handleSubmit,handleChange}) => {
  
  return (
    <div className="'w-full h-full flex flex-col overflow-y-scroll px-5 md:pt-20 pt-30  shadow-md bg-gray-light ">
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
          <h2 className='text-xl font-semibold text-center text-gray-700 mb-6'>Personal Details</h2>
        <input 
        type='text'
        placeholder='First Name'
        required
        name="firstName"
        value={formData.firstName}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='text'
        placeholder='Last Name'
        name="lastName"
        required
        value={formData.lastName}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
      <input 
        type='email'
        placeholder='Email'
        required
        name="email"
        value={formData.email}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        </form>
    </div> 
  )
}

export default PersonalDetails