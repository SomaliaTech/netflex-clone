import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ready() {

 const navigation = useNavigate() 
  return (
    <div className='flex flex-col sm:max-w-screen items-center justify-center my-4 py-8 px-1 mt-12 '>
        <h1 className='text-xl my-2'>Ready to watch? Enter your email to create or restart your membership.</h1>
<div className='flex flex-row px-20 py-8 '>
    <input type="text" placeholder='Pleace Enter your Address' className=' flex text-black  px-10 py-4 outline-none text-sm min-w-[400px] ' />
    <button onClick={()=>navigation('/ScreenLogin')} className='bg-[#c61b1b]  px-20 py-4'>Get Started</button>
</div>
    </div>
  )
}

export default Ready