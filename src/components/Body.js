import React from 'react'
import Restaurants from './Restaurants'
export const Body = () => {
  return (
    <div>
      <div className='flex justify-around'>
        <div>
         <input type='text' className="border-2 border-black-100 m-2 p-1" placeholder='Search..' />
         <button type="button" className='bg-blue-300 px-3 py-2 rounded-lg hover:pointer'>Search</button>
        </div>
        <div className='bg-blue-300 px-3 py-2 rounded-lg hover:pointer m-2' >
          <button>Top Rated Restaurants</button>
        </div>
        </div>  

   <Restaurants/>
    </div>
  )
}
