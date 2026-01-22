import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

const AdminDashboard = () => {
     const [showPopup, setShowPopup] = useState(false);
        
      const handleOpenPopup = () => {
        setShowPopup(true);
      };  
  return (
       <div className="flex justify-center bg-gray-100  ">
      <div className="max-w-[430px] w-full flex flex-col items-center relative">
        <Header openPopup={handleOpenPopup} />
        <h1 className='pt-20 text-xl'>Admin Dashboard</h1>
        {/* <Content /> */}
       {/* <UserPersonal />
       <UserProfessional /> */}
        {/* <div className=" pt-25 px-5 pb-10 sm:pb-[130px] max-w-[380px] w-full h-screen overflow-y-scroll ">
         <MultistepForm />
        </div> */}
        <Footer />
        <Popup isOpen={showPopup} closePopup ={()=> setShowPopup(false)} />
      </div>
    </div>
  )
}

export default AdminDashboard