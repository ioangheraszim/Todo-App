export default function AddList({
  inputValue,
  handleInput,
  handleKeyPress,
  addTodo,
}) {
  return (
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
  );
}
