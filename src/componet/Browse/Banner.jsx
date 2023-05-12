import  axios  from "axios"
import BASE_IMAGE_URL from '../../constents'
import requests from "../../requst"
import { useState, useEffect } from 'react';
import {AiFillPlayCircle,AiFillInfoCircle} from 'react-icons/ai'
import { useRecoilState } from "recoil";
import { ModalState, movesDaynmic } from './../../atoms/ModalState';

const Banner = () => {
const [MovoeDaynic , setMoviesDaynmic] = useRecoilState(movesDaynmic)
const [movieshow ,settermovie]=useState([])
const [movieData, showMovieData] = useRecoilState(ModalState)
useEffect(()=>{
    const request = async ()=>{
        const {data} = await axios.get(requests.fetchTopRated)
        settermovie(
data.results[Math.floor(Math.random()* data.results.length)]
        )
    }
    request()
},[])
// console.log(movieshow)

  return (
    <div className="flex  lg:justify-end  md:spcae-y-4 flex-col space-x-4 py-14 lg:h-[64vh] lg:pb-14 ">
        <div className="absolute top-0 left-0 -z-10 h-[96vh] ">
        <img src={`${BASE_IMAGE_URL + movieshow.backdrop_path || poster_path}`} alt=""  className="w-screen  h-screen object-cover"/>
        </div>

        

    <h1 className="text-xl md:max-2xl md:text-5xl lg:text-7xl text-[#c3c3c3] font-bold">{movieshow.title || movieshow.orginal_title}</h1>

    <div className="flex items-center space-x-3">
    <button 
    onClick={()=>{
showMovieData(true)
setMoviesDaynmic(movieshow)

    }}


    className="flex items-center  bg-white rounded px-5 py-2 md:px-6 md:py-2 transition hover:bg-gray-50 text-black my-4">
        Play

        <AiFillPlayCircle className="w-7 h-6 ml-3"/>
    </button>
    <button className="flex items-center bg-[#303030] px-4 py-2 md:px-4 md:py-2 space-x-2 rounded ml-2">
        More Info
<AiFillInfoCircle className="w-7 h-6 "/>
    </button>
</div>

<p className="text-lg text-[#ffffff] max-w-sm md:max-xl text ">{movieshow.overview}</p>

    </div>
    
  )
}
 
export default Banner