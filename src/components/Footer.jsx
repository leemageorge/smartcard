import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t-2 border-red h-[100px] z-50 flex items-center justify-around">
{/* user button */}
      <div className="flex flex-col gap-1 items-center text-black cursor-pointer">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <span className="text-sm leading-wider tracking-wider font-bold mt-1 ">USERS</span>
      </div>
      {/* add button */}
        <div className="relative -top-[50px]">
         <div className="w-[70px] h-[70px] rounded-full bg-white text-[40px] font-light
             border-[3px] border-red flex items-center justify-center shadow-md">
          <span className=" text-red">+</span>
        </div>
        </div>

      {/* request button */}
      <div className="flex flex-col items-center gap-1 text-black cursor-pointer">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" text="black" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.39 1.85.63 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span className="text-sm font-bold tracking-wider mt-1">REQUEST</span>
      </div>
    </footer>
  );
};

export default Footer;
