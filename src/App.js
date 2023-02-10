
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import About from './components/About'
import Detail from './components/Detail'
import Favorites from './components/Favorites'
import { useState, useEffect } from 'react'
import styles from './App.module.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Form from './components/Form'


function App() {
  const [characters, setCharacters] = useState([]);
  const [acces, setAcces] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!acces && location.pathname !== "/") navigate("/");
  }, [location.pathname,acces, navigate]);


  const username = 'ejemplo@gmail.com';
  const password = 'Password123';

  function login(userData) {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/Home");

    } else
      window.alert("User and/or password is incorrect")
  }

  function logout() {
    setAcces(false);
    navigate("/");
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

  const onClose = (name) => {
    let result = characters.filter(elemento => elemento.name !== name)
    setCharacters(result)
  }

  return (

    <div className={styles.App}>

      {location.pathname !== '/' && <Nav logout={logout} onSearch={onSearch} />}

      <Routes>
        <Route path='/' element={<Form login={login} />} />
        <Route path='/Home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Detail/:detailId' element={<Detail />} />
        <Route path='/Favorites' element={<Favorites />} />


      </Routes>


    </div>

  )
}

export default App
