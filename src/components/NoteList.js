import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../Context';

export default function NoteList() {
    const { state } = useContext(NotesContext);

    return (
        <div className='row justify-content-lg-center'>
            {state.notes.map((note, id) => {
                return <Note note={note} key={id} />;
            })}
        </div>
    );
}
