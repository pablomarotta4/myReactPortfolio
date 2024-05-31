import './App.css';
import MainNav from './components/NavBar'; // Importa NavBar y asignalo a una variable
import Banner from './components/Banner'; // Importa Banner y asignalo a una variable
import About from './components/About'; // Importa About y asignalo a una variable
import Projects from './components/Projects'; // Importa Projects y asignalo a una variable
import Contact from './components/Contact'; // Importa Contact y asignalo a una variable
import Footer from './components/Footer'; // Importa Footer y asignalo a una variable
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => console.log(data.message));
  }
  , []);

  return (
    <div className='App'>
      <MainNav/>
      <Banner/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
