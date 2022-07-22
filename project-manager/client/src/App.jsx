import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import ViewAll from './components/ViewAll';
import ViewOne from './components/ViewOne';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/" element={<ViewAll/>}/>
        <Route path="/product/viewone/:_id" element={<ViewOne/>}/>
        <Route path="/product/update/:_id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
