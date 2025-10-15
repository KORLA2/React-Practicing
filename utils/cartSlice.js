import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
  initialState:{
    Name:"Goutham",

    items:[{
      
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
"info": {
"id": "85994255",
"name": "Paneer Biryani",
"category": "Biryani",
"description": "A delightful mix of paneer & biryani rice in Hyderabadi Spices and served with Raita",
"imageId": "vfl6glh6qxzq4wahlff8",
"inStock": 1,
"isVeg": 1,
"price": 21900,
"variants": {},
"variantsV2": {},
"itemAttribute": {
"vegClassifier": "VEG"
},
"ribbon": {
"text": "Bestseller",
"textColor": "#ffffff",
"topBackgroundColor": "#d53d4c",
"bottomBackgroundColor": "#b02331"
},
"showImage": true,
"itemBadge": {},
"badgesV2": {},
"isBestseller": true,
"ratings": {
"aggregatedRating": {
"rating": "4.1",
"ratingCount": "86 ratings",
"ratingCountV2": "86"
},
"ratingsPresentationConfig": {
"bgGradient": {
"colours": [
"#C8F9E5",
"#FFFFFF"
],
"gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
},
"ratingIconColor": "rating_very_good",
"ratingTextColor": "rating_very_good",
"ratingCountTextColor": "rating_very_good",
"ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
"ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
}
},
"parentId": "45650013"
},
"analytics": {},
"hideRestaurantDetails": true
}
    },{
    "card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
"info": {
"id": "85994257",
"name": "Veg Biryani",
"category": "Biryani",
"description": "Rice cooked with Indian spices and mixed vegetables, served with raita.",
"imageId": "rtnubm77wt9f5e4ifobq",
"inStock": 1,
"isVeg": 1,
"price": 19900,
"variants": {},
"variantsV2": {},
"itemAttribute": {
"vegClassifier": "VEG"
},
"ribbon": {},
"showImage": true,
"itemBadge": {},
"badgesV2": {},
"ratings": {
"aggregatedRating": {
"rating": "3.7",
"ratingCount": "10 ratings",
"ratingCountV2": "10"
},
"ratingsPresentationConfig": {
"bgGradient": {
"colours": [
"#D9EFEC",
"#FFFFFF"
],
"gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
},
"ratingIconColor": "rating_medium",
"ratingTextColor": "rating_medium",
"ratingCountTextColor": "rating_medium",
"ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
"ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
}
},
"parentId": "70805719"
},
"analytics": {},
"hideRestaurantDetails": true
    }
    },{
"card": {
"@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
"info": {
"id": "85994269",
"name": "Gongura Chicken Biryani",
"category": "Biryani",
"imageId": "ykwsqinciuraqgdtzkxm",
"inStock": 1,
"price": 26900,
"variants": {},
"variantsV2": {},
"itemAttribute": {
"vegClassifier": "NONVEG"
},
"ribbon": {},
"showImage": true,
"itemBadge": {},
"badgesV2": {},
"ratings": {
"aggregatedRating": {
"rating": "4.0",
"ratingCount": "6 ratings",
"ratingCountV2": "6"
},
"ratingsPresentationConfig": {
"bgGradient": {
"colours": [
"#C8F9E5",
"#FFFFFF"
],
"gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
},
"ratingIconColor": "rating_very_good",
"ratingTextColor": "rating_very_good",
"ratingCountTextColor": "rating_very_good",
"ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
"ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
}
},
"parentId": "77047191"
},
"analytics": {},
"hideRestaurantDetails": true
}
    }]
  },
  reducers:{
    addItem:(state,action)=>{
        state.items.push(action.payload);
  }, removeItem:(state)=>{
        state.items.pop();
  },changeName:(state,action)=>{
state.Name=action.payload
  }
  }

});
console.log(cartSlice);
export let {addItem,removeItem,changeName}=cartSlice.actions
export default cartSlice.reducer;
