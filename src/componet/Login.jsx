import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useForm } from "react-hook-form";
import {Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase/Firebase";
 
const  Login = ()=> {
    const navgator = useNavigate()
    const {register,handleSubmit, formState: {errors}}= useForm()
    
  const onSubmit= (data)=>{
console.log('login')
navgator('/')
  }
  return (
    <div className='reltive flex flex-col md:justify-center md:items-center w-screen h-screen -z-10'>
            <img 
             className= ' absolute sm:inline w-full h-screen  object-cover bg-black'
            src="./images/misc/home.jpeg" alt="" />
       
        <Link to='/'>
        <img 
        className='absolute top-0 left-2 w-[100px] md:w-[200px] py-5 '
        src="./images/log-svg.png" alt="" />
        </Link>

       <form 
  onSubmit={handleSubmit(onSubmit)}
       className='relative mt-24 space-x-4 rounded bg-black/40 py-10 px-6   md:mt-0 md:max-w-md md:px-14 md:px-auto '>
<h1 className=' my-5 text-white text-xl font-sembibold '>Sing in</h1>
<label className='inline-block w-full'>
    <input 
 
    {...register("email" ,{required : "This is a required", minLength:{
        value : 4,
        message: "min length is 4"

    }

})}
    type="email"   placeholder="Enter your Email"  className='form-control'/>
</label>
<label className='inline-block w-full'>
    <input
    
    {...register('password',{required: 'this is required',minLength: {
        value : 10,
        message: 'plase enter',
     
    }})}
    type="password"  className='form-control'
    placeholder="Password"
    />
    {errors.password?.message }
</label>
<button className='btn'>SingIn</button>
<div className="flex space-x-4 my-5">
    <span className="text-gray-400 font-normal">
    New to Netflix?
    </span>
<Link

to='/SingUp' 
    className='text-xl text-white underline '
    >
    
   SING UP
    </Link>
</div>
<p className="text-gray-300   font-light ">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
       </form>
      
         </div>
    
  )
}

export default Login