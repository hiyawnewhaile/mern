import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const addChar = person => {
    setAllCharacters([...allCharacters, person]);
  }
  return (
    <div className="App">
      <Form newChar={addChar}/>
      <Results allChars = {allCharacters}/>
    </div>
  );
}

export default App;
