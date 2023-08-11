export const addTodo = () => {
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