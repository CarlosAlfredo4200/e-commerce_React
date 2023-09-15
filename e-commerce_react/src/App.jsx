import { useState, useEffect} from 'react'
import './App.css'
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';


function App() {
 const [categories, setCategories] = useState([]);

 const obtenerDatosUrl = async () => {
    const url = await fetch("http://localhost:3001/categories");
    const data = await url.json();
    setCategories(data);
 }

 useEffect(() => {
    obtenerDatosUrl();
 }, [])
 

  return (
    <>

    <Header />
    <Main />
     {
      categories.map((cat) => (
        <p key={cat.id}>{cat.title}</p>
      ))
     }

     <Footer />
    </>
  )
}

export default App
