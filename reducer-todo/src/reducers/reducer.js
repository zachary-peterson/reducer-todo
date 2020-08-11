export const initialState = [{
    task: 'Example task',
    completed: false,
    id: 1
 },
];

export const tasksReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_NEW_TASK':
        return {
            ...state,
            task: action.payload,
            id: new Date()
        };
    case 'MARK_COMPLETED':
        return {
            ...state,
            completed: !state.completed
        };
    default:
        return state;
    }
  };
  