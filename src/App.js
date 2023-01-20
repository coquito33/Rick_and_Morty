import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import Detail from './components/Detail'
import About from './components/About'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Form from './components/Form'
import { useNavigate } from 'react-router-dom'




function App () {
  
  const [characters, setCharacters] = useState([]);
   const location = useLocation();
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const username = 'amado@gmail.com';
   const password = '1234567';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
   }
  
 function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
  }

  const onClose = (id) => {
    console.log("se ejecuta la aplicacion primero")
    setCharacters(
      characters.filter((character)=> character.id !== id)
      
    )
    console.log("se ejecuta la aplicacion")
  }


  return (
    <div>
      {location.pathname === "/" ? <Form /> : <Nav onSearch={onSearch} />  }
    
    <Routes>      
       
       <Route path="/home" element= {<Cards
          onClose={onClose}
          characters={characters}
        />} />  
         
        <Route path="/detail/:detailId" element={<Detail />}  />
        <Route path="/about" element={<About />}  />
    </Routes>
    </div>
  )
}

export default App
