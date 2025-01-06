import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Create from './pages/Create/Create';
import Recipe from './pages/Recipe/Recipe';
import Search from './pages/Search/Search';
import Navbar from './components/Navbar';
import { useThem } from './hooks/useThem';
import ThemSelector from './components/ThemSelector';
import { use, useEffect } from 'react';
import DayNight from './components/dayNight';

function App() {
  const {color,mode} = useThem()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <header style={{background:color}}>
      <Navbar/>
      </header>
      <div className='option'>
      <ThemSelector/>
      <DayNight/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>} />
        <Route path='/recipe/:id' element={<Recipe/>}/>
        <Route path='/search' element={<Search/>} />
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
