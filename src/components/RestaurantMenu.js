import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
    let {RestID}=useParams()
let [Menu,setMenu]=useState("")
    useEffect(()=>{
        fetchResMenu()
    },[])
    console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5195099&lng=78.3947827&restaurantId="+{RestID})

    async function fetchResMenu(){
 let data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5195099&lng=78.3947827&restaurantId="+RestID)
 let jsondata=await data.json();
 
console.log(jsondata)
setMenu(jsondata.data.cards[0].card.card.text)
    }

  return (
    <div>{Menu}</div>
  )
}

export default RestaurantMenu