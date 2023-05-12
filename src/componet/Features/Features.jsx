import featuresDate from '../../content/features.json'
import Featur from './Featur'

const Features =()=>{
    
    return(
        <div>

            {
featuresDate.map((f)=>(
    <Featur key={f.id} {...f}/>
))
            }
        </div>
    )
}

export default Features