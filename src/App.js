import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Datatable from './components/Datatable';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/history' element={ <Datatable /> } />
            <Route path='/edit/:id' element={ <Edit /> } />
          </Routes>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
