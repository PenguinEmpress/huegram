import Main from './components/Main'
import Profile from './components/Profile'
import { useEffect, useState } from 'react'
import HueObject from './HueObject'




function App() {


 const [hues, setHues] = useState<HueObject[]>([]);
 const [currentUser] = useState({
   username: "@Kaitlyn_Thomps0n",
   likes: 53,
   hues: []
 });


 useEffect( ()=>
 {
   fetch('./hues.json')
   .then( (res) => res.json() )
   .then( (data) => setHues(data) )
 }, [])


  const addNewHue = (color:string ) =>
 {
     const newHue = {color, username: currentUser.username, id: hues.length+1, likes:0, isLiked: false};
     setHues( [newHue, ...hues ] );
 }
 const toggleLikeForHue = (id?:number) =>
 {
     const newHues = [...hues]
     const hue = newHues.find( h => h.id == id)
     if(hue){
       hue.isLiked = !hue.isLiked
       setHues( newHues )
     }
 }
 const searchHues = (colors:string) =>{
   const newHues = [...hues];
   const hue = newHues.filter( h => h.color == colors)
   setHues(hue)
 }




 return (
   <div className='flex bg-gradient-to-b from-pink-400 via-violet-300 to-sky-100 h-full'>


     <Main hues={hues} addHue = {addNewHue} toggleLike = {toggleLikeForHue} searchHues={searchHues}/>


     <Profile hues={hues} />
   </div>
 )
}


export default App
