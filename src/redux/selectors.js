import { VISIBILITY_FILTERS, VISIBLITY_FILTERS } from '../constants';

export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store) ? getTodosState(store).allIDs : [];

export const getTodoByID = (store, id) =>
    getTodosState(store) ? {...getTodosState(store).byIDs[id], id} : {}

export const getTodos = store =>
    getTodoList(store).map(id => getTodoByID(store, id))

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed)
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed)
        case VISIBILITY_FILTERS.ALL:
        default : return allTodos;
    }
}
