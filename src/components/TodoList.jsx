import TodoItem from "./TodoItem";
import Footer from "./Footer";
import ButtonsMobile from "./ButtonsMobile";

export default function TodoList({ filteredTodos, selectedTodo, editValue, toggleCompletion, editTodo, deleteTodo, saveTodo,}) {
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
        />
      ))}
      <Footer
          todos={todos}
          setFilter={setFilter}
          handleClearCompleted={handleClearCompleted}
        />
        <BottomText task={todos} />
    </div>
  );
}