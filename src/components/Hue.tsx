import { FaHeart } from "react-icons/fa";
import HueObject from "../HueObject";


interface Props {
 hue: HueObject;
 toggleLike?: (id?:number)=> void
}


const Hue = ({hue, toggleLike}: Props) => {
 const getTextColor = (hexCode: string) => {
   const r_num = parseInt(hexCode.slice(1, 3), 16);
   const g_num = parseInt(hexCode.slice(3, 5), 16);
   const b_num = parseInt(hexCode.slice(5, 7), 16);


   const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;


   return hue_intensity > 186 ? "#000000" : "#FFFFFF";
 };


 const textColor = getTextColor(hue.color);




 return (
   <div
     className="flex flex-col h-48 aspect-square rounded-3xl text-center justify-center items-center mx-1 my-2 relative"
     style={{ backgroundColor: hue.color, color: textColor }}
   >


     <div className="flex flex-col justify-start items-start flex-grow">
       <p className="text-2xl opacity-80">{hue.color}</p>
     </div>


     <button
       onClick={() => toggleLike && toggleLike(hue.id)}
       className="mb-10"
     >
      
       <FaHeart
       className={hue.isLiked ? "text-red-600 text-5xl": "text-5xl"}
       />


     </button>


     {/* <div className="bg-black text-white flex flex-wrap w-14 h-full justify-end ml-28 rounded-t-xl">
         <p className="text-xl">{hue.likes} Likes</p>
       </div> */}


     <div className="bg-black text-white flex  w-full justify-evenly p-3 rounded-b-2xl">
       <p className="text-xl">{hue.username}</p>
      
     </div>
   </div>
 );
};


export default Hue;
