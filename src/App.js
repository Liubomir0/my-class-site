import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import { Photos } from './pages/Photos';
import { About } from './pages/About';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  );
}

export default App;
