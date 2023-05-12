import React from 'react'


const Featur = ({title,description,image, video, id}) => {

  return (
    <div className={`mx-auto flex justify-center items-center  flex-row ${id & 2 !== 0 ? 'sm:flex-row' : 'sm:flex-row-reverse' } space-y-10`} >
        <div className='mt-12  space-y-4 flex-1 tracking-wider ' >
            <h1  className='max-w-lg text-4xl  font-bold'>{title}</h1>
            <h2 className='text-2xl tracking-normal my-2'>{description}</h2>
        </div>
        <div className='relative flex-1'>
   <img 
   className='z-10'
   src={`./images/${image}`}/>
   <video 
   className='absolute top-6 sm:top-20 sm:left-16 sm:w-97.1  -z-10'
   loop 
   autoPlay
   muted
   type="watch.mp4v"
   src={`./images/${video}`}/>

        </div>
        
    </div>
  )
}

export default Featur