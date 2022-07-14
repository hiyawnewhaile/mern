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
  const lifeHandler = (index) => {
    allCharacters[index].IsAlive = !allCharacters[index].IsAlive;
    setAllCharacters([...allCharacters]);
    console.log("Character Clicked", index)
  }
  return (
    <div className="App">
      <Form newChar={addChar}/>
      <Results allChars = {allCharacters} toggleLife = {lifeHandler}/>
    </div>
  );
}

export default App;
