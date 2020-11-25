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
        default:
            return state;
    }
}