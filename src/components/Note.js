
import { ReactComponent as Cross } from './pics/cross.svg';
import { ReactComponent as Edit } from './pics/edit.svg';
import React, { useContext, useState } from 'react';
import NotesContext from '../Context';
import ReactModal from 'react-modal';
import EditNote from './EditNote';
ReactModal.setAppElement('#root');


export default function Note({ note }) {
    const { dispatch } = useContext(NotesContext);
    const newDate = new Date(note.id).toLocaleString();
    const [modalIsOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!modalIsOpen);
    };

    function editNote() {
        setIsOpen(!modalIsOpen);
        dispatch({ type: 'SET_CURRENT_NOTE', payload: note });
    };

    return (
        <div className="col-md-3 col">
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="modal-note"
                overlayClassName="overlay"
            >
                <div className="card-body text-center">
                    <div className="card-head">
                        <p className="date-text">New Note</p>
                        <Cross
                            className="remove-note close-modal"
                            role="button"
                            onClick={toggleModal}
                        />
                    </div>
                    <EditNote />
                </div>
            </ReactModal>
            <div className="card-body text-center" id="card">
                <div className="card-head">
                    <p className="date-text">{newDate}</p>
                    <div>
                        <Edit
                            className="edit-note "
                            role="button"
                            onClick={editNote}
                        />
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
                </div>
                <h4 className="note-title">{note.title}</h4>
                <p className="card-text">{note.text}</p>
            </div>
        </div>
    );
}