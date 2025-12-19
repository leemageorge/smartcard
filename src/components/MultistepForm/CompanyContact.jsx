import React from 'react'

const CompanyContact = ({formData,handleSubmit,handleChange,readOnly=false}) => {
  return (
 
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
        <input 
        type='email'
        readOnly={readOnly}
        placeholder='Company Email'
        name="companyEmail"
        value={formData?.companyEmail || ""}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='tel'
        placeholder='Contact Number'
        readOnly={readOnly}
        name="contactNumber"
        value={formData?.contactNumber || ""}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
           <input 
             type='tel'
             placeholder='Whatsapp Number'
             readOnly={readOnly}
             name="WhatsappNumber"
             value={formData?.WhatsappNumber || ""}
              onChange={handleChange} 
              className='w-full px-5 py-2 border-2
               border-gray-300 focus:border-red focus-ring-1
                focus:ring-red rounded outline-none 
                transition duration-200  '/>    
        </form>

  
)}

export default CompanyContact