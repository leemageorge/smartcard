
import PersonalDetails from './PersonalDetails'
import PersonalAddress from './PersonalAddress'
import CompanyAddress from './CompanyAddress'
import CompanyDetails from './CompanyDetails'
import SocialLinks from './SocialLinks'
import AboutCompany from './AboutCompany'
import GalleryUploads from './GalleryUploads'
import { useFormHook } from "../../hooks/useFormHook";
import PincodeDetails from './PincodeDetails'
import CompanyContact from './CompanyContact'
const MultistepForm = () => {
    const{step,onNext,onPrev,formData,setFormData,handleChange,handleSubmit} = useFormHook()

    const steps= [
        <PersonalDetails formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange}/>,
         <PincodeDetails formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <PersonalAddress  formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
         <CompanyDetails  formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <CompanyAddress  formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <CompanyContact formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <SocialLinks  formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <AboutCompany  formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange} />,
        <GalleryUploads formData={formData} setFormData={setFormData}  onNext={onNext} onPrev={onPrev} handleSubmit={handleSubmit} handleChange={handleChange}/>
    ]
  return (
    <div className='w-full flex flex-col justify-center  min-h-screen h-full px-5 pt-20 pb-[130px] '>
      {steps[step - 1]}

{step === 1 ? (

  <div className="flex justify-end mt-4">
    <button
      onClick={onNext}
      type="submit"
      className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer"
    >
      Save & Continue
    </button>
  </div>
) : step === steps.length ? (
 
  <div className="flex justify-between items-center mt-4">
     <button
      type="submit"
      onClick={onPrev}
      className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer"
    >
      ← Back
    </button>
    <button
      type="submit"
      onClick={handleSubmit}
      className="px-6 py-1 bg-red text-white rounded-lg hover:bg-darkred transition cursor-pointer"
    >
      Final Submit
    </button>
  </div>
) : (

  <div className="flex justify-between items-center mt-4">
    <button
      type="submit"
      onClick={onPrev}
      className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer"
    >
      ← Back
    </button>

    <button
      type="submit"
      onClick={onNext}
      className="px-6 py-1 border border-gray-300 text-gray-700 rounded-lg 
                 hover:bg-red hover:text-white transition cursor-pointer"
    >
      Save & Continue
    </button>
  </div>
)}

    </div>
  )
}

export default MultistepForm