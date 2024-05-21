import logo from './logo.svg';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SocialLink from './components/SocialLink';
import './App.css';

function App() {
  return (
   <div>
     <NavBar/>
     <Home/>
     <About />
     <Portfolio/>
     
     <SocialLink/>
   </div>
  )
}

export default App;
