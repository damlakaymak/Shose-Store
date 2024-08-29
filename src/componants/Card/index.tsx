import React from "react";
import { Shose } from "../../types";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import calcDiscount from "../../utils/calcDiscount";
type Props = {
  item: Shose;
};
const Card = ({item} : Props) => {
  const price =  calcDiscount(item.price, item.discount)
  return (
  <div className="flex flex-col justify-between">
    <div>
  <div className="lg:rounded-[28px] p-[8px] rounded-[16px]">

 <div className="lg:rounded-[24px] bg-red-400 rounded-[12px] relative">
  

<Badge discount={item.discount}/>

<img className="" src="/shoes.svg"/>
 </div>


  </div>

<h2 className="line-clamp-2 mt-5 mb-4 font-bold lg:text-[20px]">{item.name}</h2>
</div>
<Link to={`/detail/${item.id}`}
 className="font-medium bg-dark text-white px-4 py-2 rounded-[8px] transition hover:bg-black">
  view Product - <span className={item.discount ? "text-orange-500" : "text-white"}>${price}</span></Link>
</div>
)
};

export default Card;
