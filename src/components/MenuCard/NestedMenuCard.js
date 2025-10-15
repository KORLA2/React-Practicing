import React, { useContext, useState } from 'react'
import ItemList from './ItemList'
import userContext from "../../../utils/userContext"
const NestedMenuCard = ({card}) => {


let[showItems,setShowItems]=useState([])
 let {LoggedUser}=useContext(userContext)

return (
    <div className="w-6/12 m-auto my-6  bg-gray-100 p-4 shadow-lg">
      <p>Hi {LoggedUser} Enjoy the Menu </p>
        <p className='text-xl font-bold'>{card.title}</p>
        <div>
        {
            card.categories.map((category,idx)=>{
      const isActive =  showItems.includes(category.categoryId)
        return  <div className="p-4 border-gray-300 border-b-2 " key={category.categoryId}>
           
                <div className='cursor-pointer flex justify-between' onClick={()=>{
        if (showItems.includes(category.categoryId)) {
                  // If same category clicked → close it
                  setShowItems(showItems.filter((e)=>e!=category.categoryId) );
                } else {
                  // If different category clicked → open that one
                  setShowItems([...showItems, category.categoryId]);
                }
             
                }}>
                    <p className='text-lg font-medium'>{category.title} ({ category.itemCards.length })</p>
                    <div>
                    <button className='text-2xl cursor-pointer' > {isActive ? "˄" : "˅"} </button>
                    </div>
                </div>
                <div>
                { isActive && category.itemCards.map((itemCard,idx)=>(
                    <ItemList key={itemCard.card.info.id} itemCard={itemCard}/>
                    ))
                }
                </div>
           
            </div>
            
           

            })
        }
            
        
        </div>
      
    </div>
  )
}

export default NestedMenuCard