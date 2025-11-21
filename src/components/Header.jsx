import React from 'react'
import popupIcon from '../assets/popup-icon.svg'
const Header = () => {
  return (
 <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-(--color-red) h-20 z-50 flex items-center justify-end px-5">
  
<button className=" bg-white overflow-hidden rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
  <img src={popupIcon} alt="Popup Icon" className="w-15 h-15 overflow-clip" />
</button>
    


</header>


  )
}

export default Header