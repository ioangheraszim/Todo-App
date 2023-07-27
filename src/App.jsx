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
        <div className='add-todo'>
          <div className='input-field'>
              <button><img src='./src/assets/images/add-circle.svg'/></button>         
              <input className='item-input' type="text" class="input-field" placeholder="Create a new todo..." />
          </div>
        </div>
        <div className="list-items">
          <div className="items">
            <div class="todo-item">
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox"></label>
              <p>this is task number 1 </p>              
            </div>
            <div className="action-btns">
              <button><img src='./src/assets/images/pencil.svg' /></button>
              <button><img src='./src/assets/images/icon-cross.svg' /></button>
            </div> 
          </div>
          <div className='footer'>
            <div className='left-side'>
                <p>5 items left</p>
            </div>           
            <div className='button-wrapper'>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>            
            <div className='clear-button'>
              <button className='clear-btn'>Clear Completed</button>
            </div>
          </div>
          <div className='button-wrapper-mb'>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
          </div>
          
        </div>
        <div className="message-txt">
          <p className="info-txt"> Drag and drop to reorder list </p>
        </div>
        
      </div>
      
    </div>    
  )
}

export default App
