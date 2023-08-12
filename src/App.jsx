import { useEffect, useState } from "react";
import Header from "./components/Header";
import BottomText from "./components/BottomText";
import AddList from "./components/AddList";
import Footer from "./components/Footer";
import ButtonsMobile from "./components/ButtonsMobile";
import TodoList from "./components/TodoList";

function App() {
  /** States */
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [dark, setDark] = useState(false);
  
  const saveToLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const loadFromLocal = () => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  }

  useEffect(() => {
    const loadedTodos = loadFromLocal();
    if (loadedTodos.length > 0) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    saveToLocal();
  }, [todos]);
  
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

  const handleThemeChange = () => {
    setDark(!dark);
  };

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

  /** Removes all the completed items from the todo list */
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
    <div className={`container ${dark ? "dark" : ""}`}>
      <div className={`top-background ${dark ? "dark" : ""}`}></div>
      <div className="wrapper">
        <Header handleThemeChange={handleThemeChange} dark={dark} />
        <AddList
          inputValue={inputValue}
          handleInput={handleInput}
          handleKeyPress={handleKeyPress}
          addTodo={addTodo}
          handleThemeChange={handleThemeChange} 
          dark={dark}
        />
        <div className="list-items">
          <TodoList
            filteredTodos={filteredTodos}
            selectedTodo={selectedTodo}
            editValue={editValue}
            toggleCompletion={toggleCompletion}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
            saveTodo={saveTodo}
            setEditValue={setEditValue}
            dark={dark}
          />
          <Footer
            todos={todos}
            setFilter={setFilter}
            handleClearCompleted={handleClearCompleted}
            dark={dark}
          />
          <ButtonsMobile dark={dark} setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
}

export default App;
