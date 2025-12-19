import { useState } from "react"
import { dummyFormData } from "../data/dummyFormData.js"
import {useFormHook} from "../hooks/useFormHook.js"
import PersonalDetails from "./MultistepForm/PersonalDetails"
import PersonalAddress from "./MultistepForm/PersonalAddress.jsx"
import PincodeDetails from "./MultistepForm/PincodeDetails.jsx"
import CompanyDetails from "./MultistepForm/CompanyDetails.jsx"
import CompanyAddress from "./MultistepForm/CompanyAddress.jsx"
import CompanyContact from "./MultistepForm/CompanyContact.jsx"
import SocialLinks from "./MultistepForm/SocialLinks.jsx"
import AboutCompany from "./MultistepForm/AboutCompany.jsx"
import GalleryUploads from "./MultistepForm/GalleryUploads.jsx"

const ManageForm = ({ onClose}) => {
  const {formData,handleChange,handleSubmit,setFormData} = useFormHook(dummyFormData)

  const [isEditing,setIsEditing] = useState(false)

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    console.log(formData)
    alert("Form submitted successfully")
  }
  return (
     <div className="w-full max-w-[430px]  bg-red h-10 px-5 ">
       <div className="min-h-screen h-full  flex flex-col pt-16 "> 
        <div className=' w-full max-w-[350px] bg-white max-h-[80vh] overflow-y-scroll rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] mx-auto px-5 pt-10 pb-6'>
       <div className="flex justify-end">
       
        <button onClick={()=>setIsEditing(!isEditing)} className="text-sm font-bold cursor-pointer border-0 outline-0">
          {isEditing ? "Save": "Edit"}
        </button>
       </div>
       <div className={`flex flex-col gap-3 ${ isEditing ? "text-gray-800" : "text-gray-400" }`}>
         <PersonalDetails
          formData={formData}
          handleChange={handleChange} 
          readOnly={!isEditing}/>
          <PincodeDetails
          formData={formData}
          handleChange={handleChange}
          readOnly={!isEditing} />
        <PersonalAddress 
          formData={formData}
          handleChange={handleChange} 
          readOnly={!isEditing} />
          <CompanyDetails 
          formData={formData} 
          handleChange={handleChange}
          readOnly={!isEditing}/>
          <CompanyAddress 
          formData={formData} 
          handleChange={handleChange}
          readOnly={!isEditing}/>
          <CompanyContact 
          formData={formData} 
          handleChange={handleChange}
          readOnly={!isEditing}/>
          <SocialLinks
          formData={formData} 
          handleChange={handleChange}
          readOnly={!isEditing}
          setFormData={setFormData}
           />
          <AboutCompany 
          formData={formData} 
          handleChange={handleChange}
          readOnly={!isEditing} />
          </div>
          <div className="mt-6">
            <GalleryUploads
          formData={formData} 
          setFormData={setFormData}
          handleSubmit={handleSubmit}/>
          </div>

          <div className="flex items-center justify-between mt-10 mb-10">
            <button onClick={onClose} className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer">Close</button>
            <button onClick={handleFormSubmit} className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer">Save Changes</button>
            
          </div>
        
       </div>
          
    </div>
    </div>
    
  )
}

export default ManageForm
