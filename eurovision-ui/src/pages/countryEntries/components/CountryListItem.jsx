import React, { useEffect } from 'react'
import { useState } from 'react'

const CountryListItem = ({entry}) => {

    const [colorStyle, setColorStyle] = useState({background: 'blueviolet', color: 'white'})

    useEffect( () => {
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

    return (
        <div className='table-row' key={entry.id}>
            <div className='entry tab'>{entry.song.name}</div>
            <div className='entry tab'>{entry.song.artist.name}</div>
            <div className='entry tab'>{entry.contest_step.name}</div>
            <div className='entry tab'>{entry.year.year}</div>
            {entry.contest_step.name === 'Grand Final' ? 
            <div className='entry tab' style={colorStyle}>{entry.place} place</div> :
            <div className='entry tab' style={{backgroundColor: 'transparent'}}></div>}
        </div>
    )
}

export default CountryListItem
