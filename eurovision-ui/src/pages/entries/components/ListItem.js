import StarContainer from './stars/StarContainer';
import '../../../styles/style.css'
import {useState, useEffect} from 'react';
import axios from 'axios';
import EuroFlag from './EuroFlag';
import QualTable from './QualTable';
import PlaceInput from './PlaceInput';
import { useDispatch } from 'react-redux';
import { setInitialEntries } from '../../../redux/actions';

const ListItem = (props) => {
    const entry = props.entry;
    const dispatch = useDispatch();
    const score = [
        {
            id: 0,
            name: 'purity',
            score: entry.purity
        },
        {
            id: 1,
            name: 'show',
            score: entry.show
        },
        {
            id: 2,
            name: 'difficulty',
            score: entry.difficulty
        },
        {
            id: 3,
            name: 'originality',
            score: entry.originality
        },
        {
            id: 4,
            name: 'sympathy',
            score: entry.sympathy
        }
    ];

    const [starScore, setStarScore] = useState(score);
    const [colorStyle, setColorStyle] = useState({background: 'blueviolet', color: 'white'})

    useEffect(() => {
        switch (entry.place) {
            case 1:
                setColorStyle({background: 'gold', color: 'black'});
                break;
            case 2:
                setColorStyle({background: 'silver', color: 'black'});
                break;
            case 3:
                setColorStyle({background: 'rgb(205, 127, 50)', color: 'black'});
                break;
            default:
                setColorStyle({background: 'blueviolet', color: 'white'});
                break;
        }
    }, [entry.place])

    const changeStar = (e) => {
        let newScore = [...starScore];
        newScore[e.order].score = e.score;
        setStarScore(newScore);
        let patchBody = {};
        patchBody[newScore[e.order].name] = newScore[e.order].score;
        axios.patch(
            `http://127.0.0.1:8000/api/entries/${entry.id}/`,
            patchBody
        )
        dispatch(setInitialEntries());
    }

    const callQual = (e) => {
        axios.patch(
            `http://127.0.0.1:8000/api/entries/${entry.id}/`,
            {qualified : e}
        )
        dispatch(setInitialEntries());
    }

    const changeInput = (e) => {
        axios.patch(
            `http://127.0.0.1:8000/api/entries/${entry.id}/`,
            {place : parseInt(e)}
        )
        dispatch(setInitialEntries());
        switch (parseInt(e)) {
            case 1:
                setColorStyle({background: 'gold', color: 'black'});
                break;
            case 2:
                setColorStyle({background: 'silver', color: 'black'});
                break;
            case 3:
                setColorStyle({background: 'rgb(205, 127, 50)', color: 'black'});
                break;
            default:
                setColorStyle({background: 'blueviolet', color: 'white'});
                break;
        }
    }

    return (
        <div className='table-row' key={entry.id}>
            <div className='entry order'>{entry.order}</div>
            <div className='entry flag'>
                <div className='entry'>
                    <EuroFlag country={entry.song.artist.country.name}/>
                    <div className='country-text'>{entry.song.artist.country.name}</div>
                </div>
                <div className='entry tab'>{entry.song.artist.name}</div>
            </div>            
            <div className='entry tab artist'>{entry.song.name}</div>            
            <StarContainer key={entry.id} some_key={entry.id} score={starScore} click={changeStar} callPrompt={props.callPrompt}/>
            <div className='entry tab score'>{starScore.reduce((a, b) => a + b.score, 0).toFixed(2)}</div>
            <div>
                {!entry.contest_step.name.includes('Grand Final') ? 
                <QualTable initQual={entry.qualified} callQual={callQual}/> : 
                <PlaceInput defaultValue={entry.place} onChange={changeInput} colorStyle={colorStyle}/>}
            </div>
        </div>
    )
}

export default ListItem
