import { useReducer } from "react";
import { ADD_FAVORITE, ORDER_CARDS } from "./actions";
import { DELETE_FAVORITE } from "./actions";
import { FILTER_CARDS } from "./actions";



const initialState = {
    myFavorites: [],
    allCharacters: []
};

 const reducer = (state = initialState, action) => {
  
    switch (action.type) {
        case ADD_FAVORITE: console.log("llego al reducer add")
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
            
        case DELETE_FAVORITE:
            let filterMyFavorites = state.myFavorites.filter((card) => card.id !== action.payload);
            let filterAllCharacters = state.allCharacters.filter((card) => card.id !== action.payload);
            return {
                ...state,
                myFavorites: filterMyFavorites,
                allCharacters: filterAllCharacters
            }
        
        case FILTER_CARDS:
            let filterAllCharactersForGender = state.allCharacters.filter((cards) => cards.gender === action.payload );
            return{
                ...state,
                myFavorites: filterAllCharactersForGender
            }

        case ORDER_CARDS:
            let copiaAllCharacters = [...state.allCharacters];
            if(action.payload==="Ascendiente") copiaAllCharacters.sort((a, b)=> a.id-b.id)
            if(action.payload==="Descendiente") copiaAllCharacters.sort((a, b)=> b.id-a.id)
            return{
                ...state,
                myFavorites: copiaAllCharacters
            }

        default:{
            return { ...state };
        }
    }
}
export default reducer;