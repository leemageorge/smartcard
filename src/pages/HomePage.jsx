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
    <div className="min-h-screen flex justify-center bg-gray-200 overflow-y-hidden">
      <div className="max-w-[430px] w-full h-full bg-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-y-scroll relative">
        <Header openPopup={handleOpenPopup} />
        {/* <Content /> */}
       {/* <UserPersonal />
       <UserProfessional /> */}
      <MultistepForm />
        <Footer />
        <Popup isOpen={showPopup} closePopup ={()=> setShowPopup(false)} />
      </div>
    </div>
  );
};

export default HomePage;
