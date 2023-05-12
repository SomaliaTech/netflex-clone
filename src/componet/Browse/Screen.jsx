import React, { useRef } from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import BASE_IMAGE_URL from '../../constents';
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'
import { useRecoilState } from 'recoil';
import {rowmovies} from '../../atoms/ModalState'



const Screen = ({title,url}) => {
  const [movies,setmovies] =useState([])
  const [scroll,setScroll] =useState(false)
  
useEffect(()=>{
const rowMovies = async ()=>{
  const {data} = await axios.get(url)
setmovies(
 data.results
) 
}

rowMovies()
},[])

// useEffect(()=>{
//   const response = async ()=>{
//     const data = await axios.get(rowmovie)
//     console.log(data)
//   }
// })

const [rowmovie,setrowmovie]= useRecoilState(rowmovies)
// const [rowmovie,setrowmovie] = useState()
const imagerow =useRef();
const handleclick = (arrays)=>{
  setScroll(true);
  if(imagerow.current){

    // console.log(imagerow.current.scrollLeft)
    const {clientWidth, scrollLeft} = imagerow.current;
    const scrollto = arrays === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
    imagerow.current.scrollTo({left: scrollto, behavior: 'smooth'})
  }
}


  return (
    <div className='h-40'>
        
        <h1 className='tex-lg font-semibold'>{title}</h1>

        <div className='group relative md:ml-2 '>  
   <BsChevronLeft 
   onClick={()=> handleclick('left')}
   className=' absolute left-2 bottom-0 top-0 m-auto opacity-0 z-40 md:hover:scale-105 group-hover:opacity-100 cursor-pointer w-9 h-9 ' />
      
   <div className={`flex items-center space-x-0 md:p-2  overflow-x-scroll scrollbar-hide `}  ref={imagerow} >
    
    {
      
      movies && movies.map((movie) => (
      

        <div
      onClick={()=>{
       setrowmovie(true)
      }}
        
        className='min-w-[280px] md:mix-w-[260px] relative h-20 md:h-40 cursor-pointer md:hover:scale-105'>
   <img 
   key={movie}
   src={`${BASE_IMAGE_URL + movie.backdrop_path || movie.poster_path}`} alt=""
  
   className='relative object-cover'/>
        </div>
     
      ))
    }
        </div>
        <BsChevronRight 
        
        onClick={()=>handleclick('right')}
        className='absolute right-2 bottom-0 top-0 m-auto opacity-0 md:hover:scale-105 group-hover:opacity-100 cursor-pointer w-9 h-9 '/>
    </div>
    </div>
  )
}

export default Screen