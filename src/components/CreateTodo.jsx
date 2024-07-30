import { useState } from 'react';

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        fetch("http://localhost:3000/Todo", {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(async (res) => {
            if (res.ok) {
                const json = await res.json();
                alert("Todo Added");
                // Optionally, you can clear the input fields here
                setTitle('');
                setDescription('');
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            // alert('Failed to add todo.');
        });
    };

    return (
        <div>
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <br /> 
            <input
                style={{
                    padding: 10,
                    margin: 10
                }}
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
                style={{
                    padding: 10,
                    margin: 10
                }}
                onClick={handleAddTodo}
            >
                Add a Todo
            </button>
        </div>
    );
}
