import React, { useEffect, useRef, useState } from 'react'
import SendIcon from "../assets/send.svg"
const ChatWindow = ({activeUser,onClose}) => {
    const getDate =()=>{
        const now = new Date();
        return now.toLocaleDateString()
     
    }
    const [message,setMessage] = useState([
        {sender:"user",text:"Hello, I need help with my account.",date:getDate()},
        {sender:"agent",text:"Sure, I'd be happy to assist you. What seems to be the problem?",date :getDate()},
        {sender:"user",text:"I'm unable to log in despite entering the correct credentials.",date:getDate()},
        {sender:"agent",text:"Have you tried resetting your password using the 'Forgot Password' link?",date:getDate()}
    ])

    const[input,setInput] = useState("")
    const bottomRef= useRef(null)

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behaviour:"smooth"})
    },[message])

   
    const sendMessage =()=>{
        if(input.trim() === "") return;

        setMessage(prev=>[
            ...prev,
            {
                sender:"user",
                text:input,
                date: getDate()
            }
        ])
        
        setInput("")

        setTimeout(()=>{
            setMessage(prev=>
            [
            ...prev,
            {
                sender:"agent",
                text:["ok Done","sure","will do it right now"][Math.floor(Math.random()*3)],
                date:getDate()
                }
            ])
        },800)

        if (!activeUser) return null
    }
  return (
     <div className='w-full max-w-[430px] h-10 bg-red'>
        <div className="min-h-screen h-full flex flex-col  pt-16 "> 
             <button onClick={onClose} className='flex justify-start mb-6 px-5 text-gray-400'>← Back</button>
              <div className=' w-full max-w-[350px] bg-white max-h-[80vh] overflow-y-scroll rounded-lg shadow-[0_3px_10px_rgba(0,0,0,0.2)] mx-auto px-5 pt-10 pb-6'>
        <div className='flex items-center justify-between text-md border-2 border-gray-400 text-gray-400 mb-6 w-full px-5 py-2  rounded-lg font-semibold'>
            <h2>{activeUser.name}</h2>
        <p>{activeUser.number}</p>
        </div>
        {message.map((msg,index)=>(
            <div key={index} className='mb-3'>
                <div className={`flex ${msg.sender === "agent" ? "justify-start" : "justify-end"} mb-1 text-xs text-gray-500`}>
                   { msg.date}
                </div>
                {/* <div className={`${msg.sender === "agent" ? "bg-gray-200 text-gray-800 px-5 py-2 rounded-lg ml-auto":"bg-gray-100 text-gray-800 px-5 py-2 rounded-lg ml-0 text-right  "}`}>
                    {msg.text}
                </div> */}

                <div className={`flex ${msg.sender === "agent" ? "justify-start" : "justify-end"}`}>
                    <div className={msg.sender === "agent" ? "bg-gray-100 px-2 py-1 rounded-lg w-3/4 ":"bg-red-100 px-5 py-1 rounded-lg w-3/4"}>
                        {msg.text}
                    </div>
                </div>      
            </div>
        ))}
        <div ref={bottomRef} />

     <div className="mt-4 flex items-center gap-2">

  {/* Message Input */}
  <input
    type="text"
    value={input}
    placeholder="Type message..."
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e)=>{if(e.key === "Enter" && input.trim()){sendMessage()}}}
    className="flex-1 border border-gray-400 rounded-lg
               px-3 py-3 outline-none
               focus:border-red"
  />

  {/* Send Button */}
  <button
    onClick={sendMessage}
    className="border border-gray-400 rounded-lg
               px-3 py-3 flex items-center justify-center
               hover:bg-gray-100"
  >
    <img src={SendIcon} alt="Send" className="w-5 h-5" />
  </button>

</div>

    </div>
     </div>
     </div>
  )
}

export default ChatWindow