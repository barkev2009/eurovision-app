import {useState} from 'react'

const QualTable = ({initQual, callQual}) => {

    const [qual, setQual] = useState({qual: initQual, color: initQual ? 'green': 'red'});

    const changeQual = () => {
        qual.qual ? setQual({...qual, qual: false, color: 'red'}) : setQual({...qual, qual: true, color: 'green'})
        callQual(!qual.qual)
    }

    return (
        <div className='qualtable' onClick={() => changeQual()} style={{backgroundColor: qual.color}}>
            {qual.qual ? 'qualified' : 'non-qualified'}
        </div>
    )
}

export default QualTable
