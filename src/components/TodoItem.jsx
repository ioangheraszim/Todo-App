export default function TodoItem({
  todo,
  selectedTodo,
  editValue,
  toggleCompletion,
  editTodo,
  deleteTodo,
  saveTodo,
}) {
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
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div className="action-btns">
        {selectedTodo && selectedTodo.id === todo.id ? (
          <button onClick={saveTodo} className="edit-btn">
            <img src="./src/assets/images/icon-save.svg" alt="save button" />
          </button>
        ) : (
          <button onClick={() => editTodo(todo.id)} className="edit-btn">
            <img src="./src/assets/images/pencil.svg" alt="save button" />
          </button>
        )}
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          <img src="./src/assets/images/icon-cross.svg" alt="save button" />
        </button>
      </div>
    </div>
  );
}
