import './App.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import List from './components/List';
import YearSelect from './components/YearSelect';
import StepSelect from './components/StepSelect';
import logo from './components/images/logo.png'
import SortSelect from './components/SortSelect';

function App() {

  // Setting hooks
  const [initEntries, setInitEntries] = useState([])
  const [years, setYears] = useState([]);
  const [steps, setSteps] = useState([]);

  const [entries, setEntries] = useState([]);
  const [prompt, setPrompt] = useState('');
  
  const curYear = useRef('')
  const curStep = useRef('')
  const curSortRule = useRef('By entry order')

  const promptTranslation = {
    purity: 'Чистота исполнения песни',
    show: 'Наличие и качество шоу-составляющей',
    difficulty: 'Сложность исполнения песни',
    originality: 'Оригинальность песни и номера',
    sympathy: 'Личная симпатия'
  }

  // Setting initial data
  useEffect(() => {
    document.title = 'Eurovision-App'
    curSortRule.current = localStorage.sortRule ? localStorage.sortRule : 'By entry order'
  }, [])

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
    })
    }, [])
  
  useEffect(() => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/contest_steps/'
    }).then(response => {
      setSteps(response.data);
      curStep.current = localStorage.step ? localStorage.step : response.data[0].name
      const entriesToSet = [...initEntries].filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current)
      curSortRule.current === 'By entry order' ?
        setEntries(entriesToSet.sort((a, b) => a.order - b.order)) :
        setEntries(entriesToSet.sort((a, b) => [b.purity, b.show, b.difficulty, b.originality, b.sympathy].reduce((a, b) => a + b, 0) - 
        [a.purity, a.show, a.difficulty, a.originality, a.sympathy].reduce((a, b) => a + b, 0)))
    })
    }, [initEntries])

  // Setting functions to pass into components
  const changePrompt = (e) => {
    setPrompt(e);
  }

  const setAllEntries = () => {
    axios({
      method: "GET",
      url: 'http://127.0.0.1:8000/api/entries/'
    }).then(response => {
      const newEntries = response.data.filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current)
      curSortRule.current === 'By entry order' ?
        setEntries(newEntries.sort((a, b) => a.order - b.order)) :
        setEntries(newEntries.sort((a, b) => [b.purity, b.show, b.difficulty, b.originality, b.sympathy].reduce((a_s, b_s) => a_s + b_s, 0) - 
        [a.purity, a.show, a.difficulty, a.originality, a.sympathy].reduce((a_s, b_s) => a_s + b_s, 0)))
    })
  }

  const changeFilterYear = (e) => {
    curYear.current = parseFloat(e)
    setAllEntries()
    localStorage.setItem('year', curYear.current)
  }

  const changeFilterStep = (e) => {
    curStep.current = e
    setAllEntries()
    localStorage.setItem('step', curStep.current)
  }

  const changeSortRule = (e) => {
    curSortRule.current = e
    setAllEntries()
    localStorage.setItem('sortRule', curSortRule.current)
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="select-container">
          <img src={logo} alt='euro_logo'/>
          <div className='header'></div>
          <SortSelect defaultValue='Choose the sorting rule' onChange={changeSortRule} curValue={curSortRule.current}/>
          <StepSelect steps={steps} onChange={changeFilterStep} defaultValue="Choose the step" curValue={curStep.current}/>
          <YearSelect years={years} onChange={changeFilterYear} defaultValue="Choose the year" curValue={curYear.current}/>
          <div className='name-prompt'>{promptTranslation[prompt]}</div>
        </div>
        <List entries={entries} callPrompt={changePrompt}/>
        <div style={{fontSize: '14px', paddingBottom: '4px'}}>My e-mail</div>
      </header>
    </div>
  );
}

export default App;
