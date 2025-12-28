import React from 'react'

const SocialLinks = ({formData,handleSubmit,setFormData,handleChange,readOnly=false}) => {
      const handleBackspace = (e,index)=>{
       if(e.key === "Backspace" && formData.website[index].name ===""
        && formData.website[index].url ==="" && formData.website.length >1){
          const updated = [...formData.website]
          updated.splice(index,1)
          setFormData({...formData, website:updated})
        }
       
        }
  
  return (
        <form onSubmit={handleSubmit} className='max-w-[320px] w-full space-y-3 flex flex-col h-full'>
        <input 
        type='text'
        readOnly={readOnly}
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
           readOnly={readOnly}
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
            readOnly={readOnly}
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
              readOnly={readOnly}
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
                <div className='space-y-2'>
                  {index !== 0 && ( <input 
                key={index}
                type="text"
                   readOnly={readOnly}
                placeholder='Website Name'
                value={link.name}
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
                />)}
                
                 <input 
                key={index}
                type="text"
                   readOnly={readOnly}
                placeholder='Website Link'
                value={link.url}
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
                </div>
                
              ))
            }
          <div className='flex justify-end'>
            <button
            type='button'
            onClick={()=>
              setFormData({
                ...formData,
                website:[...formData.website,{name:"",url:""}]
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

  )
}

export default SocialLinks