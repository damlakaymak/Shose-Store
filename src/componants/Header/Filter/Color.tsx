import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectedProps } from "./Size";
import { colors } from "../../../utils/constansts";

const Color = ({selected,setSelected}:SelectedProps) => {
  const [params, SetParams]   =useSearchParams();
  
 
  const toggle = (num: string) => {
    const found = selected.find((i) => i === num);
    if (found) {
      setSelected(selected.filter((i) => i !== num));
    } else {
      setSelected([...selected, num]);
    }
  };


  useEffect(()=>{
    if(selected.length > 0){
    
      params.set("color" , selected.join(","));
      SetParams(params)
    }else{
    
      params.delete("color");
      SetParams(params);
    }
     
      }, [selected])
  console.log(selected);
  return (
    <div>
      <h2 className="font-semibold mb-[16px]">Color</h2>
      <div className="grid grid-cols-5 gap-[16px]">
        {colors.map((i) => {
          const found = selected.find((itm) => itm === i.id);
          return (
            <p
              style={{ background: i.code }}
              key={i.id}
              onClick={() => toggle(i.id)}
              className={`py-[8px] px-[16px]
      rounded-md text-center cursor-pointer hover:bg-zinc-400 transition bg-[${
        i.code
      }] text-transparent select-none
        ${found ? "ring-[4px]" : ""}  `}
            >
              .
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Color;
