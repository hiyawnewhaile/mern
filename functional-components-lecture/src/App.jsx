import logo from './logo.svg';
import './App.css';
import First from './components/Fist';
import { useState } from 'react';

const darkMode = {
  backgroundColor: "dimgrey",
  color: "ghostwhite",
  padding: "10px"
}

const lightMode = {
  backgroundColor: "white",
  color: "black",
  padding: "10px"
}

function App() {
  const [light, setLight] = useState(true);
  const switchLight = () => setLight(!light);
  // const myFunction = () => 
  return (
    <div className="App" style={light? lightMode : darkMode}>
      <button onClick={switchLight}>{ light? "Switch to Dark Mode" : "Switch to Light Mode" }</button>
      <h1>Welcome to functional components!</h1>
      <First firstName="True" lastName = "Jah" number = {1}/>
      <First firstName="Yaw" lastName = "G" number = {5}/>
    </div>
  );
}

export default App;
