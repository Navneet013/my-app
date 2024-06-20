//import logo from './logo.svg';
import './App.css';
import Explore from './components/Explore';
import Footer from './components/Footer';
import Mid from './components/Mid';
import Play from './components/Play';
import Topbar from './components/Topbar';
function App() {
  return (
    <div className='app'>
    <Topbar/>
    <Mid/>
    <Play/>
    <Explore/>
    <Footer/>
    </div>
  );
}
export default App;
