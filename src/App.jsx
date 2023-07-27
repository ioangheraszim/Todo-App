import { useState } from 'react'
import Header from './components/Header'
import AddList from './components/AddList'
import DisplayTodoList from './components/DisplayTodoList'
import BottomText from './components/BottomText'
function App() {  
  return (    
    <div class="container">
      <div class="top-background"></div>      
      <div class="wrapper">
        <Header />
        <AddList />
        <DisplayTodoList />
        <BottomText />
      </div>
    </div>    
  )
}

export default App
