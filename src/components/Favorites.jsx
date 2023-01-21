import { connect, Connect } from "react-redux";
import Card from "./Card";

const Favorites = ({myFavorites}) => {
    return(
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
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
     }
}

export default connect(mapStateToProps, null) (Favorites);