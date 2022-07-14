import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1><Link>About</Link></h1>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/about' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
