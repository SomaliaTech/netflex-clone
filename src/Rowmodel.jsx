import React from 'react'
import { Modal } from '@mui/material';
import { useRecoilState } from 'recoil';
import { rowmovies } from './atoms/ModalState';

const Rowmodel = () => {
const [movies,setmoves]=useRecoilState(rowmovies)
const handelclick = ()=>{
    handelclick(false)
}
  return (
    <div>
        
      
 <Modal 
 open={movies}
 onClose={handelclick}
 >
    
    </Modal>;


    </div>
  )
}

export default Rowmodel