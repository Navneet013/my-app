//import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Mid from './components/Mid';
import Play from './components/Play';
import Topbar from './components/Topbar';
import LoginPopup from './components/signup/signup';
function App() {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <div className='app'>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <Topbar setShowLogin={setShowLogin}/>
    <Mid/>
    <Play/>
    <Explore/>
    <Footer/>
    </div>
  );
}
export default App;
