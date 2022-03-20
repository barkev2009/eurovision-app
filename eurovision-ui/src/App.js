import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountryEntries from './pages/countryEntries/CountryEntries';
import EntriesPage from './pages/entries/EntriesPage';
import MainPage from './pages/main/MainPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/eurovision-app' element={<MainPage />}/>
        <Route exact path='/entries' element={<EntriesPage />}/>
        <Route exact path='/country-entries' element={<CountryEntries />}/>
      </Routes>
    </div>
  );
}

export default App;
