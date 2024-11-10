import {useState} from "react"
import PropTypes from 'prop-types'
export default function TodoInput({handleAddTodos}){
    const [todoValue, setodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) =>
                setodoValue(e.target.value)
            } placeholder="Enter an item in the list..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setodoValue('')
            }}>Add </button>

        </header>
    )
}
TodoInput.propTypes={
    handleAddTodos: PropTypes.func,
    //todoValue: PropTypes.string,
    //setTodoValue: PropTypes.string
}