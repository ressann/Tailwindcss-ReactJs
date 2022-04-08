import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home'
import About from './About/About'
import Food from './Food/Food'
import Contact from './Contact/Contact'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {/* navication bar page*/}
      <Navbar/>

      {/* router link of the page*/}
      <Routes location={location} key={location.key}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
