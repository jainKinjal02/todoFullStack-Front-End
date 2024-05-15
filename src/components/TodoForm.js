import React, { useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO, GET_TODOS } from '../queries';


export const TodoForm = () => {
const [text, setText] = useState('');

const [addTodo] = useMutation(ADD_TODO,{
    refetchQueries: [{query: GET_TODOS}]
})

const submitForm = (e) => {
    e.preventDefault();
    if(text){
        addTodo({variables: {text: text}})
        setText('');
    }

}

  return (
    <form onSubmit={submitForm}>
        <input type='text' placeholder='Add a todo' value={text} onChange={(e)=> setText(e.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
