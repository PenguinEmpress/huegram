import Hue from './Hue'
import PostHue from './PostHue'
import Title from '../Title'
import HueObject from '../HueObject'


interface Props {
   hues: HueObject[],
   addHue: (color:string) => void
   toggleLike: (id?:number)=> void
   searchHues: (color:string) => void
}


const Main = ({hues, addHue, searchHues, toggleLike} : Props) => {
 return (
   <div className='flex flex-col flex-grow bg-gradient-to-b from-pink-400 via-violet-300 to-sky-100 '>
     <Title searchHues={searchHues}></Title>
     <div className='flex flex-wrap justify-center'>
     <PostHue addHue={addHue}/>
     </div>
     <div className="flex flex-wrap w-full justify-left gap-7 overflow-y-auto m-5">
         <div className='grid grid-cols-5 gap-5 overflow-y-auto'>


       {hues.map( (hue) => (
         <Hue hue={hue} toggleLike={toggleLike}/>


       ))}


         </div>


       </div>


     </div>
 )
}


export default Main;
