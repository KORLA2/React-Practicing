import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NestedMenuCard from './MenuCard/NestedMenuCard'
import MenuCard from './MenuCard/MenuCard'

const RestaurantMenu = () => {
    let {RestID}=useParams()
let [Menu,setMenu]=useState([])
let [showIndex,setShowIndex]=useState(null);

    useEffect(()=>{
      fetchResMenu()
    },[])
    async function fetchResMenu(){
 let data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5195099&lng=78.3947827&restaurantId="+RestID)
 let jsondata=await data.json();
 
            setMenu(jsondata.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.slice(1))
    }

  return (
    <div >
        <div>

        {
            Menu?.map((item,idx)=>{

            return item.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"?
            <NestedMenuCard key={idx}  card={item.card.card}/>:
            <MenuCard key={idx} card={item.card.card}  showItems={idx===showIndex?true:false} setShowIndex={()=>setShowIndex(idx)}/>
            })
        }
        </div>

    </div>
  )
}

export default RestaurantMenu