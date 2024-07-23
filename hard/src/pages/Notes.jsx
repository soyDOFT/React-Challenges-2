import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Notes.module.css'

let targetNote;
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

    function openEditor(e) {
        e.preventDefault();
        console.log(e.target.parentElement);
        e.target.parentElement.nextSibling.style.display = 'block';
        targetNote = e.target.parentElement;
    }

    function editNotes(e) {
        e.preventDefault();

        const index = notes.findIndex((note) => note.id == targetNote.id);
        console.log(index);
        setNotes((notes) => {
            const newNotes = [...notes];
            newNotes[index] = {id: Number(targetNote.id, 10), title: e.target[0].value, description: e.target[1].value}
            return newNotes;
        });
        e.target.style.display = 'none';
        console.log(notes);
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
                <button onClick={(e) => openEditor(e)}>Edit</button>
                <Link to="/details" state={{ from: "Notes", note: {id: note.id, title: note.title, description: note.description}}}>Details</Link>
                </div>
            )
        })}
        <form className={styles.editor} onSubmit={(e) => editNotes(e)}>
            <input type="text" placeholder="Note Title"/>
            <input type="text" placeholder="Note Description"/>
            <input type="submit" value="Finish Edit"/>
        </form>
        </>
    )
}
