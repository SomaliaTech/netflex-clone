import FooterLInkData from '..//../content/footerLinks.json'
import Footerlink from './Footerlink'

const Footerlinks = () => {
  return (
    <div className='flex  flex-col mx-[20%] px-30 py-10  my-4'>

    <h1 className='my-4 text-sm text-[#9c9c9c]'>Questions? Contact us.</h1>
<div className='grid grid-cols-2 sm:grid-cols-4 space-x-4 text-[#9c9c9c]'>
{
    FooterLInkData.columns.map((link)=>(
        <Footerlink link={link}/>
    ))
}
</div>
    </div>
  )
}

export default Footerlinks