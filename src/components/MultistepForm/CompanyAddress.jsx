import React from 'react'

const CompanyAddress = ({formData,handleSubmit,handleChange,readOnly= false}) => {
  
  return (

        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col justify-center h-full'>
        <input 
        type='text'
        placeholder='Pincode'
        readOnly={readOnly}
        name="pincode"
        value={formData?.pincode || ""}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='text'
        placeholder='City'
         readOnly={readOnly}
        name="city"
        value={formData?.city || ""}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
      <input 
        type='text'
        placeholder='District'
         readOnly={readOnly}
        name="district"
        value={formData?.district || ""}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
          <input 
        type='text'
        placeholder='State'
         readOnly={readOnly}
        name="state"
        value={formData?.state }
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        </form> 

  )
}

export default CompanyAddress