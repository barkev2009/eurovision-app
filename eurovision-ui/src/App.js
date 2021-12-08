import './App.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import List from './components/List';
import YearSelect from './components/YearSelect';
import StepSelect from './components/StepSelect';

function App() {

  // Setting hooks
  const [initEntries, setInitEntries] = useState([])
  const [years, setYears] = useState([]);
  const [steps, setSteps] = useState([]);

  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState('');
  
  const curYear = useRef('')
  const curStep = useRef('')

  const promptTranslation = {
    purity: 'Чистота исполнения песни',
    show: 'Наличие и качество шоу-составляющей',
    difficulty: 'Сложность исполнения песни',
    originality: 'Оригинальность песни и номера',
    sympathy: 'Личная симпатия'
  }

  // Setting initial data
  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/entries/'
    }).then(response => {
      setInitEntries(response.data)
    })
    }, [])
  
  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/years/'
    }).then(response => {
      setYears(response.data);
      curYear.current = localStorage.year ? parseFloat(localStorage.year) : response.data[0].year
      // setEntries([...initEntries].filter((entry) => entry.year.year === curYear.current))
    })
    }, [])
  
  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/contest_steps/'
    }).then(response => {
      setSteps(response.data);
      curStep.current = localStorage.step ? localStorage.step : response.data[0].name
      setEntries([...initEntries].filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current))
    })
    }, [initEntries])

  // Setting functions to pass into components
  const changePrompt = (e) => {
    setPrompt(e);
  }

  const changeFilterYear = (e) => {
    curYear.current = parseFloat(e)
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/entries/'
    }).then(response => {
      setEntries(response.data.filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current))
      localStorage.setItem('year', curYear.current)
    })
  }

  const changeFilterStep = (e) => {
    curStep.current = e
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/entries/'
    }).then(response => {
      setEntries(response.data.filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current))
      localStorage.setItem('step', curStep.current)
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="select-container">
          <div className='header'></div>
          <StepSelect steps={steps} onChange={changeFilterStep} defaultValue="Choose the step" curValue={curStep.current}/>
          <YearSelect years={years} onChange={changeFilterYear} defaultValue="Choose the year" curValue={curYear.current}/>
        </div>
        <div className='name-prompt'>{promptTranslation[prompt]}</div>
        <List entries={entries} callPrompt={changePrompt}/>
      </header>
    </div>
  );
}

export default App;
