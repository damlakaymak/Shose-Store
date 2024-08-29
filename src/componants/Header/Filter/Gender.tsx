import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { SelectedProps } from './Size';

const Gender = ({selected,setSelected}:SelectedProps) => {
  const [params, SetParams] = useSearchParams();
 
  
  const toggle = (gender:string)=>{

    const found = selected.find((i)=> i === gender )
    if(found){
       setSelected(selected.filter((i) => i !== gender));
    
    }else{
    
      setSelected([...selected, gender])
    }
    
    
      };

      
  useEffect(()=>{
    if(selected.length > 0){
    
      params.set("gender" , selected.join(","));
      SetParams(params)
    }else{
    
      params.delete("gender");
      SetParams(params);
    }
     
      }, [selected])
    

  return (
    <div>

<h2 className="font-semibold mb-[16px]">Gender</h2>
<div className='flex gap-4 items-center'>
  <input
  checked={selected.includes("men")}
  onChange={() =>{toggle("men")}}
  id='man' type='checkbox'/>
  <label htmlFor='man' className='font-semibold select-none'>Erkek</label>
</div>

<div className='flex gap-4 items-center'>
  <input 
   checked={selected.includes("women")}
    onChange={() =>{toggle("women")}}
  id='women' type='checkbox'/>
  <label  htmlFor='women' className='font-semibold select-none'>Kadın</label>
</div>

    </div>
  )
}

export default Gender
