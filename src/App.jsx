import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Todo from './components/Todo'
import Header from './components/Header';

function App() {

  return (
    <div className="App">
    <Header />
    <Todo />
    </div>
   
  )
}

export default App
