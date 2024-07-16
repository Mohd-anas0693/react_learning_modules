import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from "../feature/todoSlice"
import AddTodo from './AddTodo';
export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    return (
        <div>
            <AddTodo />
            <h1> Todo </h1>
            {
                todos.map(
                    (todo) => (
                        <li key={todo.id}>
                            <div>
                                {todo.todo}
                            </div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}                            >
                                remove
                            </button>
                        </li>))}
        </div>
    )
}
