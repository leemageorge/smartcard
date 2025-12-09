import { useState } from "react";
import Header from "../components/Header";
// import Content from "../components/Content";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import UserPersonal from "../components/UserPersonal";
import UserProfessional from "../components/UserProfessional";
import MultiStepForm from "../components/UserProfessional";
import MultistepForm from "../components/MultistepForm/MultistepForm";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };  

  return (
    <div className="flex justify-center bg-gray-100 min-h-dvh ">
      <div className="max-w-[430px] w-full h-dvh flex flex-col items-center relative">
        <Header openPopup={handleOpenPopup} />
        {/* <Content /> */}
       {/* <UserPersonal />
       <UserProfessional /> */}
        <div className="flex-1 pt-30 px-5 pb-10 max-w-[380px] w-full h-screen overflow-y-scroll">
         <MultistepForm />
        </div>
        <Footer />
        <Popup isOpen={showPopup} closePopup ={()=> setShowPopup(false)} />
      </div>
    </div>
  );
};

export default HomePage;
