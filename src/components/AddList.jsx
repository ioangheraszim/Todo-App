export default function AddList() {
    return (
        <div className='add-todo'>
          <div className='input-field'>
              <button><img src='./src/assets/images/add-circle.svg'/></button>         
              <input className='item-input' type="text" class="input-field" placeholder="Create a new todo..." />
          </div>
        </div>
    )
}