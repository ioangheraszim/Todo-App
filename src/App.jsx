import { useState } from "react";
import Header from "./components/Header";
import BottomText from "./components/BottomText";
import AddList from "./components/AddList";
import Footer from "./components/Footer";
import ButtonsMobile from "./components/ButtonsMobile";

function App() {
  /** States */
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  /** Functions */
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      if (selectedTodo) {
        // Update existing todo
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === selectedTodo.id ? { ...todo, text: inputValue } : todo
          )
        );
        setSelectedTodo(null);
      } else {
        // Add new todo
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            id: crypto.randomUUID(),
            text: inputValue,
            completed: false,
          },
        ]);
      }
      setInputValue("");
    }
  };

  /** Deletes the todo items from the list */
  const deleteTodo = (id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  /** Edits the todo items from the list */
  const editTodo = (id) => {
    const selected = todos.find((todo) => todo.id === id);
    if (selected) {
      setSelectedTodo(selected);
      setEditValue(selected.text); // Set the editValue with the selected todo's text
    }
  };

  /** Saves the edited values of the todo list */
  const saveTodo = () => {
    if (editValue.trim() !== "") {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === selectedTodo.id ? { ...todo, text: editValue } : todo
        )
      );
      setSelectedTodo(null);
      setEditValue(""); // Reset editValue state
    }
  };

  /** removes all the completed items from the todo list */
  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  /** Handles the input values */
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  /** Returns the JSX code handling the user interface displaying todos and handling user interactions*/
  return (
    <div className="container">
      <div className="top-background"></div>
      <div className="wrapper">
        <Header />
        <AddList
          inputValue={inputValue}
          handleInput={handleInput}
          handleKeyPress={handleKeyPress}
          addTodo={addTodo}
        />
        <div className="list-items">
          {filteredTodos.map((todo) => {
            return (
              <div className="items" key={todo.id}>
                <div className="todo-item">
                  <input
                    type="checkbox"
                    id={`myCheckbox${todo.id}`}
                    checked={todo.completed}
                    onChange={() => toggleCompletion(todo.id)}
                    name="completed"
                  />
                  <label htmlFor={`myCheckbox${todo.id}`}></label>
                  {selectedTodo && selectedTodo.id === todo.id ? (
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveTodo();
                        }
                      }}
                      className="edit-input"
                    />
                  ) : (
                    <p
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.text}
                    </p>
                  )}
                </div>
                <div className="action-btns">
                  {selectedTodo && selectedTodo.id === todo.id ? (
                    <button onClick={saveTodo} className="edit-btn">
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => editTodo(todo.id)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <Footer
            todos={todos}
            setFilter={setFilter}
            handleClearCompleted={handleClearCompleted}
          />
          <ButtonsMobile setFilter={setFilter} />
        </div>
        <BottomText task={todos} />
      </div>
    </div>
  );
}

export default App;
