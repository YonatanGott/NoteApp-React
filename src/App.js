import './App.css';
import React from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NoteItem';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  handleOnAddNote(newNote) {
    this.setState((state) => {
      return { notes: [newNote, ...state.notes] }
    });
  }

  render() {
    return (
      <div className="main container-md">
        <AddNote onAddNote={(newNote) => this.handleOnAddNote(newNote)} />
        <NotesList notes={this.state.notes} />
      </div>
    );
  }
}


export default App;
