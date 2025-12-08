import React from 'react'

const SocialLinks = ({formData,handleSubmit,setFormData,handleChange}) => {
      const handleBackspace = (e,index)=>{
        if(e.key === "Backspace"){
          if(formData.website[index] === "" && index > 0){
            const updated = [...formData.website]
            updated.splice(index,1)
            setFormData({...formData,website:updated})
          } }
        }
  
  return (
     <div className="'w-full h-full flex flex-col justify-center overflow-y-scroll px-5 pt-20 shadow-md bg-gray-light ">
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
        <input 
        type='text'
        placeholder='Facebook Link'
        name="fbLink"
        value={formData.fbLink}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
        type='text'
        placeholder='Insta Link'
        name="InstaLink"
        value={formData.InstaLink}
        onChange={handleChange} 
        className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
        <input 
         type='text'
         placeholder='LinkedIn Link'
         name="linkedin"
         value={formData.linkedin}
         onChange={handleChange} 
         className='w-full px-5 py-2 border-2
         border-gray-300 focus:border-red focus-ring-1
          focus:ring-red rounded outline-none 
          transition duration-200  '/>
          <input 
           type="text"
           placeholder="X (Twitter) Link"
           name="xLink"
           value={formData.xLink}
           onChange={handleChange}
           className="w-full px-5 py-2 border-2
           border-gray-300 focus:border-red
            focus:ring-1 focus:ring-red rounded 
            outline-none transition duration-200"/>
          <div className='space-y-3'>
            {
              formData.website.map((link,index)=>(
                <input 
                key={index}
                type="text"
                placeholder='Website'
                value={link}
                onChange={(e)=>{
                  const updated = [...formData.website]
                  updated[index]= e.target.value
                  setFormData({...formData, website:updated})
                }}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="w-full px-5 py-2 border-2
                 border-gray-300 focus:border-red
                 focus:ring-1 focus:ring-red rounded 
                 outline-none transition duration-200"
                />
              ))
            }
          <div className='flex justify-end'>
            <button
            type='button'
            onClick={()=>
              setFormData({
                ...formData,
                website:[...formData.website,""]
              })
            }
            className='px-4 py-2 bg-red
            text-white rounded cursor-pointer hover:bg-red-700'
            >
            + Add Website
            </button>
          </div>
          </div>

        </form>
    </div> 
  )
}

export default SocialLinks