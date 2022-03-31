import { useState, useEffect, useRef, useCallback } from 'react';
import List from './components/List';
import YearSelect from './components/YearSelect';
import StepSelect from './components/StepSelect';
import logo from '../../images/logo.png'
import SortSelect from './components/SortSelect';
import '../../styles/style.css'
import { setInitialEntries } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EntriesPage = () => {
  // Setting hooks

  const [entriesState, setEntriesState] = useState([]);
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

  const dispatch = useDispatch();
  const steps = useSelector(state => state.steps.steps)
  const years = useSelector(state => state.years.years)
  const entries = useSelector(state => state.entries.entries)
  
  const navigate = useNavigate()
  const navToMain = useCallback(
    () => navigate('/eurovision-app', {replace: true}), []
  )

  // Setting initial data

  useEffect(() => {
    if (entries.length === 0) {
      dispatch(setInitialEntries())
    }
    curYear.current = localStorage.year ? parseFloat(localStorage.year) : years[0]
    curStep.current = localStorage.step ? localStorage.step : steps[0]
    curSortRule.current = localStorage.sortRule ? localStorage.sortRule : 'By entry order'
    setAllEntries()

  }, [entries])

  // Setting functions to pass into components
  const changePrompt = (e) => {
    setPrompt(e);
  }

  const setAllEntries = () => {
    const entriesToSet = [...entries].filter((entry) => entry.year.year === curYear.current && entry.contest_step.name === curStep.current)
    switch (curSortRule.current) {
      case 'By entry order':
        setEntriesState(entriesToSet.sort((a, b) => a.order - b.order));
        break;
      case 'By personal rating':
        setEntriesState(entriesToSet.sort((a, b) => [b.purity, b.show, b.difficulty, b.originality, b.sympathy].reduce((a_s, b_s) => a_s + b_s, 0) -
          [a.purity, a.show, a.difficulty, a.originality, a.sympathy].reduce((a_s, b_s) => a_s + b_s, 0)));
        break;
      case 'By place':
        setEntriesState(entriesToSet.sort((a, b) => a.place - b.place));
        break;
      default:
        setEntriesState(entriesToSet.sort((a, b) => a.order - b.order));
        break;
    }
  }

  const changeFilterYear = (e) => {
    curYear.current = parseFloat(e)
    setAllEntries()
    localStorage.setItem('year', curYear.current)
  }

  const changeFilterStep = (e) => {
    curStep.current = e
    if (curStep.current !== 'Grand Final' && curSortRule.current === 'By place') {
      curSortRule.current = 'By entry order'
    }
    setAllEntries()
    localStorage.setItem('step', curStep.current)
  }

  const changeSortRule = (e) => {
    curSortRule.current = e
    setAllEntries()
    localStorage.setItem('sortRule', curSortRule.current)
  }

  return (
    <div className="App-main">
      <div className="select-container">
        <img src={logo} alt='euro_logo' className='logo' onClick={navToMain}/>
        <div className='header'></div>
        <SortSelect defaultValue='Choose the sorting rule' onChange={changeSortRule} curValue={curSortRule.current} curStep={curStep.current} />
        <StepSelect steps={steps} onChange={changeFilterStep} defaultValue="Choose the step" curValue={curStep.current} />
        <YearSelect years={years} onChange={changeFilterYear} defaultValue="Choose the year" curValue={curYear.current} />
        <div className='name-prompt'>{promptTranslation[prompt]}</div>
      </div>
      {entriesState.length !== 0 ? <List entries={entriesState} callPrompt={changePrompt} /> : <div>No entries available</div>}
      <div style={{ fontSize: '14px', paddingBottom: '4px' }}>My e-mail</div>
    </div>
  )
}


export default EntriesPage;
