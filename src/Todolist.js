import React, { useState, useCallback } from "react";
import "./Todolist.css"

function TodoList() {
    const todolist = ["todo_1", "todo_2", "todo_3"];

    const todolistMap = todolist.map((todo) => ({ text: todo, completed: false }))

    const [todos, setTodos] = useState(todolistMap);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = useCallback(() => {
        if (newTodo.trim() !== "") {
            setTodos((prevTodos) => [
                ...prevTodos,
                { text: newTodo, completed: false },
            ]);
            setNewTodo("");
        }
    }, [newTodo]);

    const toggleTodoCompletion = useCallback((index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    }, []);

    return (
        <div>
            <h1>Создай todo list</h1>
            <ol>
                {todos.map((todo, index) => (
                    <li
                        className={`todo__item ${todo.completed ? "completed" : ""}`}
                        key={index}
                        onClick={() => toggleTodoCompletion(index)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ol>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter your todo"
            />
            <button onClick={handleAddTodo}>Добавить</button>
        </div>
    );
}

export default TodoList;
