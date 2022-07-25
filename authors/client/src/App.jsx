import { Routes, Route } from 'react-router-dom';
import './App.css';
import ViewAll from './views/ViewAll';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ViewAll/>}/>
      </Routes>
    </div>
  );
}

export default App;
