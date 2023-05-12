import Faqes from "../componet/Faq/Faqes"
import Features from "../componet/Features/Features"
import Footerlinks from "../componet/footerlink/Footerlinks";
import HeroSection from "../componet/HeroSection"
import Ready from './../componet/Ready';

const Home = () => {
  return (
    <div className="relative">
        
        <HeroSection />
<Features />

<Faqes />
<Ready />
<hr className="text-white"/>
<Footerlinks />
        {/* 
        Features 
        ...Farquents Qustion 
        ..Footer
        */}
    </div>
  )
}

export default Home