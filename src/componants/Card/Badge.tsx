import React from 'react'

const Badge = ({discount}:{discount?:number}) => {
  return (
    <div>
      <span 
  className={`absolute rounded-tl-[24px] rounded-br-[24px] px-4 py-3
  ${discount ? "bg-yellow" : "bg-red-500"} font-semibold text-white text-sm`}>
  {discount ? "%" + discount + " off" : "New"}
</span>
    </div>
  )
}

export default Badge
