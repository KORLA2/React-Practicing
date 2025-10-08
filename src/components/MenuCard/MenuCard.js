import React ,{useState}from 'react'
import ItemList from './ItemList';

const MenuCard = ({card,showItems,setShowIndex}) => {
console.log(card)

  return (
    <div className="w-6/12 m-auto my-6  bg-gray-100 p-4 shadow-lg">

    <div className="p-4 border-gray-300 border-b-2 " >
  
  <div className="cursor-pointer flex justify-between" onClick={()=>{
setShowIndex()
  }}>
    <p className='text-xl font-medium'>{card.title} ( {card.itemCards?.length} )</p>
    <div>
       <button className='text-2xl cursor-pointer' > {showItems ? "˄" : "˅"} </button>
    </div>

  </div>
{
    showItems&&card.itemCards?.map((itemCard,idx)=>(
         <ItemList key={idx} itemCard={itemCard} />
    ))
}
    </div>
    </div>
  )
}

export default MenuCard