import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Купить хлеб" },
    { id: 2, completed: false, title: "Купить масло" },
    { id: 3, completed: false, title: "Купить молоко" }
  ]);

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
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>Список задач пуст</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
