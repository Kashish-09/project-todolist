import PropTypes from 'prop-types'
export default function TodoCard({children, handleDeleteTodo, TodoIndex, handleEditTodo}) {
  return (
    <li className='todoItem'>
        {children}
                <div className='actionContainer'>
                    <button onClick={() => handleDeleteTodo(TodoIndex)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => handleEditTodo(TodoIndex)}>
                        <i className="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </li>
  )
}
TodoCard.propTypes={
    children:PropTypes.node.isRequislate,
    handleDeleteTodo: PropTypes.func,
    handleEditTodo: PropTypes.func,
    TodoIndex: PropTypes.number
}