import Star from "./Star"

const StarContainer = (props) => {

    return (
        <div key={props.some_key} className='entry'>
            {props.score.map((content) => (
                <Star key={content.name} score={content.score} name={content.name} order={content.id} click={props.click} callPrompt={props.callPrompt}/>
            ))}
        </div>
    )
}

export default StarContainer
