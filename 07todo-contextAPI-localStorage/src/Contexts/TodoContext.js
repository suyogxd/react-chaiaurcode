import {useContext, createContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext);
}