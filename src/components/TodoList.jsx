import TodoCard from "./TodoCard"
import PropTypes from 'prop-types'
export default function TodoList({todos,handleDeleteTodo,}) {
  return (
    <ul className='main'>
      {todos.map((todo , todoIndex) =>{
        return(
            <TodoCard key={todoIndex} handleDeleteTodo={handleDeleteTodo} index={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
TodoList.propTypes={
    todos: PropTypes.arrayOf(PropTypes.string),
    handleDeleteTodo: PropTypes.func
}
