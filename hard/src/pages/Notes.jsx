import { useState } from 'react'
import styles from './Notes.module.css'

export default function Notes() {
    const [ notes, setNotes ] = useState([{title: 'title', description: 'desc...'}]);

    function removeNotes(e) {
        console.log(e);
        console.log('removed');
    }

    return (
        <>
         <form>
            <input type="text" placeholder="Note Title"/>
            <input type="text" placeholder="Note Description"/>
            <input type="submit" value="Add"/>
        </form>
        {notes?.map(note => {
            return (
                <div className={styles.note} key={notes.indexOf(note)}>
                <p>{note?.title}</p>
                <p>{note?.description}</p>
                <button onClick={(e) => removeNotes(e)}>Remove</button>
                </div>
            )
        })}
        </>
    )
}
