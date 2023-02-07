import { connect, Connect } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { orderCards } from "../redux/actions";
import { filterCards } from "../redux/actions";

const Favorites = ({myFavorites}) => {

    const dispatchFavorites = useDispatch();

    const handleChangeFavorites = (event) => {

        if(event.target.name==="order") dispatchFavorites(orderCards(event.target.value));
        if(event.target.name==="gender") dispatchFavorites(filterCards(event.target.value));
    }

    return(
        <div>
        <div>
            <select name="order" onChange={handleChangeFavorites} >
                <option value="Ascendiente">Ascendiente</option>
                <option value="Descendiente">Descendiente</option>
            </select>
            <select name="gender" onChange={handleChangeFavorites} >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        {console.log(myFavorites)}
        <div>
            {myFavorites.map((card)=>{
                return(
         
                    <Card 
                       key={card.id}
                       name={card.name}
                       species={card.species}
                       gender={card.gender}
                       image={card.image}
                       id={card.id}        
                    />
                    
                 )
            })}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
     }
}

export default connect(mapStateToProps, null) (Favorites);