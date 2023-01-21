import { useReducer } from "react";
import { ADD_FAVORITE } from "./actions";
import { DELETE_FAVORITE } from "./actions";




const initialState = {
    myFavorites: [],
};

 const reducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_FAVORITE: console.log("llego al reducer add")
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
            
        case DELETE_FAVORITE:
            let filterMyFavorites = state.myFavorites.filter((card) => card.id !== action.payload)
            return {
                ...state,
                myFavorites: filterMyFavorites
            }
        
        default:{
            return { ...state };
        }
    }
}
export default reducer;