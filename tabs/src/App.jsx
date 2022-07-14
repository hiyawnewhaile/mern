import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs.jsx';

function App() {
  const [display, setDisplay] = useState("");
  const handleClick = (tab) => {
    setDisplay(tab);
  }
  return (
    <div className="App" >
      <div style={{display: "flex", justifyContent: "center"}}>
        <Tabs lable = "Tab 1" content = {[1,2,3]} click = {handleClick}/>
        <Tabs lable = "Tab 2" content = {[4,5,6,7]} click = {handleClick}/>
        <Tabs lable = "Tab 3" content = {[8,9,10,11,12]} click = {handleClick}/>
      </div>
      <div>
        {display}
      </div>
    </div>
  );
}

export default App;
