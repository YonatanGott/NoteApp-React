
import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../Context';

export default function AddNote() {
    const { state, dispatch } = useContext(NotesContext);
    const [value, setValue] = useState('');

    let ref = useRef();

    useEffect(() => {
        ref.current.focus();
    });

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (value.trim() === '') {
            alert('Cannot add a blank note');
        } else {
            dispatch({ type: 'ADD_NOTE', payload: value });
            setValue('');
        }
    };

    return (
        <div className="row justify-content-md-center">
            <div className="col-md-4 col">
                <form className="form-group" onSubmit={handleSubmit} action=''>
                    <textarea
                        className="form-control"
                        type="text"
                        rows="5"
                        name="note"
                        id="note"
                        ref={ref}
                        onChange={handleChange}
                        value={value} />
                    <button className="btn btn-primary btn-block btn-lg" id="btn" type="submit">Add note</button>
                </form>
            </div>
        </div>
    );
}