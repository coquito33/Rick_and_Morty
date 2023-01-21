import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useState, useEffect } from "react";


export function Card({name, gender, onClose, species, image, id, addFavorite, deleteFavorite, myFavorites}) {

   const [isFav, setIsFav]= useState(false);

   const handleFavorite =()=>{
      if(isFav===false){ console.log("escogi el favorito")
         setIsFav(true);
         addFavorite({name: name , gender: gender , onClose: onClose , species: species , image: image , id: id, addFavorite: addFavorite, deleteFavorite: deleteFavorite, myFavorites: myFavorites });
      }

      if(isFav===true){ console.log("borre el favorito")
         setIsFav(false);
         deleteFavorite(id);
      }
   }

   useEffect(() => { console.log("estoy en el useEffect")
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return ( 
      
      <div> {console.log( myFavorites)}
          <button onClick={onClose}>X</button>
         
          {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }

          <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="" />
      </div>
      
   );
}

const mapStateToProps =(state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorite: (card)=> dispatch(addFavorite(card)),
      deleteFavorite: (id)=>dispatch(deleteFavorite(id))
   }

}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
