import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ItemList from './MenuCard/ItemList';
import { removeItem } from '../../utils/cartSlice';
const Cart = () => {

    let cartItems=useSelector(store=>store.cart.items);
let dispatch = useDispatch() 
let handleClearCart=()=>{
dispatch(removeItem())
}

let Name=useSelector(store=>store.cart.Name)

  return (
    <div className="w-6/12 m-auto my-6  bg-gray-500 p-4 shadow-lg">
        <div className='flex justify-between items-center font-bold text-xl'>

     <p className="font-bold text-xl"> Hello {Name} your Cart is waiting ....</p>
        <div className='p-2 bg-green-700 text-black rounded-lg '>
            <button className='cursor-pointer' onClick={handleClearCart}>Clear Cart</button>
        </div>
        </div>
    <div className="p-4 border-gray-300 border-b-2 " >

     {cartItems.length==0&&<h1 className="font-bold text-zinc-600 text-xl" > {Name} your Cart is Empty....</h1>}   
     {
        cartItems?.map((itemCard)=><ItemList key={itemCard.card.info.id} itemCard={itemCard}/>)
     }
    </div>

    </div>
  )
}

export default Cart