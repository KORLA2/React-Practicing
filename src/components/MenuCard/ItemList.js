import React from 'react'
import {MENU_CARD_IMG} from "../../../utils/constants"

const ItemList = ({itemCard}) => {


return <div   className="flex justify-between items-center bg-gray-200 m-3 rounded-lg p-3">
                    <div > 
                    <p className='m-2'>{itemCard.card.info.name}</p>
                      <p className='m-2'> Price:  { String(itemCard.card.info?.price/100)}</p>
                      <p className='m-2'>Rating:  {itemCard.card.info.ratings.aggregatedRating.rating} ({itemCard.card.info.ratings.aggregatedRating.ratingCountV2})</p>  
                    </div>
                    <div>
                    <img className="w-40 h-40 rounded-lg" src={MENU_CARD_IMG+itemCard.card.info.imageId}/> 
                        <div className='absolute bg-black -my-8 p-1 mx-4 text-white shadow-lg rounded-lg'>
                            <button> Add + </button>
                        </div>
                        </div>
                    </div>   

}

export default ItemList