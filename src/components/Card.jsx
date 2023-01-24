import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../redux/actions";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";


export function Card({name, gender, onClose, species, image, id, addFavorite, deleteFavorite, myFavorites}) {

   const [isFav, setIsFav]= useState(false);

   const handleFavorite =()=>{
      if(isFav===false){ 
         setIsFav(true);
         addFavorite({name: name , gender: gender , onClose: onClose , species: species , image: image , id: id, addFavorite: addFavorite, deleteFavorite: deleteFavorite, myFavorites: myFavorites });
      }

      if(isFav===true){ 
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
      
      <div> 
         <div className={styles.encabezado}>
          
            {
               isFav ? (
                  <button onClick={handleFavorite} className={styles.boton} >❤️</button>
               ) : (
                  <button onClick={handleFavorite} className={styles.boton} >🤍</button>
               )
            }

            <Link to={`/detail/${id}`}>
               <h5 className={styles.nombre}>{name}</h5>
            </Link>
            <button onClick={onClose} className={styles.boton}>X</button>
         </div>
         <div className={styles.imgsContainer} >
            <img  src={image} alt="" className={styles.imgs} />
         </div>
         <div className={styles.detalles} >
            <span >Gender: {gender}</span>
            <span height= "min-content">Species: {species}</span>
         </div>
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
