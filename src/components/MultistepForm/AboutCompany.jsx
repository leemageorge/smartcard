import React from 'react'

const AboutCompany = ({formData,handleSubmit,handleChange,readOnly=false}) => {
  return ( 
        <form onSubmit={handleSubmit} className='max-w-[380px] w-full space-y-3 flex flex-col'>
        <textarea  
        type= "text" 
        readOnly={readOnly}
        rows="4"
        onChange={handleChange} 
        placeholder='About Company'
        name='aboutCompany' 
        value={formData?.aboutCompany || ""}
        className='border-2 border-gray-300 resize-none px-5 py-2 focus:ring-1 focus:ring-red focus:border-red rounded outline-none transition duration-200'
        />
        
        </form>
  )
}

export default AboutCompany 