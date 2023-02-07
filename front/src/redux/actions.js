
import axios from "axios";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS"

export const addFavorite = (card) =>{ 
    /*
    return{
        type: ADD_FAVORITE, payload: card
    }*/
    return async (dispatch)=> {
        const response = await axios.post('http://localhost:3001/rickandmorty/fav', card);
        const data = response.data;
        console.log('esto es lo que se le adiona al servidor '+ card.name)
        return dispatch({
            type: ADD_FAVORITE, payload: card
        })

    }

}

export const deleteFavorite = (id) => { 
    /*
    return{
        type: DELETE_FAVORITE, payload: id
    }*/
    return async (dispatch) =>{
        const response1 = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        const data1 = response1.data;

        return dispatch({
            type: DELETE_FAVORITE, payload: id
        })

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