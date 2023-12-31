function TodoItem({
  todo,
  selectedTodo,
  editValue,
  toggleCompletion,
  editTodo,
  deleteTodo,
  saveTodo,
  setEditValue,
  dark,
}) {
  return (
    <div className={`items ${dark ? "dark" : ""}`} key={todo.id}>
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
            className={`edit-input ${dark ? "dark" : ""}`}
          />
        ) : (
          <p
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              opacity: todo.completed ? 0.5 : 1,
            }}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className="action-btns">
        {selectedTodo && selectedTodo.id === todo.id ? (
          <button onClick={saveTodo} className="edit-btn">
            <img src="./images/icon-saves.svg" alt="save image" />
          </button>
        ) : (
          <button onClick={() => editTodo(todo.id)} className="edit-btn">
            <img src="./images/icon-pencil.svg" alt="edit image" />
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          <img src="./images/icon-cross.svg" alt="delete image" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
