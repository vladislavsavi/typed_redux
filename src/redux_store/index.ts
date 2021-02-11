import {createStore, combineReducers} from 'redux';

import {todoList} from './todoList';

export const rootReducer = combineReducers({
    todoList
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);