import React from 'react'

const MenuCard = ({card}) => {
console.log(card)
let isActive= true;
  return (
    <div className="w-6/12 m-auto my-6  bg-gray-100 p-4 shadow-lg">

    <div className="p-4 border-gray-300 border-b-2 " >
  
  <div className="cursor-pointer flex justify-between">
    <p className='text-xl font-medium'>{card.title} ( {card.itemCards?.length} )</p>
    <div>
       <button className='text-2xl cursor-pointer' > {isActive ? "˄" : "˅"} </button>
    </div>


  </div>

    </div>
    </div>
  )
}

export default MenuCard