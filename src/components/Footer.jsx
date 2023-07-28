export default function Footer() {
    
    return (
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
    )
}