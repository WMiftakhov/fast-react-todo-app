import React, { useEffect } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from './Loader'
import AddTodo from './Todo/AddTodo'
import Modal from './Modal/Modal'


function App() {
  const [todos, setTodos] = React.useState([
    // { id: 1, completed: false, title: "Купить хлеб" },
    // { id: 2, completed: false, title: "Купить масло" },
    // { id: 3, completed: false, title: "Купить молоко" }
  ]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
            setTodos(todos);
            setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map(item => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter(item => item.id !== id));
  }

  function addTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now(), completed: false }]));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>ToDo</h1>
        <Modal/>
        <AddTodo onCreate={addTodo} />
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          loading ? null : <p>Список задач пуст</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
