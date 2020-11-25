export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            const newNote = {
                id: Date.now(),
                text: action.payload
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
        default:
            return state;
    }
}