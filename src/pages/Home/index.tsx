import { useState } from "react"
import Filter from "../../componants/Header/Filter"
import Buttons from "./Buttons"
import Hero from "./Hero"
import List from "./List"


const Home = () => {

const [isFiltersOpen, setIsFilterOpen] = useState(false)

  return (
    <div>
<Hero/>

<Buttons open = {()=> setIsFilterOpen(true)}/>

<h1 className="text-[20px] md:text-[36px] font-semibold my-[32px]">Life Style Shose</h1>
<div className="grid grid-cols-4 gap-5">
  <Filter isOpen={isFiltersOpen} close={()=> setIsFilterOpen(false)} />
  <List/>
</div>
    </div>
  )
}

export default Home
