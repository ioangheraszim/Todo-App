export default function Header({ handleThemeChange, dark }) {
  return (
    <div className="header">
      <div className="logo">
        <h1>TODO</h1>
      </div>
      <div className="theme-btn">
        <button onClick={handleThemeChange} className="change-button">
          <img
            src={
              !dark
                ? "./src/assets/images/icon-sun.svg"
                : "./src/assets/images/icon-moon.svg"
            }
          />
        </button>
      </div>
    </div>
  );
}
