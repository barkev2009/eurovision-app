import ListItem from "./ListItem"
import './styles/List.css'

const List = (props) => {
    return (
        <div className='container'>
          {props.entries.map(entry => (
            <ListItem entry={entry} key={entry.id} callPrompt={props.callPrompt}/>
          ))} 
        </div>
    )
}

export default List
