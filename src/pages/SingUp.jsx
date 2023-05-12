import {Link} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {auth} from "../firebase/Firebase"
import { createUserWithEmailAndPassword,} from 'firebase/auth'
const Singup = () => {
  const {register,handleSubmit, formState: {errors}} = useForm()
 
  const onSubmit = async (data)  =>{
try{
  const {email, password} = data;

  const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
alert("Created secssfully")
}catch (err){

  console.log(err)
 
}

  }
    return (
      <div>
    <div className="flex flex-col items-center w-screen h-screen justify-center ">
      <img 
      className="w-screen h-screen object-cover sm:inline absolute"
      src="./images/misc/home.jpeg" alt="" />
     <Link to="/"
     
     >
     <img
      className="absolute top-0 left-3 w-[100px] md:w-[200px] my-6"
      src="./images/log-svg.png" alt="" />
     </Link>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative bg-black/60 px-6 md:max-w-md md:px-20 py-5  ">
        <h1 className="text-white text-2xl font-semibold">SingUP</h1>
        <label className="intial-block w-full">
          <input
          {...register("email", {required : "Email is not Enougth"})}
          type="email" placeholder="Enter your email" className="form-control" />

        </label>
        <label className="intial-block w-full">
          <input
          {...register("password", {required: "Please enter your Passowrd" , minLength:{
            value: 8,
            message: ""
          }})}
          type="password" placeholder="Enter your password" className="form-control" />
<p className='text-orange-500 py-1 text0s'>{errors.password?.message}</p>
        </label>
        <button className="btn">SingUP</button>
        <div className="flex space-x-4 my-5">
    <span className="text-gray-400 font-normal">
    Already have Create..
    </span>
<Link

to='/Login' 
    className='text-xl text-white underline '
    >
    
   SING IN
    </Link>
</div>
<p className="text-gray-300   font-light ">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
      </div>  
      </div>
    )
  }
  
  export default Singup