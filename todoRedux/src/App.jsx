import './App.css'
import AddTodo from './components/AddTodo';
import Todo from "./components/Todo";
function App() {


  return (
    <>
      <h1>Redux Todo list</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
