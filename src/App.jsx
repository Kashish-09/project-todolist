import {useState} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const[todos, setTodos] = useState([
    'Go to the gym',
    'Eat more fruits and vegs',
    'Complete react project'])
  const[todoValue, setTodoValue] = useState('')
    function handleAddTodos(newTodos){
      const newTodoList=[...todos,newTodos]
      setTodos(newTodoList)
    }
    function handleEditTodo(index){
      const valueToBeEdited= todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    }
    function handleDeleteTodo(index){
      const newTodoList= todos.filter((todo,todoIndex) => {
        return todoIndex !== index
      })
      setTodos(newTodoList)
    }
  return (
    <>
      <TodoInput 
      todoValue={todoValue} 
      setodoValue={setTodoValue} 
      handleAddTodos={handleAddTodos}  
      />
      <TodoList 
      todos={todos}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo} 
      />
    </>
  )
}
export default App
