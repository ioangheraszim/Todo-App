export default function Footer({ todos, setFilter, handleClearCompleted }) {
  return (
    <div className="footer">
      <div className="left-side">
        <p>{todos.length} items left</p>
      </div>
      <div className="button-wrapper">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div className="clear-button">
        <button className="clear-btn" onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}
