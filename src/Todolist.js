import React, { useState, useCallback } from "react";
import "./Todolist.css"

function TodoList() {

    const todolist = ["todo_1", "todo_2", "todo_3"];

    const [todos, setTodos] = useState(todolist)
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = useCallback(() => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setNewTodo("");
        }
    }, [newTodo]);

    const handleDeleteTodo = useCallback((index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    }, []);

    const handleComplited = useCallback(() => {

        const todoItem = document.querySelectorAll(".todo__item")
        todoItem.forEach((todo) => {
            todo.classList.toggle("todo__item--complited")
        })
    })

        return(
            <div>
                <h1>создай todo list</h1>
                <ol>
                    {todos.map((todo, index) => (
                        <li className="todo__item" key={index}>
                            {todo}
                            <button onClick={() => handleDeleteTodo(index)}>удалить</button>
                            <button onClick={() => handleComplited(index)}>выполнено</button>
                        </li>
                    ))}
                </ol>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="enter your todo"
                />
                <button onClick={handleAddTodo}>добавить</button>

            </div>
        );
}
export default TodoList;
