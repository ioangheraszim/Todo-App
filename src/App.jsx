import { useState } from 'react'
function App() {  
  return (    
    <div class="container">
      <div class="top-background"></div>      
      <div class="todo-list">
        <div class="header">
            <div class="logo">Todo</div>
            <button class="change-button">Change</button>
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
