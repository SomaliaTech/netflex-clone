import { Link } from "react-router-dom"


const HeroSection = () => {
  return (
    <div 
    
    className="flex min-h-screen flex-col itmes-center"
    style={{backgroundImage: `linear-gradient(rgb(0 0 0/60%),rgb(0 0 0/60%)),url(./images/misc/home.jpeg)`}}
    >
<header>
    <div className="flex justify-between">
<div className="my-2 mx-4">
    <Link to='/'  
    
    >
<svg
className="w-32 h-10 my-4"
xmlns="http://www.w3.org/2000/svg" 
width="2500" height="677" viewBox="0.238 0.034 1024 276.742">
    <path fill="#d81f26" d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0H1024z"/></svg>
</Link>
</div>

<div className="my-8 mx-4 ">
    <Link to='Login' 
    className="rounder py-2 px-8 bg-[#ef0114] text-white "
    >
    
    Sing In
    </Link>

</div>
    </div>
</header>

<main className="flex flex-1 flex-col justify-center items-center text-center sm:px-10 text-white">
    <h1 className="max-w-lg text-6xl font-bold ">Unlimited Movies, TV Shows, and more</h1>
    <h2 className="my-4 font-blod text-2xl">Watch anywhere. Cancel anytime.</h2>
    <p className="text-lg ">Ready to watch? Enter your emial to create or restart your memebership</p>
<div className="m-4 space-y-0 md:space-x-1 flex sm:flex-col sm:space-y-0 flex-col  lg:flex-row ">
<input type="text" placeholder="Enter your Address " className=" w-full sm:w-0 min-w-[400px] px-10 py-4 flex justify-center items-center sm:p-4 text-black outline-none " />
<button className="  py-2 px-12 bg-[#f22626] md:w-full md:h-16 sm:py-0 flex items-center justify-center space-x-2 md:text-lg relative  mx-aut w-full  ">Get started

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

</button >



</div>


</main>

    </div>
  )
}

export default HeroSection