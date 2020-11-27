
import React, { useState, useContext, } from 'react';
import NotesContext from '../Context';

export default function AddNote() {
    const { dispatch } = useContext(NotesContext);
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleChangeTitle = event => {
        setTitle(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (value.trim() === '') {
            alert('Cannot add a blank note');
        } else {
            dispatch({ type: 'ADD_NOTE', payload: { value: value, title: title } });
            setValue('');
            setTitle('');
        }
    };

    return (
        <div className="row justify-content-md-center form-row">
            <div className="col-md-4 form-col">
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
                    <button className="btn btn-primary btn-block btn-lg" id="btn" type="submit">Add note</button>
                </form>
            </div>
        </div>
    );
}