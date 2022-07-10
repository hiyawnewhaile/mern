import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Profile firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <Profile firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
    </div>
  );
}

export default App;
