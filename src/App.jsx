import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'
import Popup from './components/Popup'

const App = () => {
   const [ showPopup,setShowPopup] = useState(false)

  return (
  <div className="min-h-screen flex justify-center bg-gray-200 ">
  <div className="max-w-[430px] w-full h-screen bg-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden">
    <Header openPopup ={()=> setShowPopup(true)}/>
    <Content />
    <Footer />
    <Popup isOpen={showPopup} closePopup ={()=> setShowPopup(false)} />
  </div>
</div>
  )
}

export default App
