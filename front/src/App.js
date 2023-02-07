import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import Detail from './components/Detail'
import About from './components/About'
import Favorites from './components/Favorites'
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

   const [item, setItem] = useState([]);
   

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

   

   if(item.includes(character)){
      window.alert('El personaje ya esta incluido');
   } else{
      setItem([...item, character])
   fetch(`http://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
             window.alert('No hay personajes con ese ID');
             }
     });
   }
  }

  const onClose = (id) => {
    console.log("se ejecuta la aplicacion primero")
    setCharacters(
      characters.filter((character)=> character.id !== id)
   )
   setItem(item.filter((item)=>Number(item)!==id))
    console.log("se ejecuta la aplicacion")
  }


  return (
    <div>
      {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch} />  }
    
    <Routes>      
       
       <Route path="/home" element= {<Cards
          onClose={onClose}
          characters={characters}
        />} />  
         <Route path="/favorites" element={<Favorites /> } />
        <Route path="/detail/:detailId" element={<Detail />}  />
        <Route path="/about" element={<About />}  />
    </Routes>
    </div>
  )
}

export default App
