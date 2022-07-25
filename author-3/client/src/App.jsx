import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ViewAll/>} />
      </Routes>
    </div>
  );
}

export default App;
