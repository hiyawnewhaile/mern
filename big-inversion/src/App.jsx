import logo from './logo.svg';
import './App.css';
import Inversion from './components/Inversion';

function App() {
  return (
    <div className="App">
      <Inversion firstName ="Jane" lastName = "Doe" age = {45} hairColor = "Black" />
      <Inversion firstName ="John" lastName = "Smith" age = {88} hairColor = "Brown" />
      <Inversion firstName ="Millard" lastName = "Fillmore" age = {50} hairColor = "Brown" />
      <Inversion firstName ="Maria" lastName = "Smith" age = {62} hairColor = "Brown" />
    </div>
  );
}

export default App;
