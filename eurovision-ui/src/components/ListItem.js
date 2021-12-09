import StarContainer from './stars/StarContainer';
import './styles/ListItem.css'
import {useState} from 'react';
import axios from 'axios';
import EuroFlag from './EuroFlag';
import QualTable from './QualTable';

const ListItem = (props) => {
    const entry = props.entry;
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

    const testFunc = (e) => {
        let newScore = [...starScore];
        newScore[e.order].score = e.score;
        setStarScore(newScore);
        let patchBody = {};
        patchBody[newScore[e.order].name] = newScore[e.order].score;
        console.log(patchBody);
        axios.patch(
            `http://127.0.0.1:8000/api/entries/${entry.id}/`,
            patchBody
        )

    }

    const callQual = (e) => {
        axios.patch(
            `http://127.0.0.1:8000/api/entries/${entry.id}/`,
            {qualified : e}
        )
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
            <StarContainer key={entry.id} some_key={entry.id} score={starScore} click={testFunc} callPrompt={props.callPrompt}/>
            <div className='entry tab score'>{starScore.reduce((a, b) => a + b.score, 0).toFixed(2)}</div>
            <div>
                {entry.contest_step.name !== 'Grand Final' ? 
                <QualTable initQual={entry.qualified} callQual={callQual}/> : ''}
            </div>
            
        </div>
    )
}

export default ListItem
