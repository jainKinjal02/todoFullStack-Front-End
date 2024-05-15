import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query GetTodos {
        getTodos{
            id
            text
            completed
        }
    }
`

export const ADD_TODO = gql`
    mutation AddTodo($text: String!){
        addTodo(text: $text){
            id
            text
            completed
        }
    }

`

export const TOGGLE_TODO_COMPLETION = gql`
    mutation ToggleTodoCompletion($id: ID!){
        toggleTodoCompletion(id: $id){
            id
            text
            completed
        }
    }
`

export const DELETE_TOGO = gql`
    mutation DeleteTodo($id: ID!){
        deleteTodo(id: $id)
    }
`