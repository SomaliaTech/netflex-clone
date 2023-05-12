
import Banner from '../componet/Browse/Banner';
import Header from './../componet/Browse/Header';
import Screen from './../componet/Browse/Screen';
import requests from '../requst'
import ModelBox from './../ModelBox';

const ScreenLogin = () => {
  return (
    <div className=' relitive bg-gradient-to-b h-screen lg:h-[140vh]'>
        <Header />

        
        <main className='pl-14 space-y-20 lg:pl-1 '>
<Banner/>
          

        <Screen title={"fetchTrading"} url={requests.fetchTrending}/> 
         <Screen title={"featchTopRated"} url={requests.fetchTopRated}/>
        <Screen title={"fetchActionMovies"} url={requests.fetchActionMovies}/> 
        <Screen title={"feathComodyMovies"} url={requests.fetchComedyMovies}/>
        <Screen title={"featchRomanceMovies"} url={requests.fetchHorrorMovies}/>
        <Screen title={"featchDomentrice"} url={requests.fetchRomanceMovies}/>   
        <Screen title={"featchDomentrice"} url={requests.fetchDocumantaries}/>   
       <ModelBox/>
        
        </main>
            
        
    </div>
  )
}

export default ScreenLogin