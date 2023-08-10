import TodoItem from "./TodoItem";

export default function TodoList({
  filteredTodos,
  selectedTodo,
  editValue,
  toggleCompletion,
  editTodo,
  deleteTodo,
  saveTodo,
  setEditValue,
  dark
}) {
  return (
    <div className="list-items">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selectedTodo={selectedTodo}
          editValue={editValue}
          toggleCompletion={toggleCompletion}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          saveTodo={saveTodo}
          setEditValue={setEditValue}
          dark={dark}
        />
      ))}
    </div>
  );
}
