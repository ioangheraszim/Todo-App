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
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }
          />
        </button>
      </div>
    </div>
  );
}
