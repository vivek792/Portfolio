import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './Components/portfolio.js';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Portfolio />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
