import React from 'react';
import { useState } from 'react';


export function Todos({ todos }) {
    const [completedTodos, setCompletedTodos] = useState([]);
    
    function isDone(id) {
        fetch(`http://localhost:3000/completed/`, {
            method: "PUT",
            body: JSON.stringify({
                id: id
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async (res) => {
            if (res.ok) {
                const updatedTodo = todos.find(todo => todo._id === id);
                updatedTodo.completed = true;
                setCompletedTodos([...completedTodos, id]);
                alert("Todo updated");
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            // alert('Failed to update todo.');
        });
    }
    
    return (
        <div>
            {todos.map((todo) => (
                <div >
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={() => isDone(todo._id)} disabled={completedTodos.includes(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as Complete"}</button>
                </div>
            ))}
        </div>
    );
}