import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [allBoxes, setAllBoxes] = useState([]);
  const addBox = color => {
    setAllBoxes([...allBoxes, color]);
  }
  return (
    <div className="App">
      <Form newBox = {addBox}/>
      <Results allBs = {allBoxes}/>
    </div>
  );
}

export default App;
