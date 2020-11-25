import React, { useContext, useReducer } from 'react';
import AddNote from './components/AddNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotesContext from './Context';
import NoteList from './components/NoteList';
import notesReducer from './Reducer';
import './App.css';


function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <div className="main container-md">
        <AddNote />
        <NoteList />
      </div>
    </NotesContext.Provider>
  );
}



export default App;
