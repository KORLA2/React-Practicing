import React, { useContext } from 'react'
import {RESTAURANT_IMG} from '../../utils/constants'
import { useSelector } from "react-redux";

const RestaurantCard = ({Restaurant}) => {

let {cloudinaryImageId,avgRating,cuisines,areaName,name,sla,costForTwo}=Restaurant;

  // let {LoggedUser}=useContext(userContext);
      let LoggedUser=useSelector(store=>store.cart.Name)
  return (
    <div className="bg-gray-300 m-3 w-[280px] p-3 rounded-2xl">
<div>
    <img  className='h-50 w-70 rounded-2xl' src={RESTAURANT_IMG+cloudinaryImageId} />
</div>

<p className="text-lg font-bold py-4">{name}</p>
<h3 className='text-slate-900'>{costForTwo}</h3>
 <h4 className="m-1">{cuisines.join(" ")}</h4>   
 <h1>Area: {areaName}</h1>  
 <h5>Rating : {avgRating}</h5>
 <h5> Delivery : {sla.slaString}</h5> 
 <h3>{LoggedUser}</h3>
    </div>
  )
}

export const withPromotedRestaurandCard = (RestaurantCard)=>{

    return ({Restaurant})=>{
 return <div>
    <p className="absolute bg-gray-800 text-white -mx-1 my-2  p-2 rounded-lg">Promoted</p>
    <RestaurantCard Restaurant={Restaurant}/>
    </div>
    }
}


export default RestaurantCard