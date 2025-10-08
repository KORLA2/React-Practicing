import React from 'react'
import {MENU_CARD_IMG} from "../../../utils/constants"

const ItemList = ({itemCard}) => {

 let {name,price,defaultPrice,ratings,imageId}=itemCard.card.info;
return <div   className="flex justify-between items-center bg-gray-200 m-3 rounded-lg p-3">
                    <div > 
                    <p className='m-2'>{name}</p>
                      <p className='m-2'> Price:  { price?price/100:defaultPrice/100}</p>
                      <p className='m-2'>Rating:  {ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCountV2})</p>  
                    </div>
                    <div>
                    <img className="w-40 h-40 rounded-lg" src={MENU_CARD_IMG+imageId}/> 
                        <div className='absolute bg-black -my-8 p-1 mx-4 text-white shadow-lg rounded-lg'>
                            <button> Add + </button>
                        </div>
                        </div>
                    </div>   

}

export default ItemList