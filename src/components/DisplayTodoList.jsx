export default function DisplayTodoList() {
    return (
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
    )
}
