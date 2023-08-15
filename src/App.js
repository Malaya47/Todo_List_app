import { useState } from "react";
import "./index.css";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Coding", completed: true },
    { id: 3, title: "Learn Bootstrap", completed: true },
    { id: 4, title: "Learn jQuerry", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };
  return (
    <div className="container">
      <ToastContainer />
      <h1 className="main-title">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
