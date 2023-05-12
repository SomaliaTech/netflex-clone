import React from 'react'

function Footerlink({link}) {
    console.log(link)
  return (
    <div className='mt-2 mb-4 flex flex-col'>
{
    link.map((l)=>(
        <a  className='space-y-2 text-sm' href="#">{l}</a>
    ))
}
    </div>
  )
}

export default Footerlink