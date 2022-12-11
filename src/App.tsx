import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './lib/Pages/Home/Home';
import { NavBar } from './lib/Components/Navbar/NavBar';
import { Footer } from './lib/Components/Footer/Footer';
import { Contact } from './lib/Pages/Contact/Contact';
import { Experience } from './lib/Pages/Experience/Experience';
import { University } from './lib/Pages/University/University';
import { College } from './lib/Pages/College/College';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className='wrapper'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/experience' element={<Experience/>}/>
              <Route path='/university' element={<University/>}/>
              <Route path='/college' element={<College/>}/>
            </Routes>
          </div>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
