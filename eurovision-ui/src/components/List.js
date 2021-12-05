import ListItem from "./ListItem"
import './styles/List.css'

const List = (props) => {
    return (
        <div className='container'>
          {props.entries.sort((a, b) => (a.order - b.order)).map(entry => (
            <ListItem entry={entry} key={entry.id} callPrompt={props.callPrompt}/>
          ))} 
        </div>
    )
}

export default List
