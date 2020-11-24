import React from 'react';


function NoteItem(props) {
    return (
        <div className="col-md-3 col">
            <div className="card-body text-center">
                <p className="card-text">{props.note}</p>
            </div>
        </div>
    )
}

function NotesList(props) {
    return (
        <div className="row justify-content-lg-center">
            {props.notes.map(note =>
                <NoteItem
                    key={note.dateCreated}
                    note={note.note}
                />
            )}
        </div>
    )
}

export default NotesList;
