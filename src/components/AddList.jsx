export default function AddList() {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)        
    }   

    return (
        <div className='add-todo'>
          <div className='input-field'>
              <button><img src='./src/assets/images/add-circle.svg'/></button>         
              <input 
                className='item-input' 
                type="text" 
                class="input-field" 
                placeholder="Create a new todo..." 
                onChange={handleInputChange}
              />
          </div>
        </div>
    )
}