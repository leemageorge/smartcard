import React, { useState } from 'react'

const defaultFormData = {
        firstName:"",
        lastName:"",
        email:"",
        pincode:"",
        city:"",
        district:"",
        state:"",
        address:"", 
        companyName:"",
        designation:"",
        companyAddress:"",
        companyPincode:"",
        companyEmail:"",
        contactNumber:"",
        WhatsappNumber:"",
        fbLink:"",
        InstaLink:"",
        linkedin:"",
        xLink:"",
        website:[""],
        aboutCompany:"",
        photos:[],
        videos:[]

}
export const useFormHook = (initialData = null) => {
    const[step,setStep] = useState(1)
    
    const [formData, setFormData] = useState(() =>
        initialData ? { ...defaultFormData, ...initialData,website:initialData.website??[""] } : defaultFormData
);

    const onNext = () => {
        setStep((prev)=>prev+1)
    }
    const onPrev = ()=>{
        setStep((prev)=>prev-1)
    }

    const handleChange = ((e)=>{
      const {name,value} = e.target
    setFormData((prev)=>({
      ...prev,
      [name]:value
    }))
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    // localStorage.setItem("formData",JSON.stringify(formData))
    alert("Form Submitted Successfully!");
    // onNext()
  }

  return {
   step,
   onNext,
   onPrev,
   formData,
   setFormData,
   handleChange,
   handleSubmit
}
}

