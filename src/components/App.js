import React from 'react'
import Footer from './Footer'
import './comp.css'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <h1>To Do List</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
