import React from 'react'

const PersonalAddress = ({formData,handleSubmit,handleChange}) => {
  return (
    <div className="'w-full h-full flex flex-col justify-center overflow-y-scroll px-5 pt-20  shadow-md bg-gray-light ">
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
        <textarea  
        type= "text" 
        rows="4"
        onChange={handleChange} 
        placeholder='Personal Address'
        name='address' 
        value={formData.address}
        className='border-2 border-gray-300 resize-none px-5 py-2 focus:ring-1 focus:ring-red focus:border-red rounded outline-none transition duration-200'
        />
        
        </form>
    </div> 
  )
}

export default PersonalAddress