import React, { useContext } from 'react'
import Restaurants from './Restaurants'
import userContext from "../../utils/userContext.js"
import cartSlice from '../../utils/cartSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import {changeName} from "../../utils/cartSlice.js"
export const Body = () => {

 
let Name=useSelector(store=>store.cart.Name);

console.log(Name)
 let dispatch= useDispatch()

let handleChangeName=(e)=>{

  dispatch(changeName(e.target.value))
}
   console.log(cartSlice)
  return (
    <div>
      <div className='flex justify-around items-center'>
        <div>
         <input type='text' className="border-2 border-black-100 m-2 p-1" placeholder='Search..' />
         <button type="button" className='bg-blue-300 px-3 py-2 rounded-lg hover:pointer'>Search</button>
        </div>
        <div className='bg-blue-300 px-3 py-2 rounded-lg hover:pointer m-2' >
          <button>Top Rated Restaurants</button>
        </div>
        <div>
          <input value={Name} onChange={(e)=>{handleChangeName(e)}} className='p-1 border-2 border-black-10'/>
        </div>
        </div>  

   <Restaurants/>
    </div>
  )
}
