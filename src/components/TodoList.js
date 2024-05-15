import React from 'react';
import { GET_TODOS } from '../queries';
import { useQuery } from '@apollo/client';
import TodoItem from './TodoItem';


const TodoList = () => {
  const [data, loading, error] = useQuery(GET_TODOS);

  if(loading) return <p>Loading...</p>
  if(error) return  <p>{error.message}</p>

  return (
    <div>
        {data.getTodos.length === 0 ? (
            <p>No todos available. Add one!</p>
        ) : (
            <ul>
                { data.getTodos.map((todo)=> <TodoItem key={todo.id} todo={todo} />)}
            </ul>
        )}
    </div>
  )
}

export default TodoList;

