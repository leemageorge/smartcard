import React from 'react'

const CompanyAddress = ({formData,handleSubmit,handleChange}) => {
  return (
     <div className="'w-full h-screen flex flex-col overflow-y-scroll px-5 md:pt-20 pt-30  shadow-md bg-gray-light ">
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
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
    </div> 
  )
}

export default CompanyAddress