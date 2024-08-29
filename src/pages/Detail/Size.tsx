import React, { useState } from 'react'

const Size = ({data}: {data: string}) => {

const [selected, setSelected] = useState<string>("");
const arr = data.split(",");

  const numbers = ["38","39","40","41","42","43","44","45","46","47"];


  const toggle = (num:string)=>{

    if(selected === num){
       setSelected("");
    
    }else{
    
      setSelected(num)
    }
    
    
      };
  return (
    <div>
      <h2 className='mb-3 font-semibold'>Size  </h2>
     <div className='grid grid-cols-5 gap-[16px]'>
{numbers.map((num)=>{
   const found = selected === num;
  return(

   
  <button 
  disabled={!arr.includes(num)}
  key={num}
  onClick={()=> toggle(num)} className={`py-[8px] px-[16px] lg:px-0 bg-white
     text-dark rounded-md text-center cursor-pointer hover:bg-zinc-400  disabled:bg-[#D2D1D3] disabled:text-[#8F8C91] transition 
      ${
        found ? " bg-red-950 text-white" : "bg-white text-black" 
      }  `}>
    <span>{num}</span>
  </button>
  )})}
</div>
    </div>
  )
}

export default Size
