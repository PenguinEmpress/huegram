import { useState } from "react";




interface Props {
 searchHues: (color: string) => void;
}


const Title = ({searchHues}:Props) => {
 const [colors, setColors] = useState("");




 return (
   <div className="flex justify-between items-center py-8 shadow-xl px-6 bg-gradient-to-b from-blue-950 via-sky-700 to-cyan-50 shadow-r-3xl">
     <div className='w-86 font-thin italic'>
       <span className='text-white text-5xl '>H</span>
       <span className='text-white text-5xl'>U</span>
       <span className='text-white text-5xl'>E</span>
       <span className='text-pink-600 text-5xl flexbox'>❤</span>
       <span className='text-white text-5xl'>G</span>
       <span className='text-white text-5xl'>R</span>
       <span className='text-white text-5xl'>A</span>
       <span className='text-white text-5xl'>M</span>
       </div>
     <input
       type="text"
       placeholder="Search..."
       className="rounded-lg p-2 -mr-96 ml-96 w-1/4 text-slate-800"
       style={{ maxWidth: '300px' }}
       onChange={(e) => setColors(e.target.value)} />
       <a
       href="#"
       onClick={()=> searchHues(colors)}
       className="bg-white rounded-r-xl -ml-20 -mr-3 p-2 border-black border-2 text-slate-800">Search?</a>


   </div>
 )
}


export default Title;
