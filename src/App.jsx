import { useState } from "react";
import Header from "./components/Header";
import AddList from "./components/AddList";
import DisplayTodoList from "./components/DisplayTodoList";
import BottomText from "./components/BottomText";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      text: "something",
      completed: false,
    },
  ]);

  console.log(todos);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos((prevTodo) => [
        ...prevTodo,
        { id: crypto.randomUUID(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const editTodo = () => {};

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="container">
      <div className="top-background"></div>
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <h1>TODO</h1>
          </div>
          <div className="theme-btn">
            <button className="change-button">
              <img src="./src/assets/images/icon-sun.svg" />
            </button>
          </div>
        </div>
        <div className="add-todo">
          <div className="input-field">
            <button onClick={addTodo}>
              <img src="./src/assets/images/add-circle.svg" />
            </button>
            <input
              value={inputValue}
              type="text"
              className="input-field"
              placeholder="Create a new todo..."
              onChange={handleInput}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div className="list-items">
          {todos.map((todo) => {
            return (
              <div className="items" key={todo.id}>
                <div className="todo-item">
                  <input type="checkbox" id={`myCheckbox${todo.id}`} />
                  <label htmlFor={`myCheckbox${todo.id}`}></label>
                  <p>{todo.text}</p>
                </div>
                <div className="action-btns">
                  <button>
                    <img src="./src/assets/images/pencil.svg" />
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-btn"
                  >
                    <img src="./src/assets/images/icon-cross.svg" />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="footer">
            <div className="left-side">
              <p>{todos.length} items left</p>
            </div>
            <div className="button-wrapper">
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <div className="clear-button">
              <button className="clear-btn">Clear Completed</button>
            </div>
          </div>
          <div className="button-wrapper-mb">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
        <BottomText task={todos} />
      </div>
    </div>
  );
}

export default App;
