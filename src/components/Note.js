
import { ReactComponent as Cross } from './pics/cross.svg';
import React, { useContext,useState }  from 'react';
import NotesContext from '../Context';
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


export default function Note({ note }) {
    const { dispatch } = useContext(NotesContext);
    const newDate = new Date(note.id).toLocaleString();
    const [modalIsOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!modalIsOpen);
    }

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
                    <p className="date-text">{newDate}</p>
                    <Cross
                        className="remove-note "
                        role="button"
                        onClick={toggleModal}
                    />
                </div>
                <h4 className="note-title">{note.title}</h4>
                <p className="card-text">{note.text}</p>
            </div>
            </ReactModal>
            <div className="card-body text-center" id="card" onClick={toggleModal}>
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
                <h4 className="note-title">{note.title}</h4>
                <p className="card-text">{note.text}</p>
            </div>
        </div>
    );
}