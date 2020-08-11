export const initialState = [{
    task: 'Example task',
    completed: false,
    id: 1
 },
];

export const tasksReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_NEW_TASK':
        return [
            ...state,
            {
                task: action.payload,
                id: Date.now(),
                completed: false
        }];
    case 'MARK_COMPLETED':
        return state.map(task => {
            console.log(task)
            if(task === action.payload){
                return {
                    ...task,
                    completed: !task.completed}
            }
        })
    case 'CLEAR_COMPLETED':
        return state.filter(task => !task.completed)
    default:
        return state;
    }
  };
  