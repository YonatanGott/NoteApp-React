
import { ReactComponent as Cross } from './pics/cross.svg';
import React, { useContext } from 'react';
import NotesContext from '../Context';


export default function Note({ note }) {
    const { dispatch } = useContext(NotesContext);
    const newDate = new Date(note.id).toLocaleString();

    return (
        <div className="col-md-3 col">
            <div className="card-body text-center" id="card">
                <div className="card-head">
                    <p className="date-text">{newDate}</p>
                    <Cross
                        className="remove-note "
                        role="button"
                        onClick={() => {
                            const del = window.confirm("Are you sure you want to delete?");
                            if (del === true) {
                                dispatch({ type: 'DELETE_NOTE', payload: note.id });
                            }
                        }}
                    />
                </div>
                <p className="card-text">{note.text}</p>
            </div>
        </div>
    );
}