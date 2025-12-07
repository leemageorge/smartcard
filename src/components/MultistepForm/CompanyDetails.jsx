import React from 'react'

const CompanyDetails = ({formData,handleSubmit,handleChange}) => {
  return (
      <div className="'w-full h-screen flex flex-col overflow-y-scroll px-5   shadow-md bg-gray-light ">
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
          <h2 className='text-xl font-semibold text-center text-gray-700 mb-6'>Professional Details</h2>
        <input 
        type='text'
        required
        placeholder='Company Name'
        name="companyName"
        value={formData.companyName}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='text'
        placeholder='Designation'
        name="designation"
        value={formData.designation}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
           <textarea  
        type= "text" 
        rows="4"
        onChange={handleChange} 
        placeholder='Company Address'
        name='companyAddress' 
        value={formData.companyAddress}
        className='border-2 border-gray-300 resize-none px-5 py-2 focus:ring-1 focus:ring-red focus:border-red rounded outline-none transition duration-200'
        />
        </form>
    </div> 
  )
}

export default CompanyDetails