import { useState } from "react";


interface Props {
 addHue: (hex_code: string) => void;
}


const PostHue = (props: Props) => {
 // Initialize the hex_code with '#' to ensure it's always present
 const [hex_code, setColor] = useState('#');


 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   // Ensure that '#' is always at the start of the string
   setColor('#' + event.target.value.replace(/#/g, ''));
 }


 return (
   <div className='flex p-4 flex-row-reverse '>


   <div className='flex flex-col justify-evenly items-center p-4 rounded-xl border-black border-2 '
        style={{ backgroundColor: hex_code, width: '200px', height: '170px' }}>
   </div>


   <div className='flex flex-col justify-evenly items-center p-4 rounded' style={{ width: '400px', height: '150px' }}>
     <input
         type="text"
         name="hue"
         id="hue"
         placeholder="Enter a color code..."
         value={hex_code} // Use the hex_code state as the input value
         onChange={handleChange}
         className="w-3/4 text-lg p-2 rounded border border-gray-300 focus:ring focus:ring-opacity-50 focus:ring-slate-300"
         style={{ transition: 'border 0.3s ease-in-out' }}
       />


       <button
         onClick={() => props.addHue(hex_code)}
         className="w-3/4 bg-white text-cyan-950 font-semibold py-2 px-4 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-slate-400"
         style={{ transition: 'background-color 0.2s' }}>Post</button>
   </div>


  
 </div>
 )
}


export default PostHue;
