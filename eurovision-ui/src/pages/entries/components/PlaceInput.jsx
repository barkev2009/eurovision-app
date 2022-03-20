import '../../../styles/style.css'

const PlaceInput = ({defaultValue, onChange, colorStyle}) => {
    return (
        <div className='entry tab place-tab' style={colorStyle}>
            <input type='number' defaultValue={defaultValue} onChange={e => onChange(e.target.value)} style={{color: colorStyle.color}}/>
            place
        </div>
        
    )
}

export default PlaceInput
