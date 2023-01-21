

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const addFavorite = (card) =>{ console.log("funciono addFavorite")
    return{
        type: ADD_FAVORITE, payload: card
    }
}

export const deleteFavorite = (id) => { console.log("funciono deleteFavorite")
    return{
        type: DELETE_FAVORITE, payload: id
    }
}