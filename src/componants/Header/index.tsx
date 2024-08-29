import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header className="max-w-[1320px] p-[32px] flex justify-between bg-fa_white rounded-[12px] md:rounded-[24px] items-center">
   <div className="text-dark flex gap-[40px] font-semibold max-md:hidden items-center">

    <Link to={"/"}>New Drops 🔥</Link>
    
    <Link to={"/"}>Man</Link>
    
    <Link to={"/"}>Women</Link>
  
   </div>

   <button className="md:hidden">
   
      <img className="w-7" src="/bar.svg"/>
    </button>
    <Link to={"/"}>
  
    <img className="h-[90px] rounded-full" src="https://static.vecteezy.com/system/resources/previews/008/956/590/original/creative-abstract-black-silhouette-running-shoe-design-logo-design-template-free-vector.jpg"/>
    
    </Link>

   
   <div className="flex md:gap-[40px]  gap[9px] items-center">

    <button className="max-md:hidden">
    <img src="/Search.svg"/>
    </button>
    <button>

      <img src="/User.svg"/>
    </button>
<button className=" bg-yellow font-semibold w-[25px] h-[25px] rounded-full grid place-items-center "><span>0</span></button>


   </div>

   
    </header>
  )
}

export default Header
