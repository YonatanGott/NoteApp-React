

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            const newNote = {
                id: Date.now(),
                title: action.payload.title,
                text: action.payload.value
            };
            const addedNotes = [...state.notes, newNote];

            return {
                ...state,
                notes: addedNotes
            };
        case 'DELETE_NOTE':
            const deletedNotes = state.notes.filter(
                note => note.id !== action.payload
            );
            return {
                ...state,
                notes: deletedNotes
            };
        case 'SET_CURRENT_NOTE':
            return {
                ...state,
                currentNote: action.payload
            };
        case 'UPDATE_NOTE':
            const addNote = {
                id: Date.now(),
                title: action.payload.title,
                text: action.payload.value
            };
            const updatedNotes = [...state.notes, addNote];

            return {
                ...state,
                notes: updatedNotes
            };

        default:
            return state;
    }
}