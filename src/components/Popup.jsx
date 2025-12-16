import React from "react";
// import profileIcon from '../assets/dp1.png'
import { menuData } from "../data/menuData";
import { Link } from "react-router-dom";
const Popup = ({ isOpen, closePopup }) => {
 if(!isOpen) return null

  return (
   <div className="fixed h-full bg-black/40 top-0  left-1/2 -translate-x-1/2 w-full z-50  flex items-center justify-center overflow-hidden">
      <div className="w-full max-h-[80vh] max-w-[350px] bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-y-hidden ">
        <div className=" overflow-y-auto max-h-[80vh] ">
        <div className="h-[30vh] bg-red relative rounded-tl-lg rounded-tr-lg flex items-center justify-center">
        <button onClick={closePopup} className="text-white bg-red rounded-full w-[35px] h-[35px] text-sm font-semibold absolute top-5 right-5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:cursor-pointer">X</button>
        <div className="flex flex-col items-center ">
          {/* <button className=" bg-red w-20 h-20 mb-3 border-3 border-white overflow-hidden rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.2)] cursor-pointer">
            <img src={profileIcon} alt="Profile Icon" className="w-full h-full object-cover overflow-clip"/>
          </button> */}
          <h2 className="text-[20px] font-semibold text-white">John Doe</h2>
          <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-white opacity-90">user@example.com</p>
              <span className="text-white">|</span>
              <p className="text-white text-sm opacity-90">Logout</p>
          </div>
        </div>
       </div>
       <div className="divide-y divide-gray-200   ">
        {menuData.map((item, index) => (
        <Link to={item.url} key={index} className="flex items-center justify-between py-5 px-5">
          <div className="flex items-center gap-2">
            <img src={item.icon} alt={item.label} className="w-6 h-6"/>
             <span>{item.label}</span>
          </div>
          <span className="text-red"> &rsaquo; </span>
        </Link>
        ))
        }
       </div>
       </div>
      </div>
   </div>
  )
}


export default Popup;       
        