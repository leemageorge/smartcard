import React, { useState } from 'react'

export const useFormHook = () => {
    const[step,setStep] = useState(1)
    
    const[formData,setFormData]= useState({
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

    })

    // Navigation

    const onNext = () => {
        setStep((prev)=>prev+1)
    }
    const onPrev = ()=>{
        setStep((prev)=>prev-1)
    }

    const handleChange = ((e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    localStorage.setItem("formData",JSON.stringify(formData))
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

