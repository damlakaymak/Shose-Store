import React from 'react'

type Props = {
  open: () => void;                
};

const Buttons = ({open}:Props) => {
  return (
                  <div className="flex mt-5 gap-10 lg:hidden">
                  <button
                  onClick={open}
                  className="bg-white rounded-md p-1 px-4 flex-1 flex  gap-4 items-center justify-between">Filters
                
                  <img src="/filtter.svg"/>
                  </button>
                
                
                  <button className="flex-1 flex gap-4 items-center  justify-between bg-white rounded-md p-1 px-4">Trending
                
                <img src="/filtter.svg"/>
                </button>
                
                
                </div>
  )
}

export default Buttons
