import faqDate from '../../content/faq.json'
import Faq from './Faq';


const Faqes = () => {
  return (
    <div>
<h1 className='text-5xl text-center'>Frequently Asked Qustions</h1>
{
    faqDate.map((faq)=>(
        <Faq key={faq.id} {...faq}/>
    ))
}
    </div>
  )
}

export default Faqes