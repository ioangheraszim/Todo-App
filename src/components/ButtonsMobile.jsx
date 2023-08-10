export default function ButtonsMobile({ setFilter, dark }) {
  return (
    <div className={`button-wrapper-mb ${dark ? "dark" : ""}`}>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}
