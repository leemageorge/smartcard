import React from 'react'
import { useNavigate } from 'react-router-dom'
import { accountOptions } from '../data/accountOptopns'

const Accounts = () => {
    const navigate = useNavigate()
  return (
     <div className="w-full max-w-[430px] bg-red h-10 px-5 ">
      <div className='min-h-screen h-full flex flex-col pt-15'>
        <div className='mb-6 flex justify-start px-5'>
          <button className='text-gray-400 cursor-pointer' onClick={()=>navigate(-1)} >
            ← Back
          </button>
        </div>
        <div className='border-2 w-full max-w-[350px] border-gray-200 rounded-lg p-5 mx-auto text-center space-y-2'>
        {/* <h2 className='text-lg text-gray-500 text-center '>Accounts Dashboard</h2> */}
         <h3 className='text-gray-500'>Total Credit Balance</h3>
         <p className='text-gray-500'>RS 4,500</p>
         <button className='bg-red px-10 py-1 rounded-lg text-white'>Recharge</button>
        </div>
        <div className=' border-bottom mt-10 space-y-5  px-5'>
          {accountOptions.map((account)=>(
            <div className='text-gray-500 py-1  border-b border-gray-300' key={account.path}>{account.label}

            </div>
          ))}
        </div>
      </div>
      </div>
  )
}

export default Accounts