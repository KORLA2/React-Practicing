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
      let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.455566492207826&lng=78.36812589393311&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
      let jsondata= await data.json()

 setRestaurants(jsondata.data.cards.slice(3))


    }

  return (

    <div className="flex flex-wrap justify-center px-5 ">
{
     restaurants?.map((Restaurant,idx)=>{
             
        let {info}=Restaurant.card.card

     return info.avgRating<4? <Link key={info.id} to={"Restaurant/"+info.id} ><RestaurantCard 
        Restaurant={info}
       
     /></Link>: <Link to={"Restaurant/"+info.id} key={info.id}><PromotedRestaurandCard
        Restaurant={info}
     /></Link>
    
    })
}
    </div>

  )
}

// export default Food