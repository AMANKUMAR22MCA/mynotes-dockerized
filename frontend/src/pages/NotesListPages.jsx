import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
const NotesListPages = () => {
  let [notes,setNotes] = useState([])

  useEffect(()=>{
       getNotes()
  },[])

  let getNotes = async()=>{
    let response = await fetch('http://backend:8000/api/v1/notes/')
    let data = await response.json()
    console.log('data',data);
    
    setNotes(data)
  }
  return (
    <div className='notes'>
      <div className='notes-list'>
      <div className="notes-header">
              <h2 className="notes-title">&#9782; Notes</h2>
              <p className="notes-count">{notes.length}</p>
          </div>
      {/* <h3 key={note.id}>{note.body}</h3> */}
        {notes.map((note)=>(
          
          <ListItem key={note.id} note={note} />
          
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesListPages
