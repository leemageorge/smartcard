import React, { useState } from 'react';

const UserProfessional = () => {

  const [professionalDetails, setProfessionalDetails] = useState({
    companyName: "",
    designation: "",
    companyAddress: "",
    companyPincode: "",
    companyEmail: "",
    contactNumber: "",
    WhatsappNumber: "",
    fbLink: "",
    InstaLink: "",
    linkedin: "",
    xLink: "",
    website: "",
    aboutCompany: "",
    photos: [],
    videos: []
  });

  const handleChange = (e) => {
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setProfessionalDetails({
      ...professionalDetails,
      [e.target.name]: [...e.target.files]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(professionalDetails);
  };

  return (
    <div className='w-full flex flex-col items-center overflow-y-scroll px-5 pb-[150px] bg-gray-light'>
      <form onSubmit={handleSubmit} className='max-w-[350px] w-full space-y-3'>

        <h2 className='text-2xl font-semibold text-center text-gray-700 mb-8'>
          User Professional Details
        </h2>

        <input 
          type="text"
          name="companyName"
          placeholder='Company Name'
          value={professionalDetails.companyName}
          onChange={handleChange}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none transition duration-200 focus:border-red focus:ring-1 focus:ring-red'
        />

        <input 
          type="text"
          name="designation"
          placeholder='Designation'
          value={professionalDetails.designation}
          onChange={handleChange}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none transition duration-200 focus:border-red focus:ring-1 focus:ring-red'
        />

        <input 
          type="text"
          name="linkedin"
          placeholder='LinkedIn'
          value={professionalDetails.linkedin}
          onChange={handleChange}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none transition duration-200 focus:border-red focus:ring-1 focus:ring-red'
        />

        <input 
          type="text"
          name="xLink"
          placeholder='X Link'
          value={professionalDetails.xLink}
          onChange={handleChange}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none transition duration-200 focus:border-red focus:ring-1 focus:ring-red'
        />

        <input 
          type="text"
          name="website"
          placeholder='Website'
          value={professionalDetails.website}
          onChange={handleChange}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none transition duration-200 focus:border-red focus:ring-1 focus:ring-red'
        />
     <textarea
          placeholder='Company Address'
          name='companyAddress'
          value={professionalDetails.companyAddress}
          onChange={handleChange}
          rows={3}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none focus:border-red focus:ring-1 focus:ring-red transition duration-200 resize-none'
        />
        <textarea
          placeholder='About the Company'
          name='aboutCompany'
          value={professionalDetails.aboutCompany}
          onChange={handleChange}
          rows={4}
          className='w-full px-5 py-1 border border-gray-300 rounded outline-none focus:border-red focus:ring-1 focus:ring-red transition duration-200 resize-none'
        />
        
        

        {/* Upload Photos */}
        <label className='text-gray-600 font-medium'>Upload Photos</label>
        <input
          type="file"
          name="photos"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className='w-full'
        />

        {/* Upload Videos */}
        <label className='text-gray-600 font-medium'>Upload Videos</label>
        <input
          type="file"
          name="videos"
          accept="video/*"
          multiple
          onChange={handleFileChange}
          className='w-full'
        />

        {/* Submit Button */}
        <button 
          type="submit"
          className='w-full bg-red text-white py-2 rounded font-medium mt-4'
        >
          Save Details
        </button>

      </form>
    </div>
  );
};

export default UserProfessional;
