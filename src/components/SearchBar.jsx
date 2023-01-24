import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [character , setCharacter] = useState('');
   const [item, setItem] = useState([]);
   let repetido = true;

   const handleChange = function (event) {
      
      setCharacter(event.target.value);
   }

   const handleChangeInterno = function(character) {
      console.log(character);
      let temporal = character;
      setItem([...item, temporal]);
      temporal = character;
      console.log(item);
      console.log(character);
      repetido = !item.includes(character)
   }

   return (
      <div>
            
          <input type='number' onChange={handleChange} value={character} />
      <button onClick={()=> repetido && onSearch(character)  || handleChangeInterno(character) }>Agregar</button>
      </div>
   );
}
