

export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS"

export const addFavorite = (card) =>{ 
    return{
        type: ADD_FAVORITE, payload: card
    }
}

export const deleteFavorite = (id) => { 
    return{
        type: DELETE_FAVORITE, payload: id
    }
}

export const filterCards = (gender) => {
    return{
        type: FILTER_CARDS, payload: gender
    }

}

export const orderCards = (order) => {
    return{
        type: ORDER_CARDS, payload: order
    }
}