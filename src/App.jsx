import { useState } from 'react'
function App() {  
  return (    
    <div class="container">
      <div class="top-background"></div>      
      <div class="wrapper">
        <div class="header">
            <div class="logo">
              <h1>TODO</h1>
            </div>
            <div className="theme-btn">
              <button class="change-button"><img src='./src/assets/images/icon-sun.svg'/></button>
            </div>           
        </div>
        <div className="list-items">
          <input type="text" class="input-field" placeholder="Add a new item..." />
          <div class="todo-item">
            <input type="checkbox" class="checkbox" />
            <span>Item 1</span>
          </div> 
        </div>
          
      </div>
    </div>    
  )
}

export default App
