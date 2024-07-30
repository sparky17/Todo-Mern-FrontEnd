import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Todos/")
      .then(async (res) => {
        console.log(res);
        const json = await res.json();
        setTodos(json.Todos || []);
        
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);
  console.log(todos)

  return (
    <>
     <div>
      <CreateTodo/>
      <Todos todos={todos}/>
     </div>
    </>
  )
}

export default App
