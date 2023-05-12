import { useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
// import {FcCloseUpMode} from 'react-icons/fc'



const Faq = ({title,description}) => {

    const [plus,minus] = useState(false)
    console.log(plus)
  return (
    <div className='mx-auto flex flex-col sm:max-w-screen-md px-2 py-[2px]'>

        <div className='sm:px-6 bg-[#303030] flex justify-between my-1 px-4 py-5'>
            <h1>{title}</h1> {(plus ? <AiOutlineMinus
            onClick={()=>minus(!plus)}
            className="w-7 h-6 cursor-pointer"
            /> : <AiOutlinePlus
            
            className="cursor-pointer w-7 h6"
onClick={()=>minus(!plus)}
            />)}
  
        </div>
       {plus && <div
       
        
        className='bg-[#404040] text-lg py-7 px-2'> 
        <p>{description}</p>
        </div>}
    </div>
  )
}

export default Faq