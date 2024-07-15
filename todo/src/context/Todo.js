import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Some Thing",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    updateTodo: (id, todo) => { },
    toggleComplete: (id) => { }
});

export const TodoContextProvider = TodoContext.Provider;
export function useTodo() {
    return useContext(TodoContext);
}