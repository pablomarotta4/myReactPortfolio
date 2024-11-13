import './App.css';
import MainNav from './components/NavBar'; 
import Banner from './components/Banner'; 
import About from './components/About'; 
import Projects from './components/Projects'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Cv from './components/Cv'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Technologies from './components/Technologies';
import Divider from './components/Divider';

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
      <Projects/>
      <Divider />
      <Technologies/>
      <Divider />
      <Cv/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
