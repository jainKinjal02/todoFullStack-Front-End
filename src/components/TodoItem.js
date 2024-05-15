import React from 'react';
import { useMutation } from '@apollo/client';
import { GET_TODOS, DELETE_TOGO, TOGGLE_TODO_COMPLETION } from '../queries';


const TodoItem = ({todo}) => {
const [toggleTodoCompletion] = useMutation(TOGGLE_TODO_COMPLETION,{
    refetchQueries: [{query : GET_TODOS}]
});

const [deleteTodo] = useMutation(DELETE_TOGO,{
    refetchQueries:[{query: GET_TODOS}]
});

  return (
   <li>
        <span style={{textDecoration : todo.completed ? 'line-through' : 'none'}}
            onClick={()=> toggleTodoCompletion({variable: {id: todo.id}})}
            >{todo.text}
        </span>
        <button onClick={()=> deleteTodo({variables : {id: todo.id}})}>
            Remove
        </button>
   </li>
  )
}

export default TodoItem;

