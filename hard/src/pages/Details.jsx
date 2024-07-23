import { useLocation } from "react-router-dom";
export default function Details() {
  const location = useLocation();
  const { note } = location.state;
    return (
    <div>
        <p>Note ID: {note.id}</p>
        <p>Note Title: {note.title}</p>
        <p>Note Description: {note.description}</p>
    </div>
  )
}
