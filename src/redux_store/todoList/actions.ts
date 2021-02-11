import {Key} from 'react';

import {ToDoModel} from '../models';

export const add_todo = (todo: ToDoModel) => ({type: 'ADD_TODO', todo} as const);
export const markAsCompleted = (ids: Key[]) => ({type: 'MARK_AS_COMPLETED', ids} as const);

