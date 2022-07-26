import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddAuthor from './views/AddAuthor';
import ViewAll from './views/ViewAll';


function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Routes>
        <Route path='/' element={<ViewAll />} />
        <Route path='/authors/addauthor' element={<AddAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
