import { useState } from 'react'
import styles from './Notes.module.css'

export default function Notes() {
    const [ notes, setNotes ] = useState([]);
    function addNote(e) {
        e.preventDefault();
        setNotes(() => [...notes, {id: notes.length, title: e.target[0].value, description: e.target[1].value}])
    }

    function removeNotes(e) {
        e.preventDefault();
        setNotes(() => notes.filter((note) => note.id != e.target.parentElement.id));
    }

    return (
        <>
         <form onSubmit={(e) => addNote(e)}>
            <input type="text" placeholder="Note Title"/>
            <input type="text" placeholder="Note Description"/>
            <input type="submit" value="Add"/>
        </form>
        {notes?.map((note) => {
            return (
                <div className={styles.note} key={note?.id} id={note?.id}>
                <p>{note?.title}</p>
                <p>{note?.description}</p>
                <p style={{display:"none"}}></p>
                <button onClick={(e) => removeNotes(e)}>Remove</button>
                </div>
            )
        })}
        </>
    )
}
