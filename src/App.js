import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Presentation from './Presentation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{backgroundColor : '#ffc000'}}>
      
<HomePage></HomePage><br />

<Routes>

<Route path="/" element={<Presentation />} />


</Routes>

    </div>
  );
}

export default App;
