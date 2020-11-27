import React, { useState, useContext } from 'react';
import NotesContext from '../Context';

export default function EditNote() {
    const { state, dispatch } = useContext(NotesContext);
    const [value, setValue] = useState(state.currentNote.text);
    const [title, setTitle] = useState(state.currentNote.title);
    const [id] = useState(state.currentNote.id);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleChangeTitle = event => {
        setTitle(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_NOTE', payload: { value: value, title: title } });
        dispatch({ type: 'DELETE_NOTE', payload: id });
        setValue('');
        setTitle('');
    };


    return (
        <form className="form-group" onSubmit={handleSubmit} action=''>
            <input
                className="input-title form-control"
                type="text"
                placeholder="Enter Note Title"
                onChange={handleChangeTitle}
                value={title}
            />
            <textarea
                className="form-control input-text"
                type="text"
                rows="5"
                name="note"
                id="note"
                onChange={handleChange}
                value={value}
            />
            <button className="btn btn-primary btn-block btn-lg" id="btn" type="submit" >Update note</button>
        </form>
    )
}