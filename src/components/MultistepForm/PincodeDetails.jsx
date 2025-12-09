import React from 'react'

const PincodeDetails = ({formData,handleSubmit,handleChange}) => {
  return (
   
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
          {/* <h2 className='text-xl font-semibold text-center text-gray-700 mb-6'>Personal Details</h2> */}
        <input 
        type='text'
        placeholder='Pincode'
        name="pincode"
        value={formData.pincode}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='text'
        placeholder='City'
        name="city"
        value={formData.city}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
      <input 
        type='text'
        placeholder='District'
        name="district"
        value={formData.district}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
          <input 
        type='text'
        placeholder='State'
        name="state"
        value={formData.state}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
         
    
        </form>

  )
}

export default PincodeDetails