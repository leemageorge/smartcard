import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  return (
  <div className="min-h-screen flex justify-center bg-gray-200 ">
  <div className="max-w-[430px] w-full h-screen bg-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden">
    <Header />
    <Content />
    <Footer />
  </div>
</div>
  )
}

export default App
