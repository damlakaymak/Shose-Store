
import { Shose } from '../../types'
import calcDiscount from '../../utils/calcDiscount'

const Head = ({data}:{data:Shose}) => {
  const price =  calcDiscount(data.price, data.discount)
  return (
    <div className='flex flex-col gap-4'>
    <span className={`px-4 py-3 ${data.discount ? "bg-orange-400" : "bg-blue"} text-white rounded-[12px] w-fit`}>
      {data.discount ?  `%${data.discount} Discount` :"New Release"  }
    </span>
 <h1 className='text-3xl font-semibold'>{data.name}</h1>
 <p className='text-[24px]'>

  <span className='font-semibold text-blue pe-3 '>${price}</span>
  <span className='line-through'>(${data.price})</span>
 </p>
    
    
    </div>
  )
} 

export default Head
