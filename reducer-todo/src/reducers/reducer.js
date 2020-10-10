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
                completed: false,
                id: Date.now()
                
        }];
    case 'MARK_COMPLETED':
            return state.map(task => {
                if(task.id === action.payload){
                    return {
                        ...task, 
                        completed: !task.completed 
                    }}
                else{
                    return task
            }});
    case 'CLEAR_COMPLETED':
        return state.filter(task => !task.completed)
    default:
        return state;
    }
  };
  