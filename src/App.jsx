import { useState } from "react";
import Header from "./components/Header";
import AddList from "./components/AddList";
import DisplayTodoList from "./components/DisplayTodoList";
import BottomText from "./components/BottomText";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([
    {
      id: crypto.randomUUID(),
      text: "something",
      completed: false,
    },
  ]);

  console.log(todo);

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodo((prevTodo) => [
        ...prevTodo,
        { id: crypto.randomUUID(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div class="container">
      <div class="top-background"></div>
      <div class="wrapper">
        <div class="header">
          <div class="logo">
            <h1>TODO</h1>
          </div>
          <div className="theme-btn">
            <button class="change-button">
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
              className="item-input"
              value={inputValue}
              type="text"
              class="input-field"
              placeholder="Create a new todo..."
              onChange={handleInput}
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
        <div className="list-items">
          {todo.map((item, index) => (
            <div className="items" key={index}>
              <div className="todo-item">
                <input type="checkbox" id={`myCheckbox${index}`} />
                <label htmlFor={`myCheckbox${index}`}></label>
                <p
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </p>
              </div>
              <div className="action-btns">
                <button>
                  <img src="./src/assets/images/pencil.svg" />
                </button>
                <button>
                  <img src="./src/assets/images/icon-cross.svg" />
                </button>
              </div>
            </div>
          ))}
          <div className="footer">
            <div className="left-side">
              <p>{todo.length} items left</p>
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
        <BottomText task={todo} />
      </div>
    </div>
  );
}

export default App;
