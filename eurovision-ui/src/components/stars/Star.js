import { useState } from 'react'
import '../styles/Star.css'
import Rating from 'react-rating';

const Star = (props) => {

    const [rating, setRating] = useState(props.score)

    function changeStarColor(e) {
        console.log(e);
        if (e < 0.15) {
            e = 0;
        } else if (e > 0.85) {
            e = 1;
        }
        setRating(e)
        props.click({
            score: e,
            name: props.name,
            order: props.order
        })
    }

    return (
        <div 
            className='star' 
            onMouseOver={() => props.callPrompt(props.name)}
            onMouseLeave={() => props.callPrompt('')}
            >
            <Rating 
                fractions={20}
                stop={1}
                initialRating={rating}
                onClick={rate => changeStarColor(rate)}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
            />
            <div style={{fontSize: '18px', textAlign: 'center'}}>{rating}</div>
        </div>
    )
}

export default Star
