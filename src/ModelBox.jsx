import { Modal } from '@mui/material'
import  axios  from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { ModalState, movesDaynmic, volumePlayer } from './atoms/ModalState';
import PauseIcon from '@mui/icons-material/Pause';
import ReactPlayer from 'react-player';
import { FaPlus, FaThumbsDown, FaVolumeMute, FaVolumeOff, FaVolumeUp} from "react-icons/fa"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';




const ModelBox = () => {
const [modelshow, setmodel] = useRecoilState(ModalState);
const [movie, setMoviesDaynmic] = useRecoilState(movesDaynmic)
const [movies, setmoves ]= useState("")
const [isplaying, setplaying] = useState(false)
const [ismuted, setmuted] = useRecoilState(volumePlayer)
const [Ispicuted, setIspicuted] = useState(true)
const [genres,setgeneres] = useState([])
const handelclose =()=>{
  setmodel(false)
}


useEffect(()=>{
  const requestFetch = async ()=>{
   const { data } = await axios.get(
      `https://api.themoviedb.org/3/${
        movie?.media_type === "tv" ? "tv" : "movie"
      }/${movie?.id}?api_key=${
      // import.meta.VITE_API_APP_KEY
      import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=videos`
    );
    setgeneres(data.genres)
    setmoves(data?.videos.results[0].key)
  data.ggenres()
  }
requestFetch()
},[movie])


  return (
    <div>
        <Modal
        className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full  max-w-5xl rounded-md "
        open={modelshow}
        onClose={handelclose}
        // aria-labelleby="modal-modal-title"
        // aria-describedby="modal-modal-description"
        
        >
          <>
           <div className='relative  pt-[56.24%]'>
           <ReactPlayer 
          width='100%'
          height='100%'
           style={{position: 'absolute', top: 0, left: 0,}}

        url={`https://www.youtube.com/watch?v=${movies}`} 
    playing={isplaying}
    muted={ismuted}
    stopOnUnmount={Ispicuted}
        />
           <div className=' absolute bottom-10 flex items-center justify-between w-full px-10'>
            <div className='flex space-x-6' >
              <button className='flex items-center bg-white rounded px-8 transition hover:bg-[#c9c9c9]  '>
                {""}
                {isplaying ? 
                
                (<PauseIcon 
                onClick={()=>setplaying(false)}
                className='w-7 h-7 mr-1 text-red-600'/>  ):
             ( <PlayArrowIcon 
              onClick={()=>setplaying(true)}
              className='w-32 h-12 text-red-500'/>    
)}
              
                </button>
                <button className='flex items-center justify-center border-2 border-[lightgray] w-11 h-11 rounded-full transition hover:border-white/10 hover:bg-[#c9c9c9/60]'>
                
                  <FaPlus/>
               
                  </button>
                  <button >
                  <FaThumbsDown/>
                  
                  </button>
            </div>
            <div className='flex space-x-3'>
             {ismuted ? (
               <FaVolumeOff 
               onClick={()=>setmuted(false)}
               className='w-6 h-6 cursor-pointer'/>
             ) : <FaVolumeUp 
             onClick={()=>setmuted(true)}
             className='w-6 h-6 cursor-pointer'/>}
             <div>
              {Ispicuted ? (
                <CropFreeIcon 
                onClick={()=>setIspicuted(false)}
                className='w-8 h-6 cursor-pointer'/>
              )  : (
              <ZoomOutMapIcon 
              onclick={()=> setIspicuted(true)}
              />
             )}
              
             </div>
            </div>
            
           </div>
           </div>
        <div className='flex flex-col space-y-6 bg-[#303030] items-center text-lg p-10'>
          <div className='space-x-6 flex items-center '>
           <div className='flex space-x-4 justify-start items-start'>
            <p className='text-green-600 font-semibold   '>{movie?.vote_average * 10} % Match</p>
           <p className='text-lg text-gray-400'>{movie?.release_date  || movie?.first_air_date}</p>
           </div>
           <div>
            <p className='flex justify-center border-bottom border-red-100 rounded-md '>HD</p>
           </div>
          </div>
          <div>
          <div className="flex flex-col ">
          <p className='flex w-4.7 text-[#969696fc] rounded-md shadow text-xl hover:text-white  my-3'>{movie?.overview}</p>
          </div>
          <div >
            <span className='text-lg  flex flex-col'>Genrse : </span>
            {
              
             genres.map((genre) => genre.name).join(" , ")
            }
          </div>
          <div>
<span>Totol Vote :
  {movie?.vote_count}
</span>
          </div>
          <div className='flex flex-col' >
            <span className='space-x-4'>language</span>
            {movie?.original_language}
          </div>
          </div>
        </div>
        </>
        </Modal>
    </div>
  )
}

export default ModelBox
