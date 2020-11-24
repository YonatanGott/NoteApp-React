import React from 'react';

class AddNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: ''
        };
    }

    handleNoteChange(event) {
        this.setState({ note: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const newNote = {
            note: this.state.note,
            dateCreated: Date.now()
        };
        this.props.onAddNote(newNote);
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4 col">
                    <form className="form-group" onSubmit={(event) => this.handleSubmit(event)}>
                        <div>
                            <textarea
                                className="form-control"
                                type="text"
                                rows="5"
                                name="note"
                                id="note"
                                value={this.state.note}
                                onChange={(event) => this.handleNoteChange(event)}
                            />
                        </div>
                        <div>
                            <button className="btn btn-primary btn-block btn-lg" id="btn" type="submit">Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddNote;