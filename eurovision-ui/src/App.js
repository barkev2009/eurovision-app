import { Route, Routes } from 'react-router-dom';
import './App.css';
import EntriesPage from './pages/entries/EntriesPage';
import MainPage from './pages/main/MainPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route exact path='/entries' element={<EntriesPage />}/>
      </Routes>
    </div>
  );
}

export default App;
