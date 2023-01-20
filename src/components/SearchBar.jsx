import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [character , setCharacter] = useState('');

   const handleChange = function (event) {
      
      setCharacter(event.target.value);
   }

   return (
      <div>
            
          <input type='search' onChange={handleChange} value={character} />
      <button onClick={()=>onSearch(character)}>Agregar</button>
      </div>
   );
}
