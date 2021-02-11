import {InferValueType, ToDoModel} from '../models';
import * as actions from './actions';


type ActionsType = ReturnType<InferValueType<typeof actions>>;

type State = Array<ToDoModel>;

export const todoList = (state: State = [], action: ActionsType) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state.concat(action.todo)];
        case 'MARK_AS_COMPLETED':
            state.forEach(todo => todo.completed = false);
            action.ids.forEach(selectedId => {
                const todo = state.find((({id}) => id === selectedId));
                if (todo) {
                    todo.completed = true;
                }
            })
            return [...state]
    }
    return state;
}
