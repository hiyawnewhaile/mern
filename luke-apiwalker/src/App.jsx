import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import People from './components/People';
import Planets from './components/Planets';
import Home from './components/Home';
import Starship from './components/Starship';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/people/:id" element={<People/>}/>
        <Route path="/planets/:id" element={<Planets/>}/>
        <Route path="/ships/:id" element={<Starship/>}/>
      </Routes>
    </div>
  );
}

export default App;
