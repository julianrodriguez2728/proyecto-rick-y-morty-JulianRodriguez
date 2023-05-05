import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

import axios from "axios";
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = 'a45813b04fae.b0ec9381cd609b70a80f';

const URL = 'http://localhost:3001/rickandmorty/login';

function App() {
   
   const {pathname} = useLocation();
   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   const [characters , setCharacters] = useState([]);


   const login = async (userData) => {
      try {
         const { username, password } = userData;
         
         const {data} = await axios(URL + `?username=${username}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');  

      } catch (error) {
         console.log(error.message)
      }
   }
   
   useEffect(()=>{
      !access && navigate("/")
   },[access])

   const onSearch =  async (id) => {
      try {
         const {data}= await  axios(`http://localhost:3001/rickandmorty/character/${id}`)

         if (data.name){
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         
         window.alert('¡No hay personajes con este ID!');
      }
   }
   const onClose = (id)=>{
      const characterFilter = characters.filter((character)=>{
         return(character.id !== id)
      })
      setCharacters(characterFilter)
   }

   return (
      <div className='App'>
         {pathname !== "/" && <Nav onSearch = {onSearch} />}
         <Routes>
            <Route path='/' element={<Form login = {login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element= {<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;
