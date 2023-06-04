import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Datatable from './components/Datatable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/history' element={ <Datatable /> } />
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
