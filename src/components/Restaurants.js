import React ,{useEffect,useState} from 'react'
import RestaurantCard, { withPromotedRestaurandCard } from './RestaurantCard'
import  {Link}  from 'react-router-dom'
 export default function Restaurants(){
  let [restaurants,setRestaurants]=useState([])

    useEffect(()=>{

      fetchRestaurants()

    },[])

     let PromotedRestaurandCard=withPromotedRestaurandCard(RestaurantCard)
     
    let fetchRestaurants=async()=>{

      let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5195099&lng=78.3947827');
      let jsondata= await data.json()
console.log(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
setRestaurants(jsondata.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)


    }

  return (

    <div className="flex flex-wrap justify-center px-5 ">
{
     restaurants.map((Restaurant,idx)=>{


     return Restaurant.info.avgRating<4? <Link key={Restaurant.info.id} to={"Restaurant/"+Restaurant.info.id} ><RestaurantCard 
        Restaurant={Restaurant}
       
     /></Link>: <Link to={"Restaurant/"+Restaurant.info.id} key={Restaurant.info.id}><PromotedRestaurandCard
        Restaurant={Restaurant}
     /></Link>
    
    })
}
    </div>

  )
}

// export default Food